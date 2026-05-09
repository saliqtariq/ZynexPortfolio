"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveNav(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050f0a]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("Home")}>
          <div>
            <span className="font-display font-black text-white text-xl tracking-tight">ZYNEX</span>
            <span className="font-display font-black text-green-400 text-xl tracking-tight ml-1">SOLUTIONS</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 nav-pill rounded-full px-2 py-1">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeNav === link
                  ? 'bg-green-500 text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block btn-primary text-black font-semibold text-sm px-5 py-2.5 rounded-full"
        >
          Get Started →
        </button>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-green-400 mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-green-400 mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-green-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a1a0f]/95 backdrop-blur-xl border-t border-green-500/10 px-6 py-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left text-gray-300 hover:text-green-400 py-3 border-b border-white/5 font-medium transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="w-full mt-4 btn-primary text-black font-bold py-3 rounded-xl"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
