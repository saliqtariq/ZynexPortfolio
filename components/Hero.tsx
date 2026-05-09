"use client";
import { STATS } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredStats = STATS.filter(s => 
    s.label === "Students Mentored" || s.label === "Satisfaction Rate"
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-line-bg">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] animate-orb-drift pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'orb-drift 20s ease-in-out infinite reverse' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-12 tracking-tight animate-in">
          <span className="text-white">Build Your</span>
          <br />
          <span className="shimmer-text italic px-2">Digital Future</span>
          <br />
          <span className="text-white text-4xl md:text-6xl lg:text-7xl opacity-90">with Zynex Solutions</span>
        </h1>

        {/* Buttons with softened shadows and light effect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-in delay-200">
          <button
            onClick={() => scrollTo("courses")}
            className="btn-primary text-black font-bold text-base px-12 py-5 rounded-full w-full sm:w-auto shadow-[0_8px_20px_rgba(34,197,94,0.15)] hover:shadow-[0_12px_30px_rgba(34,197,94,0.25)] hover:scale-105 active:scale-95 transition-all"
          >
            Explore Courses
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="btn-primary text-black font-bold text-base px-12 py-5 rounded-full w-full sm:w-auto shadow-[0_8px_20px_rgba(34,197,94,0.15)] hover:shadow-[0_12px_30px_rgba(34,197,94,0.25)] hover:scale-105 active:scale-95 transition-all"
          >
            Our Services
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto animate-in delay-400">
          {filteredStats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative px-12 py-7 rounded-[2.5rem] bg-brand-card/30 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-brand-green/5 hover:border-brand-green/30 min-w-[360px]"
            >
              <div className="relative z-10 flex items-center justify-start gap-8">
                <span className="font-display font-black text-5xl md:text-6xl text-brand-green tracking-tighter">
                  {stat.value}
                </span>
                <span className="font-display text-white text-sm md:text-lg uppercase tracking-[0.2em] font-bold group-hover:text-brand-green transition-colors text-left leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
