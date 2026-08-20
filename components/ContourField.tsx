"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   ContourField — a living topographic map.
   A drifting noise field is traced into contour lines with
   marching squares. The terrain swells under the pointer.
   ============================================================ */

const CELL_SIZE_PX = 16;
const CONTOUR_LEVEL_COUNT = 11;
const INDEX_CONTOUR_EVERY = 4;
const FRAME_INTERVAL_MS = 70;

function hash2d(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function smoothNoise(x: number, y: number): number {
  const xFloor = Math.floor(x);
  const yFloor = Math.floor(y);
  const xFrac = x - xFloor;
  const yFrac = y - yFloor;
  const u = xFrac * xFrac * (3 - 2 * xFrac);
  const v = yFrac * yFrac * (3 - 2 * yFrac);
  const topLeft = hash2d(xFloor, yFloor);
  const topRight = hash2d(xFloor + 1, yFloor);
  const bottomLeft = hash2d(xFloor, yFloor + 1);
  const bottomRight = hash2d(xFloor + 1, yFloor + 1);
  return (
    topLeft * (1 - u) * (1 - v) +
    topRight * u * (1 - v) +
    bottomLeft * (1 - u) * v +
    bottomRight * u * v
  );
}

function terrainHeight(x: number, y: number, drift: number): number {
  return (
    smoothNoise(x * 0.9 + drift, y * 0.9) * 0.6 +
    smoothNoise(x * 2.1 - drift * 0.7, y * 2.1 + drift * 0.4) * 0.28 +
    smoothNoise(x * 4.3, y * 4.3 - drift) * 0.12
  );
}

export function ContourField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getComputedStyle(document.documentElement);
    const contourColor = styles.getPropertyValue("--color-contour").trim() || "#22312C";
    const indexColor = styles.getPropertyValue("--color-glacier").trim() || "#8FD3C1";

    let widthPx = 0;
    let heightPx = 0;
    let columns = 0;
    let rows = 0;
    let heights = new Float32Array(0);
    const pointer = { x: -9999, y: -9999, strength: 0, targetStrength: 0 };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      widthPx = bounds.width;
      heightPx = bounds.height;
      canvas.width = Math.round(widthPx * pixelRatio);
      canvas.height = Math.round(heightPx * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      columns = Math.ceil(widthPx / CELL_SIZE_PX) + 1;
      rows = Math.ceil(heightPx / CELL_SIZE_PX) + 1;
      heights = new Float32Array(columns * rows);
    };

    const draw = (timeMs: number) => {
      const drift = timeMs * 0.000028;
      pointer.strength += (pointer.targetStrength - pointer.strength) * 0.08;

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const xPx = column * CELL_SIZE_PX;
          const yPx = row * CELL_SIZE_PX;
          let height = terrainHeight(xPx / 260, yPx / 260, drift);
          if (pointer.strength > 0.01) {
            const dx = xPx - pointer.x;
            const dy = yPx - pointer.y;
            height += pointer.strength * 0.22 * Math.exp(-(dx * dx + dy * dy) / 26000);
          }
          heights[row * columns + column] = height;
        }
      }

      context.clearRect(0, 0, widthPx, heightPx);
      context.lineWidth = 1;

      for (let levelIndex = 1; levelIndex <= CONTOUR_LEVEL_COUNT; levelIndex++) {
        const level = 0.18 + (levelIndex / (CONTOUR_LEVEL_COUNT + 1)) * 0.72;
        const isIndexContour = levelIndex % INDEX_CONTOUR_EVERY === 0;
        context.strokeStyle = isIndexContour ? indexColor : contourColor;
        context.globalAlpha = isIndexContour ? 0.34 : 1;
        context.beginPath();

        for (let row = 0; row < rows - 1; row++) {
          for (let column = 0; column < columns - 1; column++) {
            const topLeft = heights[row * columns + column];
            const topRight = heights[row * columns + column + 1];
            const bottomRight = heights[(row + 1) * columns + column + 1];
            const bottomLeft = heights[(row + 1) * columns + column];

            const caseIndex =
              (topLeft > level ? 8 : 0) |
              (topRight > level ? 4 : 0) |
              (bottomRight > level ? 2 : 0) |
              (bottomLeft > level ? 1 : 0);
            if (caseIndex === 0 || caseIndex === 15) continue;

            const x0 = column * CELL_SIZE_PX;
            const y0 = row * CELL_SIZE_PX;
            // Where the contour crosses each edge of the cell
            const topX = x0 + ((level - topLeft) / (topRight - topLeft)) * CELL_SIZE_PX;
            const bottomX = x0 + ((level - bottomLeft) / (bottomRight - bottomLeft)) * CELL_SIZE_PX;
            const leftY = y0 + ((level - topLeft) / (bottomLeft - topLeft)) * CELL_SIZE_PX;
            const rightY = y0 + ((level - topRight) / (bottomRight - topRight)) * CELL_SIZE_PX;
            const x1 = x0 + CELL_SIZE_PX;
            const y1 = y0 + CELL_SIZE_PX;

            const segment = (ax: number, ay: number, bx: number, by: number) => {
              context.moveTo(ax, ay);
              context.lineTo(bx, by);
            };

            switch (caseIndex) {
              case 1: case 14: segment(x0, leftY, bottomX, y1); break;
              case 2: case 13: segment(bottomX, y1, x1, rightY); break;
              case 3: case 12: segment(x0, leftY, x1, rightY); break;
              case 4: case 11: segment(topX, y0, x1, rightY); break;
              case 6: case 9: segment(topX, y0, bottomX, y1); break;
              case 7: case 8: segment(x0, leftY, topX, y0); break;
              case 5: segment(x0, leftY, topX, y0); segment(bottomX, y1, x1, rightY); break;
              case 10: segment(topX, y0, x1, rightY); segment(x0, leftY, bottomX, y1); break;
            }
          }
        }
        context.stroke();
      }
      context.globalAlpha = 1;
    };

    let animationFrame = 0;
    let lastDrawMs = 0;
    let isVisible = true;

    const loop = (timeMs: number) => {
      animationFrame = requestAnimationFrame(loop);
      if (!isVisible || timeMs - lastDrawMs < FRAME_INTERVAL_MS) return;
      lastDrawMs = timeMs;
      draw(timeMs);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      const isInside = pointer.y >= 0 && pointer.y <= bounds.height;
      pointer.targetStrength = isInside ? 1 : 0;
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    visibilityObserver.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);

    resize();
    draw(0);
    if (!prefersReducedMotion) {
      animationFrame = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
