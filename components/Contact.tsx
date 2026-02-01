import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Constructs the Gmail web compose link with pre-filled fields
  const recipient = "sub406537@gmail.com";
  const subject = `Portfolio Inquiry from ${formData.name || 'Visitor'}`;
  const body = `Hello Subham,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
  
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] md:rounded-[40px] relative overflow-hidden">
          {/* Decorative Blur Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] -z-10" />
          
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
            <div className="flex flex-col h-full">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-slate-900 dark:text-white leading-tight">
                Let's <br /><span className="gradient-text underline decoration-amber-500/20">Work Together.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 mb-8 sm:mb-12 leading-relaxed font-semibold">
                I'm currently looking for new opportunities in AI, NLP, and Full-stack Development. 
                Fill out the form to reach out directly via Gmail.
              </p>
              
              <div className="space-y-6 sm:space-y-8 mt-auto">
                <a href="mailto:sub406537@gmail.com" className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-base sm:text-lg text-slate-700 dark:text-slate-200 group-hover:text-amber-600 transition-colors truncate">sub406537@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-base sm:text-lg text-slate-700 dark:text-slate-200 group-hover:text-emerald-600 transition-colors">+91 74887 01545</span>
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-7 sm:h-7 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-base sm:text-lg text-slate-700 dark:text-slate-200">Bengaluru, India</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 px-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full px-5 py-3.5 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm sm:text-base text-slate-700 dark:text-white font-semibold"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 px-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com" 
                  className="w-full px-5 py-3.5 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm sm:text-base text-slate-700 dark:text-white font-semibold"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 px-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  className="w-full px-5 py-3.5 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm sm:text-base text-slate-700 dark:text-white font-semibold resize-none"
                ></textarea>
              </div>
              <motion.a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 sm:py-5 bg-slate-900 dark:bg-amber-600 hover:bg-black dark:hover:bg-amber-700 text-white font-black uppercase tracking-[0.2em] rounded-xl sm:rounded-2xl shadow-xl transition-all text-center flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.a>
              <p className="text-[9px] text-center text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                * Clicking opens Gmail in a new tab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;