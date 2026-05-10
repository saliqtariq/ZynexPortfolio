"use client";
import { useState, useEffect } from "react";
import { STATS, TESTIMONIALS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/15 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="tag-chip mb-4">By The Numbers</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Impact That <span className="shimmer-text">Speaks</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <div key={i} className="relative group card-hover bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="font-display font-black text-5xl text-brand-green mb-2">
                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-display font-bold text-2xl text-white">What Our Students Say</h3>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0a1a0f] border border-green-500/15 rounded-3xl p-10 relative shadow-2xl">
            <div className="text-6xl text-green-500/20 font-display absolute top-6 left-8">"</div>
            <div className="relative h-[160px] md:h-[120px]">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`absolute inset-0 transition-all duration-700 ${activeTestimonial === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center font-display font-black text-black text-lg shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{t.name}</div>
                      <div className="text-brand-green text-sm font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`transition-all duration-500 rounded-full h-1.5 ${activeTestimonial === i ? 'w-10 bg-brand-green' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
