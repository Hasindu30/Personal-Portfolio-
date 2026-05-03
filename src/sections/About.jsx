import { motion } from 'framer-motion';
import { User, GraduationCap, School } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6">
              <User size={14} /> About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              I'm <span className="text-gradient">Hasindu Chandeepa</span>, <br />
              A Passionate Software Engineer.
            </h2>
            <p className="text-xl text-slate-600 dark:text-white/60 leading-relaxed mb-8">
              I am a dedicated software engineering professional with a strong academic background in Physical Sciences and Computing. My journey in technology is driven by a desire to build innovative solutions that solve real-world problems. With a focus on modern web ecosystems and scalable architectures, I strive for excellence in every line of code I write.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Exactly Two Education Cards */}
            <div className="p-10 rounded-[2.5rem] glass border-slate-200 dark:border-white/10 relative overflow-hidden group hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">B.Sc (Hons) in Computing and Information Systems</h3>
                <p className="text-pink-500 font-bold text-sm mb-4 uppercase tracking-wider">Sabaragamuwa University of Sri Lanka</p>
                <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">
                  Specialized in advanced software engineering principles, system architecture, and modern full-stack development methodologies.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] -z-10 group-hover:bg-pink-500/20 transition-all" />
            </div>

            <div className="p-10 rounded-[2.5rem] glass border-slate-200 dark:border-white/10 relative overflow-hidden group hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <School size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">G.C.E. Advanced Level</h3>
                <p className="text-indigo-400 font-bold text-sm mb-4 uppercase tracking-wider">Physical Science Stream</p>
                <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">
                  Advanced background in Mathematics and Physics, providing a strong analytical foundation for technical problem-solving.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] -z-10 group-hover:bg-indigo-400/10 transition-all" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
