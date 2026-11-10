"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CompanyMark } from "@/components/CompanyMark";
import { camps, type Camp } from "@/lib/content";

/* ============================================================
   ElevationProfile — the career drawn as a climb.
   Each role is a camp on the ridge; pick one to read its notes.
   The vertical axis is scope, not metres.
   ============================================================ */

const CHART_WIDTH = 1000;
const CHART_HEIGHT = 360;
const PADDING_LEFT = 36;
const PADDING_RIGHT = 56;
const GROUND_Y = 318;
const SUMMIT_Y = 52;
const FIRST_YEAR = 2010;
const LAST_YEAR = 2027;
const AXIS_YEARS = [2011, 2014, 2017, 2020, 2023, 2026];

function yearToX(year: number): number {
  const span = CHART_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  return PADDING_LEFT + ((year - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * span;
}

function levelToY(level: number): number {
  return GROUND_Y - level * (GROUND_Y - SUMMIT_Y);
}

type Point = { x: number; y: number };

/** Smooth ridge through the camps (Catmull-Rom converted to cubic Béziers). */
function ridgePath(points: Point[]): string {
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const previous = points[Math.max(0, i - 1)];
    const start = points[i];
    const end = points[i + 1];
    const next = points[Math.min(points.length - 1, i + 2)];
    const tension = 0.16;
    const control1 = { x: start.x + (end.x - previous.x) * tension, y: start.y + (end.y - previous.y) * tension };
    const control2 = { x: end.x - (next.x - start.x) * tension, y: end.y - (next.y - start.y) * tension };
    path += ` C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`;
  }
  return path;
}

export function ElevationProfile() {
  const defaultCamp = camps.find((camp) => camp.isCurrent) ?? camps[camps.length - 1];
  const [selectedCamp, setSelectedCamp] = useState<Camp>(defaultCamp);

  const campPoints: Point[] = camps.map((camp) => ({ x: yearToX(camp.chartYear), y: levelToY(camp.chartLevel) }));
  const trailhead: Point = { x: yearToX(FIRST_YEAR), y: levelToY(0.04) };
  const ridge = ridgePath([trailhead, ...campPoints]);
  const lastPoint = campPoints[campPoints.length - 1];
  const terrain = `${ridge} L ${lastPoint.x} ${GROUND_Y} L ${trailhead.x} ${GROUND_Y} Z`;

  return (
    <div>
      <div className="frame p-3 sm:p-5">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="label">Fig. P — Career profile</span>
          <span className="label hidden sm:inline">Vertical axis: scope, not metres</span>
        </div>

        {/* On narrow screens the chart keeps a readable size and scrolls sideways */}
        <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className="w-full min-w-[640px] h-auto"
          role="img"
          aria-label="Career drawn as an elevation profile, rising from 2011 to today. Use the camp buttons below to read each role."
        >
          <defs>
            <linearGradient id="terrain-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-glacier)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-glacier)" stopOpacity="0" />
            </linearGradient>
            <pattern id="terrain-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
              <line x1="0" y1="0" x2="0" y2="7" stroke="var(--color-ink)" strokeOpacity="0.07" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Altitude grid */}
          {[0.25, 0.5, 0.75, 1].map((level) => (
            <line
              key={level}
              x1={PADDING_LEFT}
              x2={CHART_WIDTH - 12}
              y1={levelToY(level)}
              y2={levelToY(level)}
              stroke="var(--color-line)"
              strokeDasharray="2 7"
            />
          ))}

          {/* Terrain */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <path d={terrain} fill="url(#terrain-fill)" />
            <path d={terrain} fill="url(#terrain-hatch)" />
          </motion.g>

          {/* The route */}
          <motion.path
            d={ridge}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Ground line + year ticks */}
          <line x1={PADDING_LEFT} x2={CHART_WIDTH - 12} y1={GROUND_Y} y2={GROUND_Y} stroke="var(--color-line-strong)" />
          {AXIS_YEARS.map((year) => (
            <g key={year}>
              <line x1={yearToX(year)} x2={yearToX(year)} y1={GROUND_Y} y2={GROUND_Y + 6} stroke="var(--color-line-strong)" />
              <text
                x={yearToX(year)}
                y={GROUND_Y + 22}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="0.14em"
                fill="var(--color-ink-faint)"
              >
                {year}
              </text>
            </g>
          ))}

          {/* Camps */}
          {camps.map((camp, index) => {
            const point = campPoints[index];
            const isSelected = camp.numeral === selectedCamp.numeral;
            const markerColor = isSelected ? "var(--color-accent)" : "var(--color-ink)";
            return (
              <g
                key={camp.numeral}
                onClick={() => setSelectedCamp(camp)}
                style={{ cursor: "pointer" }}
                aria-hidden="true"
              >
                <line
                  x1={point.x}
                  x2={point.x}
                  y1={point.y}
                  y2={GROUND_Y}
                  stroke={markerColor}
                  strokeOpacity={isSelected ? 0.7 : 0.16}
                  strokeDasharray="1 4"
                />
                {camp.isCurrent && (
                  <circle cx={point.x} cy={point.y} r="6" fill="none" stroke="var(--color-accent)" className="beacon" />
                )}
                {/* Camp marker: a small tent triangle */}
                <path
                  d={`M ${point.x - 7} ${point.y + 5} L ${point.x} ${point.y - 8} L ${point.x + 7} ${point.y + 5} Z`}
                  fill={isSelected ? "var(--color-accent)" : "var(--color-paper)"}
                  stroke={markerColor}
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <text
                  x={point.x}
                  y={point.y - 17}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="10.5"
                  letterSpacing="0.12em"
                  fill={isSelected ? "var(--color-accent)" : "var(--color-ink-soft)"}
                >
                  {camp.numeral}
                </text>
                {/* Generous invisible hit area */}
                <rect x={point.x - 22} y={point.y - 34} width="44" height={GROUND_Y - point.y + 34} fill="transparent" />
              </g>
            );
          })}
        </svg>
        </div>

        {/* Camp selector — the accessible control for the chart above */}
        <div role="tablist" aria-label="Career camps" className="mt-3 flex flex-wrap gap-1.5 px-1">
          {camps.map((camp) => {
            const isSelected = camp.numeral === selectedCamp.numeral;
            return (
              <button
                key={camp.numeral}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCamp(camp)}
                className={`font-mono text-[0.625rem] tracking-[0.12em] uppercase px-2.5 py-2 border transition-colors ${
                  isSelected
                    ? "border-accent bg-accent text-paper"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <CompanyMark company={camp.company} size={16} />
                  {camp.company}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Field notes for the selected camp */}
      <motion.div
        key={selectedCamp.numeral}
        role="tabpanel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid grid-cols-12 gap-x-8 gap-y-5"
      >
        <div className="col-span-12 md:col-span-5">
          <div className="label flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-accent">Camp {selectedCamp.numeral}</span>
            <span>{selectedCamp.period}</span>
            {selectedCamp.location && <span>{selectedCamp.location}</span>}
          </div>
          <h3 className="display-md font-display mt-3">{selectedCamp.title}</h3>
          <p className="font-display italic text-2xl text-accent mt-2 flex items-center gap-3">
            <CompanyMark company={selectedCamp.company} />
            {selectedCamp.company}
          </p>
          {selectedCamp.isCurrent && (
            <p className="label mt-4 inline-flex items-center gap-2 text-glacier">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-glacier" />
              Current position
            </p>
          )}
        </div>
        <ul className="col-span-12 md:col-span-7 space-y-3 text-ink-soft">
          {selectedCamp.notes.map((note) => (
            <li key={note} className="flex gap-4 border-t border-line pt-3">
              <span aria-hidden="true" className="text-accent font-mono text-xs pt-1.5">▲</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
