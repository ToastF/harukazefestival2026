"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-05-30T00:00:00+07:00");
const START_DATE = new Date("2026-01-01T00:00:00+07:00");

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = EVENT_DATE.getTime() - now;

  return {
    days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
  };
}

function getIntensity() {
  const now = new Date().getTime();
  const total = EVENT_DATE.getTime() - START_DATE.getTime();
  const remaining = EVENT_DATE.getTime() - now;

  return Math.max(0, Math.min(1, 1 - remaining / total));
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [intensity, setIntensity] = useState(getIntensity());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
      setIntensity(getIntensity());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="countdown-card mb-5"
      style={{ "--intensity": intensity } as React.CSSProperties}
    >
      <h2 className="countdown-title">Harukaze Festival 2026</h2>

      <div className="countdown-grid">
        <div>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>

        <div>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>

        <div>
          <span>{timeLeft.minutes}</span>
          <p>Min</p>
        </div>

        <div>
          <span>{timeLeft.seconds}</span>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}