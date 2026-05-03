import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers } from 'lucide-react';

const projects = [
    {
      title: "POS Inventory System",
      category: "Desktop & Web Application",
      description: "A robust and fully customizable POS & Inventory Management system. Features real-time stock tracking, integrated bill printing, and seamless offline/online operations. Built with React and Electron for a native desktop experience.",
      image: "/assets/hasindu.jpeg",
      tech: ["React", "Electron", "Node.js", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Media Wall Business Website",
      category: "Client Project — Australia",
      description: "A professional business portfolio website built for an Australian Media Wall client. Designed with a stunning UI, fully SEO-optimized for top Google rankings, and deployed live. Features a responsive layout, service showcases, and a sleek gallery of completed installations.",
      image: "/assets/hasindu2.jpeg",
      tech: ["React", "Tailwind CSS", "SEO", "Vite"],
      github: "#",
      demo: "https://mediawallsolution.com.au"
    },
    {
      title: "Budget Tracker Mobile App",
      category: "Mobile Application",
      description: "A cross-platform mobile app for stores and individuals to track daily expenses and income effortlessly. Features smart alert & push notifications, real-time balance summaries, category-based spending insights, and a Node.js/Express backend. Built with Expo & React Native, fully tested and deployed to the Expo store.",
      image: "/assets/budgetapp.jpeg",
      tech: ["Expo", "React Native", "Node.js", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Redora Tech Portfolio Website",
      category: "Software Company Website",
      description: "A high-performance portfolio and company website built for Redora Tech — a software development company. Crafted with React & Tailwind CSS, deployed on Vercel with a custom domain, and fully SEO-optimized for top search engine rankings. Features a sleek, modern UI with smooth animations and best-in-class performance scores.",
      image: "/assets/redora.jpeg",
      tech: ["React", "Tailwind CSS", "Vercel", "SEO"],
      github: "#",
      demo: "https://www.redoratech.online"
    },
    {
      title: "Vibify Music Web App",
      category: "Music & Entertainment",
      description: "Vibify is a MERN-based music app that lets users add, play, and organize songs into playlists, offering a seamless, personalized music experience across devices. Features a modern player UI, playlist management, and a powerful REST API backend.",
      image: "/assets/Portfolio.png",
      tech: ["React", "MongoDB", "Node.js", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "ProChat — Real-Time Chat App",
      category: "Real-Time Communication",
      description: "ProChat is a full-featured real-time chat application built on the MERN stack with Socket.io. Supports instant one-on-one and group messaging, online presence indicators, typing notifications, message history, and secure JWT authentication — delivering a fast, reliable chat experience across all devices.",
      image: "/assets/Prochat.png",
      tech: ["React", "MongoDB", "Node.js", "Socket.io"],
      github: "#",
      demo: "#"
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
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
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
                    <a href={project.github} className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"><Code size={18} /></a>
                    <a href={project.demo} className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"><ExternalLink size={18} /></a>
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

