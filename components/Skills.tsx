
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React.js", "Express.js", "Node.js", "MySQL", "MongoDB", "Pandas", "Git", "Docker", "Postman"]
    },
    {
      title: "Technical Expertise",
      skills: ["DSA", "OOPS", "DBMS", "Google Cloud Platform", "Prompt Engineering"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Clear Communication", "Collaborative Team Player"]
    }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-16 flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="w-12 h-1.5 bg-emerald-500 rounded-full"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-amber-500/5 transition-all"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500 dark:text-slate-400">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-all hover:border-amber-500 hover:text-amber-700 dark:hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;