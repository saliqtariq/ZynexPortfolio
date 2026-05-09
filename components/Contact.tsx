"use client";

export default function Contact() {
  const info = [
    { icon: "📧", label: "Email", value: "info@zynexsolutions.com" },
    { icon: "📱", label: "WhatsApp", value: "+92 300 0000000" },
    { icon: "📍", label: "Location", value: "Pakistan (Remote Worldwide)" },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/15 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="tag-chip mb-4">Get In Touch</div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6">
          Ready to Start Your<br />
          <span className="shimmer-text">Journey?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Whether you want to enroll in a course or grow your business digitally, we're here to help. Reach out and let's talk.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {info.map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-brand-green/30 transition-all group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-white font-medium text-sm group-hover:text-brand-green transition-colors">{item.value}</div>
            </div>
          ))}
        </div>

        <form className="bg-[#0a1a0f] border border-green-500/15 rounded-3xl p-8 text-left shadow-2xl" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-green rounded-full" />
            Send Us a Message
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/40 focus:bg-white/[0.05] transition-all w-full"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/40 focus:bg-white/[0.05] transition-all w-full"
              />
            </div>
          </div>
          <div className="space-y-1 mb-4">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Interested In</label>
            <select className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none focus:border-brand-green/40 focus:bg-white/[0.05] transition-all w-full appearance-none">
              <option value="" className="bg-[#0a1a0f]">Select an option...</option>
              <option className="bg-[#0a1a0f]">Cybersecurity Course</option>
              <option className="bg-[#0a1a0f]">Web Development Course</option>
              <option className="bg-[#0a1a0f]">Data Analyst Course</option>
              <option className="bg-[#0a1a0f]">Business Services</option>
            </select>
          </div>
          <div className="space-y-1 mb-6">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Message</label>
            <textarea
              placeholder="Tell us more about your goals..."
              rows={4}
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/40 focus:bg-white/[0.05] transition-all w-full resize-none"
            />
          </div>
          <button className="btn-primary w-full text-black font-bold py-4 rounded-xl text-base shadow-xl">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
