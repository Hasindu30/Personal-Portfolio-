import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Zap, Phone } from 'lucide-react';
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18h.01"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-pink-500/10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center border-slate-200 dark:border-white/5 relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(236,72,153,0.3)]"
          >
            <Zap size={40} className="text-white fill-white" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900 dark:text-white">
            Ready to <span className="text-gradient">Upgrade</span> <br />
            your next project?
          </h2>

          <p className="text-xl text-slate-500 dark:text-white/50 max-w-xl mx-auto mb-12">
            Let's build something extraordinary together. I'm currently open to new opportunities and collaborations.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {/* Email */}
            <motion.a
              href="mailto:chandeepahasindu@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-center gap-6 hover:border-pink-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider mb-1">Email Me</div>
                <div className="font-bold text-slate-900 dark:text-white truncate">chandeepahasindu@gmail.com</div>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:0717033907"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-center gap-6 hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider mb-1">Call Me</div>
                <div className="font-bold text-slate-900 dark:text-white truncate">0717033907</div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/hasindu-chandeepa-918a50299/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-center gap-6 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon size={24} />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider mb-1">LinkedIn</div>
                <div className="font-bold text-slate-900 dark:text-white truncate">hasindu-chandeepa</div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Hasindu30"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-center gap-6 hover:border-slate-800 dark:hover:border-white/50 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-300 dark:bg-white/10 rounded-2xl flex items-center justify-center text-slate-700 dark:text-white shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon size={24} />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider mb-1">GitHub</div>
                <div className="font-bold text-slate-900 dark:text-white truncate">Hasindu30</div>
              </div>
            </motion.a>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col items-center justify-center gap-4">
            <p className="text-slate-400 dark:text-white/30 font-bold">© 2026 HASINDU. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
