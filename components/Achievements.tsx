
import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const items = [
    {
      role: "Placement Coordinator",
      org: "PES University (MCA)",
      desc: "Coordinated between students, faculty, and recruiters for smooth execution of placement activities."
    },
    {
      role: "Class Representative",
      org: "PES University (MCA)",
      desc: "Acted as a liaison between students and faculty, facilitating communication and decision-making."
    },
    {
      role: "Top 5 - CodeBlitz Hackathon",
      org: "PES University",
      desc: "Collaborated in a time-boxed environment to build a web application for interactive coding education."
    }
  ];

  return (
    <section id="achievements" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-3 text-slate-900 dark:text-white">
          <span className="w-10 h-1.5 bg-amber-500 rounded-full"></span>
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-[2rem] border-t-4 border-t-amber-500 shadow-xl shadow-amber-500/5 transition-all"
            >
              <h3 className="text-lg font-bold mb-1 text-slate-800 dark:text-white">{item.role}</h3>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-4 tracking-wider uppercase">{item.org}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;