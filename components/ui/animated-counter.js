"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const totalSteps = 20;
    const increment = value / totalSteps;

    const interval = window.setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        window.clearInterval(interval);
        return;
      }

      setCount(Math.round(current));
    }, 32);

    return () => window.clearInterval(interval);
  }, [value]);

  return <>{count}</>;
}
