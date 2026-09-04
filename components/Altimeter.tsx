"use client";

import { useEffect, useState } from "react";

/* Scroll progress read as altitude: from Quito's streets to Cotopaxi's summit. */
const QUITO_ELEVATION_M = 2850;
const COTOPAXI_SUMMIT_M = 5897;

export function Altimeter() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const altitude = Math.round(QUITO_ELEVATION_M + (COTOPAXI_SUMMIT_M - QUITO_ELEVATION_M) * progress);

  return (
    <>
      <div
        className="hidden md:flex items-baseline gap-2 font-mono text-[0.625rem] tracking-[0.18em] uppercase text-ink-faint tabular-nums"
        title="Scroll altitude: Quito (2,850 m) to the summit of Cotopaxi (5,897 m)"
      >
        <span>Alt</span>
        <span className="text-ink">{altitude.toLocaleString("en-US")} m</span>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-[-1px] h-px bg-accent origin-left w-full"
        style={{ transform: `scaleX(${progress})` }}
      />
    </>
  );
}
