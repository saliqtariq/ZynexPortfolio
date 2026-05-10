"use client";
import { useState } from "react";
import { COURSES } from "@/lib/data";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-20 relative scroll-mt-24">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="tag-chip mb-4">Learn & Grow</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Expert-Led <span className="shimmer-text">Courses</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Industry-aligned curricula built to make you job-ready. Real projects, real skills, real careers.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {COURSES.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCourse(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCourse === i
                  ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-white/4 border border-white/10 text-gray-400 hover:text-white hover:border-green-500/30'
              }`}
            >
              {c.icon} {c.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {COURSES.map((course, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${activeCourse === i ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}`}
            >
              <div className="bg-gradient-to-br from-[#0a1f12] to-[#071209] border border-green-500/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className={`bg-gradient-to-r ${course.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <span className="bg-black/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 inline-block tracking-widest uppercase">
                        {course.badge}
                      </span>
                      <h3 className="font-display font-black text-3xl md:text-4xl text-white">{course.icon} {course.title}</h3>
                      <p className="text-white/80 mt-2 font-medium">Start your journey to becoming a certified professional</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 mt-8">
                    <div>
                      <div className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Duration</div>
                      <div className="text-white font-bold">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Level</div>
                      <div className="text-white font-bold">{course.level}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Certificate</div>
                      <div className="text-white font-bold">{course.cert ? "✅ Included" : "No"}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-green-500 rounded-full" />
                      What You'll Learn
                    </h4>
                    <ul className="space-y-3">
                      {course.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300 group">
                          <span className="w-5 h-5 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 text-[10px] flex-shrink-0 group-hover:bg-green-500 group-hover:text-black transition-colors">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-green-500 rounded-full" />
                      Career Opportunities
                    </h4>
                    <div className="space-y-3 mb-6">
                      {course.jobs.map((job, j) => (
                        <div key={j} className="bg-green-500/5 border border-green-500/10 rounded-xl px-4 py-3 text-green-300 text-sm font-medium hover:bg-green-500/10 transition-colors">
                          💼 {job}
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-center gap-4">
                      <div className="text-3xl">🏆</div>
                      <div>
                        <div className="text-white font-semibold text-sm">Certificate of Completion</div>
                        <div className="text-gray-500 text-[11px] mt-0.5">Industry-recognized credential</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="btn-primary w-full text-black font-bold py-4 rounded-2xl text-base shadow-lg"
                  >
                    Enroll in {course.title} Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
