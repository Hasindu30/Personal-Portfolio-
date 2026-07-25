import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, AlertTriangle, Map, Activity, ShieldAlert, Bell, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const DisasterGuard = () => {
  const features = [
    {
      icon: <Activity className="text-orange-400" />,
      title: "Real-Time Risk Prediction",
      description: "Analyzes live environmental conditions — rainfall, wind speed, temperature, flood history, and elevation — through a multi-factor AI scoring engine to calculate precise disaster risk scores for any location on Earth."
    },
    {
      icon: <Map className="text-orange-400" />,
      title: "Interactive Disaster Map",
      description: "A full Leaflet.js powered geospatial map lets users click any location to instantly calculate risk scores, visualize high-risk zones with color-coded overlays, and explore regional vulnerability at a glance."
    },
    {
      icon: <AlertTriangle className="text-orange-400" />,
      title: "AI Risk Analysis Engine",
      description: "Enter coordinates or search by city to trigger a comprehensive vulnerability assessment. The AI engine processes Open-Meteo live weather data and Overpass API geospatial data to generate structured scorecards with 3-day forecasts."
    },
    {
      icon: <Bell className="text-orange-400" />,
      title: "Severity-Graded Alert System",
      description: "Automated intelligent emergency alerts are generated based on real-time risk levels — from Low Risk advisories to Critical warnings. Every alert includes actionable directives for residents and emergency responders."
    },
    {
      icon: <ShieldAlert className="text-orange-400" />,
      title: "Emergency Resource Management",
      description: "Location-based discovery of nearby emergency resources — hospitals, shelters, fire stations, and response teams — powered by Overpass API (OpenStreetMap), giving responders instant situational awareness."
    },
    {
      icon: <Database className="text-orange-400" />,
      title: "Secure Full-Stack Architecture",
      description: "JWT-authenticated REST APIs built on Node.js, Express, and MongoDB. Supports multi-user access with role-based permissions, historical alert logs, and trend analytics for post-disaster review."
    }
  ];

  const tech = [
    "React.js", "Node.js", "Express", "TypeScript",
    "MongoDB", "Leaflet.js", "Open-Meteo API", "Overpass API", "JWT"
  ];

  const stats = [
    { value: "Real-Time", label: "Weather Telemetry" },
    { value: "Multi-Factor", label: "AI Risk Scoring" },
    { value: "Location-Based", label: "Resource Discovery" },
    { value: "Severity-Graded", label: "Alert System" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-orange-500/10 blur-[130px] rounded-full" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[400px] bg-red-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                🛡️ AI Disaster Intelligence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
              >
                Disaster<span style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guard</span>{' '}
                <span style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed"
              >
                An AI-powered disaster management command center that fuses live weather telemetry, geospatial flood modeling, and emergency resource mapping into a single browser-based platform — built to predict disasters before they strike and protect lives.
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
                    className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold"
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
                  href="https://disasterguard-ai-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                  style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href="https://github.com/Hasindu30/disasterguard-ai-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:border-orange-400 transition-all hover:scale-105"
                >
                  <GithubIcon /> Frontend
                </a>
                <a
                  href="https://github.com/Hasindu30/disasterguard-ai-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:border-orange-400 transition-all hover:scale-105"
                >
                  <GithubIcon /> Backend
                </a>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img
                  src="/assets/disasterguard.png"
                  alt="DisasterGuard AI Platform Preview"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10"
              >
                <p
                  className="text-2xl font-black mb-2"
                  style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {stat.value}
                </p>
                <p className="text-slate-500 dark:text-white/50 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Mission
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8"
            >
              A Command Center in{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Browser
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-white/60 leading-relaxed"
            >
              DisasterGuard AI was built for emergency management professionals, local government agencies, and community coordinators who need actionable intelligence — not raw data. By combining Open-Meteo live weather telemetry, Leaflet.js geospatial risk overlays, and an AI multi-factor scoring engine, it transforms complex environmental data into clear risk scores, directional alerts, and resource maps that save lives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 pb-32 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Platform{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Capabilities
              </span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Six powerful modules working together to predict, visualize, alert, and respond to disaster risks in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
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
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Platform{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Showcase
              </span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A look inside the disaster intelligence command center — from risk analysis to interactive maps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { src: '/assets/disasterguard.png', alt: 'Risk Analysis Dashboard — Location Early Warning Assessment' },
              { src: '/assets/disasterguard.png', alt: 'Interactive Disaster Risk Map — Colombo, Sri Lanka' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group bg-slate-900"
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
      <section className="py-8 pb-20">
        <div className="container mx-auto px-6">
          <div
            className="relative rounded-[3rem] overflow-hidden py-20 px-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #1a0a00, #7c2d12, #ef4444)' }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <p className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-4">⚡ Live on Vercel</p>
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                Predict Disasters. Protect Lives.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Experience the DisasterGuard AI command center live — analyze real-time weather risk, explore the disaster map, and trigger vulnerability assessments for any location worldwide.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://disasterguard-ai-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} /> Launch DisasterGuard AI
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisasterGuard;
