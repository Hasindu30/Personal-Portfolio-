import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MapPin, Brain, Shield, Zap, Navigation, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const RoadMate = () => {
  const features = [
    {
      icon: <Brain className="text-blue-400" />,
      title: "AI Co-Pilot Agent",
      description: "Conversational AI that understands natural language — ask it to find the nearest fuel station, check the weather, or get emergency help, all hands-free."
    },
    {
      icon: <MapPin className="text-blue-400" />,
      title: "Location-Aware Services",
      description: "Instantly discover nearby fuel stations, parking areas, restaurants, public toilets, and roadside essentials using real-time Geolocation API and Geoapify."
    },
    {
      icon: <Navigation className="text-blue-400" />,
      title: "Interactive Map Navigation",
      description: "Full Leaflet.js powered interactive map with live user location tracking, custom marker pins, and radius-based service discovery."
    },
    {
      icon: <MessageSquare className="text-blue-400" />,
      title: "Conversational Travel Assistant",
      description: "An LLM-powered agent that provides contextual travel advice, troubleshooting tips, and simplifies service discovery through natural conversation."
    },
    {
      icon: <Shield className="text-blue-400" />,
      title: "Emergency SOS System",
      description: "One-tap Emergency SOS feature that alerts contacts and surfaces nearest emergency services, hospitals, and roadside assistance instantly."
    },
    {
      icon: <Zap className="text-blue-400" />,
      title: "Secure Full-Stack APIs",
      description: "JWT-authenticated REST APIs built with Node.js, Express, and MongoDB ensuring secure, fast, and reliable data transmission across all features."
    }
  ];

  const tech = [
    "React.js", "Node.js", "MongoDB", "Express", "TypeScript",
    "AI Agent", "LLM API", "Leaflet.js", "Geolocation API", "JWT"
  ];

  const screenshots = [
    { src: '/assets/roadmate.png', alt: 'Services Map — Find Nearby Fuel Stations' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                🚗 AI-Powered Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
              >
                Road<span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mate</span> AI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed"
              >
                An intelligent all-in-one driver assistance platform that combines AI-powered conversational agents, real-time map navigation, and location-aware service discovery — making every drive smarter, safer, and stress-free.
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {tech.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://roadmate-frontend-seven.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href="https://github.com/Hasindu30/Roadmate-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:border-blue-400 transition-all hover:scale-105"
                >
                  <GithubIcon /> Frontend
                </a>
                <a
                  href="https://github.com/Hasindu30/Roadmate-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:border-blue-400 transition-all hover:scale-105"
                >
                  <GithubIcon /> Backend
                </a>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img
                  src="/assets/roadmate.png"
                  alt="RoadMate AI Platform Preview"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is RoadMate */}
      <section className="py-24 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              About the Project
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8"
            >
              Your AI Co-Pilot on Every <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-white/60 leading-relaxed"
            >
              RoadMate is designed to eliminate the stress of driving in unfamiliar territory. Whether you're searching for the nearest fuel station, need emergency roadside help, or simply want a smart assistant that understands your voice — RoadMate has you covered. It fuses cutting-edge AI with real-time geolocation and interactive mapping to deliver a truly intelligent driving companion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Key <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A complete driver assistance ecosystem — AI, maps, emergencies, and services all in one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-24 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Platform <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Showcase</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A glimpse into the intelligent, map-driven interface that powers every RoadMate experience.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {screenshots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group bg-slate-200 dark:bg-white/5"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10">
                  <p className="text-sm font-bold text-slate-900 dark:text-white text-center">{s.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div
            className="relative rounded-[3rem] overflow-hidden py-20 px-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6, #6366f1)' }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[100px] rounded-full" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">
              Ready to Ride Smart?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Experience RoadMate live — your all-in-one AI driver companion. Find services, get AI assistance, and drive with confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <a
                href="https://roadmate-frontend-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <ExternalLink size={18} /> Try RoadMate Live
              </a>
              <a
                href="https://wa.me/94717033907"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMate;
