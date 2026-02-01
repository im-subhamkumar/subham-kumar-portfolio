import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);

  const toggleThemeMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeUrl = "https://drive.google.com/file/d/1CZuASGh4igu_EEU8ISU0Sr30WPoPO1q7/view?usp=drive_link";

  return (
    <div className={`min-h-screen transition-colors duration-700 selection:bg-amber-500 selection:text-white overflow-x-hidden ${isDarkMode ? 'bg-[#080807] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Dynamic Animated Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 ${isDarkMode ? 'bg-amber-600' : 'bg-amber-200'}`} 
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className={`absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 ${isDarkMode ? 'bg-teal-600' : 'bg-emerald-200'}`} 
        />
        
        {/* Subtle Dots Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <Navbar isDark={isDarkMode} toggleTheme={toggleThemeMode} />
      
      <main className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      {/* Floating Sticky "Resume" Download Button */}
      <AnimatePresence>
        {showFloatingButton && (
          <div className="floating-resume fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-[60]">
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="glow-on-hover glass-card rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-slate-200 dark:border-white/10 group bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 transition-all"
            >
              <span className="font-black uppercase tracking-widest text-[9px] sm:text-[10px] text-white hidden sm:inline">Resume</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest border-t border-slate-200 dark:border-white/5 mt-10">
        <p>© {new Date().getFullYear()} Subham Kumar • Built with MERN & AI</p>
      </footer>
    </div>
  );
};

export default App;