"use client";
import { NAV_LINKS, COURSES } from "@/lib/data";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-16 bg-[#030a06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display font-black text-white text-xl tracking-tight">ZYNEX <span className="text-green-400">SOLUTIONS</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Pakistan's premier tech education & digital solutions company. Building careers and businesses through world-class training and innovation since 2023.
            </p>
            <div className="flex gap-4">
              {/* Placeholder social icons */}
              {["𝕏", "in", "ig", "fb"].map((social, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-black hover:border-brand-green transition-all cursor-pointer text-xs font-bold">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-gray-500 hover:text-brand-green text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Courses</h4>
            <ul className="space-y-3">
              {COURSES.map(course => (
                <li key={course.title}>
                  <button
                    onClick={() => scrollTo("courses")}
                    className="text-gray-500 hover:text-brand-green text-sm transition-colors text-left"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
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
