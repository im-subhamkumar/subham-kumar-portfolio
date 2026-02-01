import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'experience', 'projects', 'certifications', 'achievements', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Skills', id: 'skills' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-3 sm:top-6 left-0 right-0 z-[100] flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.div
          layout
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            width: mobileMenuOpen ? '100%' : 'auto',
            maxWidth: mobileMenuOpen ? '380px' : 'fit-content'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`pointer-events-auto relative flex flex-col items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2 rounded-[2rem] glass-card shadow-2xl transition-all duration-500 ${
            scrolled 
              ? 'bg-white/95 dark:bg-black/90 scale-95 border-amber-500/10' 
              : 'bg-white/70 dark:bg-black/40 scale-100 border-white/10'
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-6 w-full justify-between">
            {/* Branding */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center px-1 group shrink-0"
            >
              <span className="font-black text-sm sm:text-lg tracking-tighter gradient-text group-hover:scale-105 transition-transform">
                SUBHAM
              </span>
            </a>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 bg-slate-200/40 dark:bg-white/5 p-1 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full transition-all ${
                    activeSection === link.id 
                      ? 'text-amber-600 dark:text-amber-400' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm -z-10"
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </div>

            {/* Icons & Theme Toggle */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center gap-0.5">
                <a href="https://www.linkedin.com/in/subham-kumar-738710154/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/im-subhamkumar" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors" aria-label="GitHub">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>
              
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white ml-0.5"
                aria-label="Toggle menu"
              >
                <div className="w-4 h-4 relative flex flex-col justify-center gap-1">
                  <motion.span animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 5 : 0 }} className="w-full h-0.5 bg-current rounded-full"/>
                  <motion.span animate={{ opacity: mobileMenuOpen ? 0 : 1 }} className="w-full h-0.5 bg-current rounded-full"/>
                  <motion.span animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -5 : 0 }} className="w-full h-0.5 bg-current rounded-full"/>
                </div>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="w-full overflow-hidden lg:hidden pt-2">
                <div className="flex flex-col gap-1 pb-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.id}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`px-4 py-2.5 rounded-2xl flex items-center justify-between font-black uppercase tracking-widest text-[9px] border transition-all ${
                        activeSection === link.id
                          ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                          : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-transparent'
                      }`}
                    >
                      {link.name}
                      <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[90] lg:hidden" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;