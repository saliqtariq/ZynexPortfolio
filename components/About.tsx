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
    <section id="about" className="pt-6 pb-4 relative scroll-mt-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-green-500/15 rounded-full" />
              <div className="absolute inset-4 border border-green-500/10 rounded-full" />

              <div className="absolute inset-16 bg-brand-card border border-green-500/30 rounded-full flex items-center justify-center animate-float green-glow">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-white">ZYNEX</div>
                  <div className="font-display font-black text-3xl text-green-400">SOLUTIONS</div>

                </div>
              </div>

              {[
                "MERN Stack", "Full Stack AI", "Cybersecurity",
                "Data Analysis", "Spoken English", "UI/UX Design",
                "DevOps", "SOC Analyst", "Digital Marketing",
                "Graphic Design", "SEO Expert"
              ].map((item, i, arr) => {
                const angle = (i * (360 / arr.length)) - 90;
                const rad = (angle * Math.PI) / 180;
                const r = isMobile ? 44 : 36;

                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="absolute bg-[#0a1a0f]/90 border border-green-500/40 rounded-full px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] text-green-300 font-bold uppercase tracking-wider whitespace-nowrap backdrop-blur-xl shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 hover:scale-110 hover:border-green-400 hover:text-white"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div>

            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
              About <span className="shimmer-text">Zynex Solutions</span>
            </h2>
            <p className="text-white/90 text-base leading-relaxed mb-2">
              At Zynex Solutions, we drive innovation at the intersection of technology and education. Based in Lahore, Pakistan, we empower learners and businesses globally.
            </p>
            <p className="text-white/90 text-base leading-relaxed mb-8">
              Founded with a vision to revolutionize the tech landscape in Pakistan, Zynex Solutions (Pvt. Ltd.) has quickly become a trusted name for both high-end software development and industry-ready IT training.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item, i) => (
                <div key={i} className="group relative bg-brand-card/40 border border-white/5 rounded-2xl p-5 hover:border-brand-green/30 active:bg-brand-green/5 active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer touch-manipulation">
                  <div className="absolute inset-0 bg-linear-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:to-transparent transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="font-display font-bold text-white text-sm mb-1 group-hover:text-brand-green transition-colors">{item.title}</div>
                    <div className="text-white text-[10px] leading-relaxed line-clamp-2">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
