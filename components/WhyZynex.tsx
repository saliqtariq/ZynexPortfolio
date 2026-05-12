"use client";
import { WHY_ZYNEX } from "@/lib/data";

export default function WhyZynex() {
  return (
    <section id="why-zynex" className="py-20 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="tag-chip mb-4">Why Choose Us</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            The Zynex <span className="shimmer-text">Advantage</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ZYNEX.map((item, i) => (
            <div key={i} className="group card-hover bg-linear-to-br from-white/3 to-green-950/10 border border-white/5 rounded-2xl p-8 hover:border-brand-green/30 transition-all duration-300">
              <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-green transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
