"use client";

export default function About() {
  const features = [
    { icon: "🏆", title: "Industry Certified", desc: "Globally recognized certificates" },
    { icon: "💼", title: "Job Ready", desc: "Placement support included" },
    { icon: "👨‍💻", title: "Expert Mentors", desc: "Learn from practitioners" },
    { icon: "🔄", title: "Ongoing Support", desc: "Lifetime community access" },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-green-500/15 rounded-full" />
              <div className="absolute inset-4 border border-green-500/10 rounded-full" />

              <div className="absolute inset-16 bg-[#0a1f12] border border-green-500/30 rounded-full flex items-center justify-center animate-float green-glow">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-white">ZYNEX</div>
                  <div className="font-display font-black text-3xl text-green-400">SOLUTIONS</div>
                  <div className="text-green-500/60 text-xs mt-2 tracking-widest uppercase">Est. 2023</div>
                </div>
              </div>

              {["🛡️ Security", "🌐 Web Dev", "📊 Data", "🎨 Design"].map((item, i) => {
                const angle = (i * 90) - 45;
                const rad = (angle * Math.PI) / 180;
                const r = 42;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="absolute bg-[#0d1f14] border border-green-500/30 rounded-full px-3 py-1.5 text-xs text-green-300 font-medium whitespace-nowrap backdrop-blur-sm"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="tag-chip mb-4">About Us</div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Shaping Pakistan's<br />
              <span className="shimmer-text">Tech Talent Pipeline</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Zynex Solutions was founded with a singular mission — to bridge the gap between raw talent and industry-ready professionals. We combine world-class education with real business solutions, creating an ecosystem where students thrive and businesses grow.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With 100+ students mentored, industry partnerships, and job placement support, we don't just teach — we transform careers and build digital businesses.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="bg-white/2 border border-white/6 rounded-xl p-4 hover:border-green-500/25 transition-all group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="font-semibold text-white text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
