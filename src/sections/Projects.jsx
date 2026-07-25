import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const projects = [
    {
      title: "RoadMate — AI Driver Assistant",
      category: "AI-Powered Full-Stack Platform",
      description: "An intelligent all-in-one driver assistance platform powered by an AI Co-Pilot agent. Instantly discover nearby fuel stations, parking areas, restaurants, and roadside services through location-aware search. Features natural-language AI interaction, Leaflet.js interactive maps, real-time GPS, and secure JWT-authenticated APIs for a seamless driving experience.",
      image: "/assets/roadmate.png",
      tech: ["React.js", "Node.js", "MongoDB", "AI Agent", "Leaflet.js", "TypeScript"],
      github: "https://github.com/Hasindu30/Roadmate-frontend",
      demo: "/roadmate",
      isInternal: true
    },
    {
      title: "DisasterGuard AI — Risk Prediction",
      category: "AI Disaster Intelligence Platform",
      description: "An AI-powered disaster management command center that analyzes real-time environmental conditions — rainfall, wind speed, flood history & elevation — to predict disaster risks, visualize high-risk zones on interactive maps, generate severity-graded emergency alerts, and manage location-based emergency resources.",
      image: "/assets/disasterguard.png",
      tech: ["React.js", "Node.js", "TypeScript", "Leaflet.js", "Open-Meteo API", "MongoDB"],
      github: "https://github.com/Hasindu30/disasterguard-ai-frontend",
      demo: "/disasterguard",
      isInternal: true
    },
    {
      title: "Task Management System",
      category: "Full-Stack Web Application",
      description: "A production-grade task management platform with a real-time analytics dashboard, full CRUD operations, priority tracking (High / Medium / Low), status management, and advanced search & filter. Built end-to-end with React, TypeScript, Express, and PostgreSQL via Prisma ORM — secured with JWT and bcrypt authentication.",
      image: "/assets/taskmanager.png",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "JWT"],
      github: null,
      demo: "/task-manager",
      isInternal: true
    },
    {
      title: "POS & Inventory System",
      category: "Desktop Application",
      description: "A production-ready Point of Sale & Inventory Management system designed for modern retail businesses. Delivers real-time stock tracking with low-stock alerts, seamless offline/online operation with auto-sync, integrated thermal bill printing, and role-based secure access — all wrapped in a fast native desktop experience powered by React and Electron.",
      image: "/assets/hasindu.jpeg",
      tech: ["React", "Electron", "Node.js", "Tailwind CSS"],
      github: "#",
      demo: "/pos-system",
      isInternal: true
    },
    {
      title: "Media Wall Business Website",
      category: "Client Project — Australia",
      description: "A premium business website delivered for an Australian Media Wall installation company. Built with pixel-perfect UI design, full mobile responsiveness, and deep on-page SEO optimization to achieve top Google rankings. Showcases services, a visual installation gallery, and client testimonials — live and generating real business leads.",
      image: "/assets/hasindu2.jpeg",
      tech: ["React", "Tailwind CSS", "SEO", "Vite"],
      github: null,
      demo: "https://mediawallsolution.com.au"
    },
    {
      title: "Budget Tracker Mobile App",
      category: "Mobile Application",
      description: "A cross-platform expense tracking app for stores and individuals to manage daily finances with ease. Features smart push notifications, real-time balance dashboards, category-based spending analytics, and a Node.js/Express backend with secure data sync. Published and live on the Expo store for Android and iOS.",
      image: "/assets/budgetapp.jpeg",
      tech: ["Expo", "React Native", "Node.js", "Express"],
      github: "https://github.com/Hasindu30/budget-app-backend-",
      demo: "/budget-app",
      isInternal: true
    },
    {
      title: "Redora Tech — Company Website",
      category: "Software Company Website",
      description: "A high-performance portfolio and corporate website built for Redora Tech, a software development company. Engineered with React and Tailwind CSS, deployed to Vercel with a custom domain, and SEO-tuned to rank at the top of search results. Showcases services, case studies, and team culture with a sleek, animated, premium UI.",
      image: "/assets/redora.jpeg",
      tech: ["React", "Tailwind CSS", "Vercel", "SEO"],
      github: null,
      demo: "https://www.redoratech.online"
    },
    {
      title: "Vibify — Music Streaming App",
      category: "MERN Stack Web Application",
      description: "A full-stack music streaming application where users can upload, play, and organize songs into personal playlists. Built on the MERN stack with a custom audio player UI, drag-and-drop playlist management, and a powerful REST API backend — delivering a Spotify-inspired experience from scratch.",
      image: "/assets/Portfolio.png",
      tech: ["React", "MongoDB", "Node.js", "Express"],
      github: "https://github.com/Hasindu30/Vibify",
      demo: null
    },
    {
      title: "ProChat — Real-Time Chat App",
      category: "Real-Time Communication",
      description: "A full-featured real-time messaging application built with the MERN stack and Socket.io. Supports instant one-on-one and group chats, live online presence indicators, typing notifications, persistent message history, and secure JWT-based authentication — delivering a lightning-fast, WhatsApp-like chat experience across all devices.",
      image: "/assets/Prochat.png",
      tech: ["React", "MongoDB", "Node.js", "Socket.io"],
      github: "https://github.com/Hasindu30/ProChat-App",
      demo: null
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6 w-max"
          >
            <Layers size={14} /> My Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:border-pink-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-pink-500 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"><GithubIcon /></a>
                    )}
                    {project.demo && (
                      project.isInternal ? (
                        <Link to={project.demo} className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </Link>
                      ) : (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-white/60 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white/80 transition-colors">
                      {t}
                    </span>
                  ))}
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


