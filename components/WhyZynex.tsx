"use client";
import { WHY_ZYNEX } from "@/lib/data";

export default function WhyZynex() {
  return (
    <section id="why-zynex" className="pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            The Zynex <span className="shimmer-text">Advantage</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ZYNEX.map((item, i) => (
            <div key={i} className="group relative bg-[#0a1a0f] border border-green-500/10 rounded-3xl p-8 transition-all duration-500 hover:border-brand-green/40 hover:-translate-y-2 active:scale-95 touch-manipulation overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute -inset-1 bg-linear-to-br from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display font-black text-white text-xl mb-3 group-hover:shimmer-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
