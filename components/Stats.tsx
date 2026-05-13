"use client";
import { STATS, TESTIMONIALS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section id="stats" className="pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            What Our <span className="shimmer-text">Students & Clients</span> Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Real experiences from graduates and UK businesses who have partnered with Zynex Solutions for transformative education and tailored technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#0a1a0f]/50 border border-green-500/10 rounded-3xl p-8 flex flex-col items-center text-center h-full hover:border-brand-green/40 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className={`w-4 h-4 ${index < t.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 grow italic">
                "{t.text}"
              </p>

              {/* Footer: Avatar and Info */}
              <div className="flex flex-col items-center gap-4 pt-6 border-t border-white/5 w-full mt-auto">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-brand-green to-emerald-600 flex items-center justify-center font-display font-black text-black text-base shrink-0 shadow-lg mb-2">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-base leading-tight mb-1">{t.name}</div>
                  <div className="text-xs text-gray-500 mb-1">{t.role}</div>
                  <div className="text-brand-green font-bold text-xs uppercase tracking-wider">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact That Speaks (Large Stats Cards) */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Impact That <span className="shimmer-text">Speaks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="group relative bg-[#0a1a0f] border border-green-500/20 rounded-[2rem] p-10 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-green/50 active:scale-95 touch-manipulation">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
              <div className="font-display font-black text-6xl text-brand-green mb-3 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-white text-xl tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
