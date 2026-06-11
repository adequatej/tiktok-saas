"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Time remaining until the next reset of a recurring countdown that
// repeats every `cycleMs` milliseconds, anchored to the Unix epoch.
function calc(cycleMs: number): TimeLeft {
  const diff = cycleMs - (Date.now() % cycleMs);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

interface Props {
  cycleDays: number;
}

export function CountdownTimer({ cycleDays }: Props) {
  const cycleMs = cycleDays * 86_400_000;
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calc(cycleMs));
    const id = setInterval(() => setTime(calc(cycleMs)), 1000);
    return () => clearInterval(id);
  }, [cycleMs]);

  if (!time) return null; // avoid hydration mismatch

  const units = [
    { label: "days", value: time.days },
    { label: "hrs", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sec", value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-1 tabular-nums">
      {units.map((u, i) => (
        <span key={u.label} className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-bold text-accent">
            {pad(u.value)}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {u.label}
          </span>
          {i < units.length - 1 && (
            <span className="mx-0.5 font-display text-2xl font-bold text-accent/40">
              :
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
