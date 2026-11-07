"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Lagos",
});

export default function LagosClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="eyebrow tabular-nums">
      Lagos <span className="text-fg">{time ?? "--:--"}</span> WAT
    </p>
  );
}
