"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calc(end: Date): TimeLeft {
  const diff = Math.max(0, end.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    expired: diff === 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

interface Props {
  endDate: string; // ISO string
  nextPrice: number;
}

export function CountdownTimer({ endDate, nextPrice }: Props) {
  const end = new Date(endDate);
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calc(end));
    const id = setInterval(() => setTime(calc(end)), 1000);
    return () => clearInterval(id);
  }, [endDate]);

  if (!time) return null; // avoid hydration mismatch
  if (time.expired) {
    return (
      <p className="text-sm text-muted-foreground">
        Founders pricing has closed. Current price: ${nextPrice}.
      </p>
    );
  }

  const units =
    time.days > 0
      ? [
          { label: "days", value: time.days },
          { label: "hrs", value: time.hours },
          { label: "min", value: time.minutes },
          { label: "sec", value: time.seconds },
        ]
      : [
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
