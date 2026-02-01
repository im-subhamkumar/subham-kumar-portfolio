import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Prompt Engineer (Freelance)",
      company: "Outlier | Remote",
      period: "Oct 2024 – June 2025",
      points: [
        "Collaborated with cross-functional teams to refine and optimize AI prompts, improving reliability and quality.",
        "Analyzed and evaluated AI-generated coding outputs, identifying gaps and providing feedback.",
        "Debugged and resolved coding issues produced by LLMs, ensuring functional accuracy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-16 flex items-center gap-3 sm:gap-4 text-slate-900 dark:text-white">
          <span className="w-8 sm:w-12 h-1.5 bg-amber-500 rounded-full"></span>
          Professional Experience
        </h2>
        
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 border-l-[2px] sm:border-l-[3px] border-amber-500/20 dark:border-white/10"
            >
              <div className="absolute left-[-7px] sm:left-[-11px] top-0 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)] border-2 sm:border-4 border-slate-50 dark:border-[#0c0c0a]" />
              <div className="glass-card p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] shadow-xl sm:shadow-2xl shadow-amber-500/5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 sm:mb-8 gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white mb-1 sm:mb-2 leading-tight">{exp.role}</h3>
                    <p className="text-amber-700 dark:text-amber-400 font-bold text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 bg-amber-500/10 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-amber-500/20 shrink-0 self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm sm:text-md text-slate-600 dark:text-slate-400 flex gap-3 sm:gap-4 font-medium leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;