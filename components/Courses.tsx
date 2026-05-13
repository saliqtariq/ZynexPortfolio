"use client";
import { useState } from "react";
import { COURSES } from "@/lib/data";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="pt-0 pb-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-8">
            Expert-Led <span className="shimmer-text">Courses</span>
          </h2>

          {/* Dropdown Menu */}
          <div className="flex justify-center relative z-30">
            <div className="relative w-full max-w-sm">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-[#0a1a0f] border border-green-500/20 rounded-2xl text-white font-bold transition-all hover:border-green-500/50 shadow-lg active:scale-[0.99]"
              >
                <span className="text-sm md:text-base">{COURSES[activeCourse].title}</span>
                <svg
                  className={`w-5 h-5 text-green-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <>
                  {/* Overlay to close on click outside */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                  />

                  <div className="absolute top-full left-0 right-0 mt-3 bg-[#0d2114] border border-green-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-20 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="p-2 space-y-1">
                      {COURSES.map((c, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveCourse(i);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center px-5 py-3 text-left transition-all rounded-xl ${activeCourse === i
                            ? "bg-green-500 text-black font-black"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                          <span className="text-xs md:text-sm">{c.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {COURSES.map((course, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${activeCourse === i ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}`}
            >
              <div className="bg-linear-to-br from-brand-card to-[#071209] border border-green-500/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className={`bg-linear-to-r ${course.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-white/80 mt-3 font-medium text-sm md:text-base max-w-lg">{course.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-8 mt-10">
                    <div>
                      <div className="text-white/40 text-[9px] uppercase font-black tracking-[0.2em] mb-2">Duration</div>
                      <div className="text-white font-bold text-lg">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-[9px] uppercase font-black tracking-[0.2em] mb-2">Projects</div>
                      <div className="text-white font-bold text-lg">{course.projects} Projects</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-[9px] uppercase font-black tracking-[0.2em] mb-2">Modules</div>
                      <div className="text-white font-bold text-lg">{course.modules} Modules</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-[9px] uppercase font-black tracking-[0.2em] mb-2">Installment</div>
                      <div className="text-white font-bold text-lg">{course.installment}</div>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h4 className="font-display font-black text-white text-xl mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-green-500" />
                        Key Skills You'll Master
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, j) => (
                          <span key={j} className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-green-400 text-xs font-bold transition-all hover:bg-green-500 hover:text-black">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-black text-white text-xl mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-green-500" />
                        Career Opportunities
                      </h4>
                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {course.jobs.map((job, j) => (
                          <div key={j} className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-green-300 text-sm font-bold tracking-wide hover:bg-green-500/10 hover:border-green-500/20 transition-all">
                            {job}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-auto">
                      <button
                        onClick={() => {
                          const msg = encodeURIComponent(`Hi, I want to enrol in the ${course.title} course.`);
                          window.open(`https://wa.me/923358746804?text=${msg}`, "_blank");
                        }}
                        className="btn-primary w-full md:w-80 text-black font-black py-5 rounded-2xl text-lg shadow-xl uppercase tracking-widest"
                      >
                        Enrol Now
                      </button>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-sm font-bold">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>{course.students} students enrolled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
