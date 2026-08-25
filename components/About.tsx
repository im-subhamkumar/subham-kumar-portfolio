import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
              <span className="w-10 sm:w-12 h-1.5 bg-amber-500 rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] border-l-[6px] border-l-amber-500 shadow-xl shadow-amber-500/5">
                <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-1">Master of Computer Applications</h3>
                <p className="text-sm sm:text-md text-slate-500 dark:text-slate-400 font-semibold mb-1">Data Engineering Specialization</p>
                <p className="text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold mb-4">PES University, Bengaluru</p>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <span className="text-xs sm:text-sm font-extrabold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full">CGPA: 8.11</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Oct 2024 – Jul 2026</span>
                </div>
              </div>
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] border-l-[6px] border-l-teal-600 shadow-xl shadow-teal-500/5">
                <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-1">Bachelor of Computer Applications</h3>
                <p className="text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold mb-4">Gossner College, Ranchi</p>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <span className="text-xs sm:text-sm font-extrabold text-teal-700 dark:text-teal-400 bg-teal-500/10 px-4 py-1.5 rounded-full">CGPA: 8.7</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Jul 2019 – Jul 2022</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 md:pt-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 flex items-center gap-4 text-slate-900 dark:text-white">
              <span className="w-10 sm:w-12 h-1.5 bg-emerald-500 rounded-full"></span>
              About Me
            </h2>
            <div className="space-y-6 text-slate-700 dark:text-slate-400 leading-[1.8] text-base sm:text-lg font-bold">
              <p>
                I am a focused <span className="text-slate-900 dark:text-white font-black underline decoration-amber-500/30">Full Stack Developer</span> and <span className="text-slate-900 dark:text-white font-black underline decoration-emerald-500/30">AI Specialist</span> based in Bengaluru, graduating July 2026.
              </p>
              <p>
                Experienced with <span className="text-amber-600 dark:text-amber-400 font-black">Python microservices</span>, JavaScript-based web applications, and cloud-native automation tools. I build automation workflows, process unstructured media using AI models, and optimize client-side rendering engines.
              </p>
              <p>
                Currently pursuing my MCA in Data Engineering at <span className="text-amber-600 dark:text-amber-400 font-black">PES University</span>, passionate about scalable systems and intelligent digital solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;