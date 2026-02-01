import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certs = [
    { 
      title: "Agile Scrum Master", 
      issuer: "Simplilearn",
      link: "https://certificates.simplicdn.net/share/9735896_9339406_1768852657844.pdf"
    },
    { 
      title: "Google Analytics Certification", 
      issuer: "Google",
      link: "https://skillshop.credential.net/7be30301-3f6d-4d9e-80fd-f3e183b2ec59"
    },
    { 
      title: "Oracle Data Platform Foundations Associate", 
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FE98A87CAB46CFE44E86003EE4969A097004EC3F2F3C73679E582A686ED76C21"
    },
    { 
      title: "Exploring Data Transformation", 
      issuer: "Google Cloud",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MTk0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODk1MzU4MV85MzM5NDA2MTc1NzUzOTIxNTg4NS5wbmciLCJ1c2VybmFtZSI6IlN1YmhhbSBLdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7128%2FExploring-Data-Transformation-with-Google-Cloud%2Fcertificate%2Fdownload-skillup&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVrwzMLa8K9HevDE%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAL6ZyeVBAAAA&%24web_only=true&_branch_match_id=1495748027500878294"
    }
  ];

  return (
    <section id="certifications" className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-16 flex items-center gap-3 sm:gap-4 text-slate-900 dark:text-white">
          <span className="w-8 sm:w-12 h-1.5 bg-brand-gold rounded-full"></span>
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certs.map((cert, idx) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: idx * 0.1, duration: 0.6 }
              }}
              animate={{
                y: [0, -6, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5
                }
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] text-center flex flex-col items-center justify-center min-h-[160px] sm:min-h-[220px] group transition-all shadow-lg sm:shadow-xl shadow-amber-500/5 hover:shadow-amber-500/15 border-amber-500/10"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-amber-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-amber-500/20 group-hover:bg-amber-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-md font-bold mb-2 sm:mb-3 leading-tight text-slate-800 dark:text-white">{cert.title}</h4>
              <p className="text-[9px] sm:text-[10px] uppercase text-slate-500 dark:text-slate-400 font-black tracking-[0.2em]">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;