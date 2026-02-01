
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "MERN E-commerce Platform",
      type: "Full Stack Application",
      description: "Robust e-commerce solution with admin panel, CRUD for product management, PayPal integration, and secure MongoDB storage.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Postman"],
      link: "https://github.com/im-subhamkumar/E-Commerce-Platform#"
    },
    {
      title: "Student Performance Prediction",
      type: "Machine Learning Model",
      description: "A comprehensive data analytics project predicting academic performance through clustering sleep patterns. Features a Streamlit dashboard with Flask API.",
      tech: ["Python", "KMeans", "GMM", "Streamlit", "Pandas"],
      link: "https://github.com/im-subhamkumar/Sleep_Pattern_Prediction_AI-ML"
    },
    {
      title: "HealthPodcastIQ",
      type: "AI & NLP Research",
      description: "A research-based AI application that transcribes, summarizes, fact-checks, and sequences health podcast videos. Designed to enhance accessibility and information retrieval from long-form audio-visual content.",
      tech: ["NLP", "AI/ML", "Whisper", "Bard Model (Fine-tuned)", "Python"],
      link: "https://github.com/im-subhamkumar"
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-16 flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="w-12 h-1.5 bg-emerald-500 rounded-full"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[3rem] overflow-hidden group flex flex-col border border-slate-200 dark:border-white/10 shadow-xl shadow-emerald-500/5 transition-all hover:shadow-emerald-500/10"
            >
              <div className="p-8 flex flex-col h-full">
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-4 block">{project.type}</span>
                <h3 className="text-2xl font-extrabold mb-4 text-slate-800 dark:text-white leading-tight">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed font-semibold">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-emerald-500 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:gap-3 gap-2 transition-all group-hover:underline"
                  >
                    View Source
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
