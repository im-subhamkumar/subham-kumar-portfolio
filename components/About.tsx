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
                <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-1">Masters of Computer Application</h3>
                <p className="text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold mb-4">PES University, Bengaluru</p>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <span className="text-xs sm:text-sm font-extrabold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full">CGPA: 8.04</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Oct 2024 - Present</span>
                </div>
              </div>
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] border-l-[6px] border-l-teal-600 shadow-xl shadow-teal-500/5">
                <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-1">Bachelor in Computer Application</h3>
                <p className="text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold mb-4">Gossner College, Ranchi</p>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <span className="text-xs sm:text-sm font-extrabold text-teal-700 dark:text-teal-400 bg-teal-500/10 px-4 py-1.5 rounded-full">CGPA: 8.7</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">July 2019 - July 2022</span>
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
                I am a focused <span className="text-slate-900 dark:text-white font-black underline decoration-amber-500/30">Full Stack MERN Developer</span> and <span className="text-slate-900 dark:text-white font-black underline decoration-emerald-500/30">Prompt Engineer</span> based in Bengaluru.
              </p>
              <p>
                Currently navigating the intersection of web development and AI at <span className="text-amber-600 dark:text-amber-400 font-black">PES University</span>. I am passionate about creating efficient, scalable, and user-friendly digital solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;