import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const nameToType = "Subham";

  useEffect(() => {
    let currentIdx = 0;
    const typingInterval = setInterval(() => {
      if (currentIdx <= nameToType.length) {
        setTypedText(nameToType.slice(0, currentIdx));
        currentIdx++;
      } else {
        setTimeout(() => {
            currentIdx = 0;
            setTypedText("");
        }, 5000);
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center pt-20 pb-10 sm:pt-24 sm:pb-12 relative overflow-visible">
      
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, x: { duration: 0.8 }, ease: "easeOut" }}
          className="lg:col-span-7 text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-[9px] sm:text-xs font-black tracking-[0.2em] uppercase rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md"
          >
            Full Stack MERN Developer & AI Specialist
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold mb-5 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Hi, I am <br />
            <span className="relative inline-block mt-2 gradient-text">
              {typedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-8 sm:w-1.5 sm:h-12 md:h-16 bg-amber-500 ml-1.5 translate-y-1 sm:translate-y-2 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            <span className="text-amber-600 dark:text-amber-400 font-black">Open for opportunity</span> to engineer <span className="text-slate-900 dark:text-white font-black underline decoration-amber-500/40 decoration-2 underline-offset-4">scalable MERN applications</span> and <span className="text-slate-900 dark:text-white font-black underline decoration-emerald-500/40 decoration-2 underline-offset-4">intelligent AI-driven solutions</span> that solve real-world complexities.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 15px 20px -5px rgb(245 158 11 / 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-black uppercase tracking-wider text-[10px] sm:text-xs rounded-2xl shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2"
            >
              View Projects
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-3 sm:px-8 sm:py-4 glass-card font-black uppercase tracking-wider text-[10px] sm:text-xs rounded-2xl transition-all text-slate-800 dark:text-white border-slate-200 dark:border-white/10 hover:border-amber-500 shadow-md"
            >
              Contact Me
            </motion.a>
            
            <div className="resume-btn-container">
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/1CZuASGh4igu_EEU8ISU0Sr30WPoPO1q7/view?usp=drive_link"
                className="glow-on-hover bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-[10px] sm:text-xs rounded-2xl shadow-xl transition-all flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[500px]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6%] border-[2px] border-dashed border-emerald-500/20 rounded-full"
            />
            
            <div className="relative z-10 w-full h-full rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border-4 sm:border-8 border-white/40 dark:border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] glass-card">
              <img 
                src="/hero-photo.jpg" 
                alt="Subham Kumar" 
                className="w-full h-full object-cover object-top scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-40 mix-blend-multiply pointer-events-none" />
            </div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 px-4 py-2 sm:px-5 sm:py-3 glass-card rounded-xl sm:rounded-2xl shadow-xl border-emerald-500/20 z-20 flex items-center gap-2"
            >
               <span className="text-base sm:text-xl">🚀</span>
               <div className="flex flex-col">
                 <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 leading-none mb-0.5">Passionate</span>
                 <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white leading-none">Innovator</span>
               </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -left-3 sm:bottom-10 sm:-left-8 px-4 py-2 sm:px-5 sm:py-3 glass-card rounded-xl sm:rounded-2xl shadow-xl border-amber-500/20 z-20 flex items-center gap-2"
            >
               <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-[9px] font-black">
                M
               </div>
               <div className="flex flex-col">
                 <span className="text-[8px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 leading-none mb-0.5">MERN Stack</span>
                 <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white leading-none">Developer</span>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;