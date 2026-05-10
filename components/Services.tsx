"use client";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="tag-chip mb-4">What We Do</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Our <span className="shimmer-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end digital solutions for startups, SMBs, and enterprises — everything you need to win online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <div key={i} className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 cursor-default hover:bg-brand-green/[0.05] hover:border-brand-green/30 transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2 leading-snug group-hover:text-brand-green transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{service.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 bg-brand-green w-0 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
