"use client";
import React from "react";
import { SERVICES } from "@/lib/data";

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="pt-0 pb-20 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 grid-line-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">

          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Our <span className="shimmer-text">Services</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            We design and develop cutting-edge digital solutions that drive growth, enhance efficiency, and elevate your brand. From web development to AI-powered integrations, our expertise ensures your business stays ahead in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const icons: Record<string, React.JSX.Element> = {
              "Custom Software Development": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              "SEO Services": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
              "UI/UX Design": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-1.657 1.657" />
                </svg>
              ),
              "Digital Marketing": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              ),
              "Social Media Marketing": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              "Web Development": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              "WordPress Development": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              "Data Analysis Services": (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
            };

            return (
              <div key={i} className="group relative bg-[#0a1a0f] border border-white/5 rounded-2xl p-0.5 cursor-pointer hover:border-brand-green/30 active:scale-[0.98] transition-all duration-500 overflow-hidden touch-manipulation">
                {/* Background ambient glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-green/5 rounded-full blur-[60px] group-hover:bg-brand-green/10 transition-colors duration-700" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon container */}
                  <div className="relative w-12 h-12 mb-5">
                    <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative w-full h-full rounded-2xl bg-[#0d2a18] border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:text-white group-hover:bg-brand-green transition-all duration-500">
                      {icons[service.title] || service.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-black text-white text-base mb-2 leading-tight group-hover:shimmer-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/90 text-[11px] leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Contact for</span>
                      <span className="text-brand-green font-black text-[10px] uppercase tracking-wider leading-none">Custom Quote</span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); scrollTo("contact"); }}
                      className="relative overflow-hidden bg-brand-green text-black font-black text-[9px] uppercase tracking-tighter px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group/btn"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
