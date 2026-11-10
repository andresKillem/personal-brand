import { camps } from "@/lib/content";

/* ============================================================
   RouteMap — the career plotted on the hero's terrain.
   Each camp is a marker on the map; the route climbs from the
   valley (lower left) to the current position (upper right).
   Positions are percentages of the map area.
   ============================================================ */

type MapPosition = { x: number; y: number; labelSide: "right" | "left" };

/** One position per camp, in the same order as `camps`. */
const CAMP_POSITIONS: MapPosition[] = [
  { x: 13, y: 86, labelSide: "right" },
  { x: 30, y: 82, labelSide: "right" },
  { x: 43, y: 72, labelSide: "right" },
  { x: 55, y: 68, labelSide: "right" },
  { x: 63, y: 55, labelSide: "right" },
  { x: 72, y: 47, labelSide: "right" },
  { x: 81, y: 33, labelSide: "right" },
  { x: 90, y: 17, labelSide: "left" },
];

const TRAILHEAD = { x: 4, y: 93 };

function routePath(points: { x: number; y: number }[]): string {
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const previous = points[Math.max(0, i - 1)];
    const start = points[i];
    const end = points[i + 1];
    const next = points[Math.min(points.length - 1, i + 2)];
    const tension = 0.2;
    path +=
      ` C ${start.x + (end.x - previous.x) * tension} ${start.y + (end.y - previous.y) * tension},` +
      ` ${end.x - (next.x - start.x) * tension} ${end.y - (next.y - start.y) * tension},` +
      ` ${end.x} ${end.y}`;
  }
  return path;
}

export function RouteMap({ className = "" }: { className?: string }) {
  const plottedCamps = camps.slice(0, CAMP_POSITIONS.length).map((camp, index) => ({
    camp,
    position: CAMP_POSITIONS[index],
  }));
  const path = routePath([TRAILHEAD, ...plottedCamps.map(({ position }) => position)]);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d={path}
          pathLength={1}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="route-line"
        />
      </svg>

      <ol className="contents" aria-label="Career route, oldest to current">
        {plottedCamps.map(({ camp, position }, index) => (
          <li
            key={camp.numeral}
            className="route-camp absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              animationDelay: `${0.5 + index * 0.16}s`,
            }}
          >
            <a href="#route" className="group block">
              <span className="absolute -translate-x-1/2 -translate-y-1/2 block">
                {camp.isCurrent && (
                  <span className="beacon absolute inset-0 rounded-full border border-accent" />
                )}
                <svg width="16" height="15" viewBox="0 0 16 15" className="relative block">
                  <path
                    d="M1.5 13.5 L8 1.5 L14.5 13.5 Z"
                    fill={camp.isCurrent ? "var(--color-accent)" : "var(--color-paper)"}
                    stroke={camp.isCurrent ? "var(--color-accent)" : "var(--color-ink)"}
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className={`absolute whitespace-nowrap ${
                  position.labelSide === "right" ? "top-2 left-3" : "bottom-1 right-5 text-right"
                }`}
              >
                <span
                  className={`hidden sm:block font-display italic leading-none transition-colors group-hover:text-accent ${
                    camp.isCurrent ? "text-2xl text-ink" : "text-lg text-ink-soft"
                  }`}
                >
                  {camp.company}
                </span>
                <span className="block font-mono text-[0.625rem] tracking-[0.14em] text-ink-faint mt-1">
                  {camp.period.slice(0, 4)}
                  {camp.isCurrent && <span className="text-accent"> · now</span>}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
