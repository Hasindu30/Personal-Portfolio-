import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-mesh opacity-50 hidden dark:block" />
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-pink-500/20 blur-[120px] rounded-full -z-10 animate-pulse hidden dark:block" />
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full -z-10 hidden dark:block" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-pink-500 dark:text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} /> Available for new projects
          </motion.div>
          
          <div className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-8 min-h-[200px] md:min-h-[280px]">
            <div className="text-slate-900 dark:text-white mb-4">I'M</div>
            <div className="text-gradient">
              <Typewriter
                options={{
                  strings: ['HASINDU', 'SOFTWARE<br/>ENGINEER'],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  deleteSpeed: 100,
                }}
              />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-600 dark:text-white/60 max-w-lg mb-10 leading-relaxed"
          >
            Crafting high-performance digital solutions with precision and passion. Specialized in modern full-stack development and user-centric design.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-2xl flex items-center gap-2 group hover:bg-pink-500 dark:hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-md font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-300/50 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-all"
            >
              View Work
            </motion.a>
          </div>

          <div className="mt-16 flex items-center gap-8 pt-8 border-t border-slate-200 dark:border-white/5">
            <div>
              <p className="text-3xl font-black text-pink-500">6+</p>
              <p className="text-slate-500 dark:text-white/40 text-sm uppercase tracking-wider font-bold">Months Exp</p>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-white/10" />
            <div>
              <p className="text-3xl font-black text-indigo-500">20+</p>
              <p className="text-slate-500 dark:text-white/40 text-sm uppercase tracking-wider font-bold">Projects Done</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden glass p-4 border-slate-200 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <img 
              src="/assets/hero-visual.png" 
              alt="Hasindu Visual" 
              className="w-full h-full object-cover rounded-[2.5rem] dark:grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
