"use client";
import { NAV_LINKS, COURSES, SERVICES } from "@/lib/data";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-20 bg-[#0a1a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display font-black text-white text-xl tracking-tight">ZYNEX <span className="text-green-400">SOLUTIONS</span></span>
            </div>
            <p className="text-white text-xs leading-relaxed max-w-sm mb-6">
              Pakistan's premier tech education & digital solutions company. Building careers and businesses through world-class training and innovation since 2023.
            </p>
            <div className="flex gap-4">
              {["𝕏", "in", "ig", "fb"].map((social, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:text-black hover:border-brand-green transition-all cursor-pointer text-xs font-bold">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.title}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white hover:text-brand-green text-sm transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Courses</h4>
            <ul className="space-y-3">
              {COURSES.slice(0, 8).map(course => (
                <li key={course.title}>
                  <button
                    onClick={() => scrollTo("courses")}
                    className="text-white hover:text-brand-green text-sm transition-colors text-left"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-white text-xs mb-1">Email Us</div>
                <a href="mailto:info@zynexsolutions.com" className="text-white hover:text-brand-green transition-colors text-sm font-medium">info@zynexsolutions.com</a>
              </li>
              <li>
                <div className="text-white text-xs mb-1">WhatsApp</div>
                <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors text-sm font-medium">+92 300 0000000</a>
              </li>
              <li>
                <div className="text-white text-xs mb-1">Location</div>
                <div className="text-white text-sm font-medium">Pakistan (Remote Worldwide)</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Zynex Solutions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-brand-green cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-green cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
