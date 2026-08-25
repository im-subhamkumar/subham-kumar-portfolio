
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "HealthPodcastIQ",
      type: "Automated AI Microservices & NLP Pipeline",
      description: "Designed an automated pipeline to transcribe and summarize 50+ hours of unstructured audio/video health podcast content. Utilized OpenAI Whisper API for transcription and fine-tuned LLMs for context extraction and fact-checking.",
      tech: ["Python", "FastAPI", "Docker", "OpenAI Whisper", "Cloud APIs"],
      link: "https://github.com/im-subhamkumar/HealthPodcastIQ",
      highlights: [
        "50+ hrs of media processed",
        "< 500 ms API latency",
        "40% faster cloud bootup"
      ]
    },
    {
      title: "Dynamic Collage Maker",
      type: "Interactive High-Performance Web Engine",
      description: "A modular image manipulation web tool handling 50+ concurrent image operations with 60 FPS real-time UI redrawing. Built with zero external runtime dependencies using custom layout algorithms and bounding box collision detection.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      link: "https://dynamic-collage-maker-subham.netlify.app/",
      highlights: [
        "60 FPS real-time render",
        "30% CPU usage reduction",
        "PNG/JPEG export pipeline"
      ]
    },
    {
      title: "MERN E-Commerce Platform",
      type: "Full Stack Application",
      description: "Robust e-commerce solution with admin panel, full CRUD for product management, PayPal integration, and secure MongoDB storage. Built RESTful APIs with Node.js/Express and a React frontend.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Postman"],
      link: "https://github.com/im-subhamkumar/E-Commerce-Platform#",
      highlights: [
        "Admin dashboard",
        "PayPal integration",
        "REST API backend"
      ]
    },
    {
      title: "Student Performance Prediction",
      type: "Machine Learning & Data Analytics",
      description: "A comprehensive data analytics project predicting academic performance through clustering sleep patterns. Features a Streamlit dashboard with Flask API for real-time prediction visualization.",
      tech: ["Python", "KMeans", "GMM", "Streamlit", "Pandas", "Flask"],
      link: "https://github.com/im-subhamkumar/Sleep_Pattern_Prediction_AI-ML",
      highlights: [
        "KMeans + GMM clustering",
        "Streamlit dashboard",
        "Flask REST API"
      ]
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-16 flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="w-12 h-1.5 bg-emerald-500 rounded-full"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed font-semibold">
                  {project.description}
                </p>

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-[10px] font-bold px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                      ✦ {h}
                    </span>
                  ))}
                </div>

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
