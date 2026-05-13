"use client";
import { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const features = [
    {
      title: "SECP REGISTERED",
      desc: "Legally recognized entity in Pakistan",
      icon: (
        <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Job Ready",
      desc: "Placement support included",
      icon: (
        <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Expert Mentors",
      desc: "Learn from practitioners",
      icon: (
        <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="pt-0 pb-4 relative scroll-mt-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-8 leading-tight">
            About <span className="shimmer-text">Zynex Solutions</span>
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-white/90 text-lg leading-relaxed">
              At Zynex Solutions, we drive innovation at the intersection of technology and education. Based in Lahore, Pakistan, we empower learners and businesses globally.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Founded with a vision to revolutionize the tech landscape in Pakistan, Zynex Solutions (Pvt. Ltd.) has quickly become a trusted name for both high-end software development and industry-ready IT training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div key={i} className="group relative bg-brand-card/40 border border-white/5 rounded-2xl p-8 hover:border-brand-green/30 active:bg-brand-green/5 active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer touch-manipulation">
                <div className="absolute inset-0 bg-linear-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:to-transparent transition-all duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-black transition-all duration-300 text-brand-green">
                    {item.icon}
                  </div>
                  <div className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-green transition-colors">{item.title}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
