"use client";
import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: string | number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = typeof target === 'string' ? parseInt(target) : target;
        if (isNaN(num)) return;

        const stepTime = 16; // ~60fps
        const totalSteps = duration / stepTime;
        const stepValue = num / totalSteps;
        let current = 0;

        timer = setInterval(() => {
          current += stepValue;
          if (current >= num) {
            setCount(num);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepTime);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
