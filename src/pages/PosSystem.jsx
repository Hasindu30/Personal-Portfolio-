import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Play, Layout, Database, ShieldCheck, Zap, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const PosSystem = () => {
  const screenshots = [
    { src: '/assets/pos1.png', alt: 'Dashboard Overview' },
    { src: '/assets/pos2.png', alt: 'Inventory Management' },
    { src: '/assets/pos3.png', alt: 'Sales Interface' },
    { src: '/assets/pos4.png', alt: 'Reporting Analytics' },
  ];

  const features = [
    {
      icon: <Layout className="text-pink-500" />,
      title: "Intuitive Dashboard",
      description: "A clean, modern interface designed for speed and efficiency in high-traffic retail environments."
    },
    {
      icon: <Database className="text-pink-500" />,
      title: "Smart Inventory",
      description: "Real-time stock tracking with low-stock alerts, category management, and batch processing."
    },
    {
      icon: <Printer className="text-pink-500" />,
      title: "Bill Printing",
      description: "Seamless integration with thermal printers for instant, customizable receipt generation."
    },
    {
      icon: <Zap className="text-pink-500" />,
      title: "Offline Ready",
      description: "Continue making sales even without internet. Data syncs automatically once back online."
    },
    {
      icon: <ShieldCheck className="text-pink-500" />,
      title: "Secure Access",
      description: "Role-based user permissions to ensure sensitive financial data remains protected."
    },
    {
      icon: <CheckCircle2 className="text-pink-500" />,
      title: "Sales Analytics",
      description: "Comprehensive reporting on daily sales, profits, and top-selling products."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-pink-500 transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Featured Project
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
              >
                <span className="text-gradient">POS & Inventory</span> System
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed"
              >
                A high-performance, robust Point of Sale system built to streamline business operations. 
                Combining the power of React for the UI and Electron for a native desktop experience, 
                this system offers unparalleled speed, security, and flexibility for modern retailers.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  React
                </div>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  Electron
                </div>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  Node.js
                </div>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  Tailwind CSS
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-pink-500/20 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img 
                  src="/assets/pos1.png" 
                  alt="POS Preview" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Play size={14} /> Video Demonstration
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-16">
            See it in <span className="text-gradient">Action</span>
          </h2>
          
          <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
            <video 
              controls 
              className="w-full aspect-video object-cover"
              poster="/assets/pos1.png"
              preload="none"
            >
              <source src="/assets/pos r.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Built with business growth in mind, our POS system offers everything you need to run your operations smoothly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Visual <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Take a closer look at the user interface and system capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg group bg-slate-200 dark:bg-white/5"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={s.src} 
                    alt={s.alt} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 dark:bg-pink-600 py-20 px-8 text-center text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[100px] rounded-full" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Interested in this system?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              I can help you customize and implement this POS system for your specific business needs. 
              Let's build something amazing together.
            </p>
            <a 
              href="https://wa.me/94717033907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform relative z-10"
            >
              Get in Touch
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PosSystem;
