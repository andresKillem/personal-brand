import { camps } from "@/lib/content";

/* ============================================================
   RouteMap — the career plotted on the hero's terrain.
   Each camp is a marker on the map; the route switchbacks up the
   right side of the hero, from the valley to the current position.
   Positions are percentages of the map area.
   ============================================================ */

type MapPosition = { x: number; y: number; labelSide: "right" | "left" };

/** One position per camp, in the same order as `camps`. */
const CAMP_POSITIONS: MapPosition[] = [
  { x: 64, y: 90, labelSide: "right" },
  { x: 74, y: 82, labelSide: "right" },
  { x: 68, y: 70, labelSide: "left" },
  { x: 79, y: 63, labelSide: "right" },
  { x: 71, y: 51, labelSide: "left" },
  { x: 83, y: 43, labelSide: "right" },
  { x: 75, y: 31, labelSide: "left" },
  { x: 87, y: 19, labelSide: "right" },
];

const TRAILHEAD = { x: 55, y: 97 };

/** A switchback trail: straight legs between camps, like a path drawn on a survey map. */
function routePath(points: { x: number; y: number }[]): string {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
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
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="7 6"
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
                  position.labelSide === "right" ? "top-2 left-3" : "top-2 right-5 text-right"
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
