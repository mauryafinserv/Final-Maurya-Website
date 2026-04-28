// src/components/Stats.jsx
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Years of Legacy" },
  { value: 300, prefix: "₹", suffix: "+ Cr", label: "Assets Managed" },
  { value: 2500, suffix: "+", label: "Families Served" },
  { value: 2, suffix: "", label: "Offices — Mumbai & Patna" },
];

const Counter = ({ value, prefix = "", suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-16 border-t border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
