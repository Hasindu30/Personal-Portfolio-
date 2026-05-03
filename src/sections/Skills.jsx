import { motion } from 'framer-motion';
import { Layout, Server, Database, Smartphone, Palette, Shield } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout />, items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'], color: 'text-blue-400' },
    { name: 'Backend', icon: <Server />, items: ['Node.js', 'Express', 'Python', 'Firebase'], color: 'text-indigo-400' },
    { name: 'Database', icon: <Database />, items: ['MongoDB', 'PostgreSQL', 'Redis', 'Cloud Firestore'], color: 'text-yellow-400' },
    { name: 'Mobile', icon: <Smartphone />, items: ['React Native', 'Expo', 'Mobile UX', 'Flutter'], color: 'text-purple-400' },
    { name: 'Design', icon: <Palette />, items: ['Figma', 'UI/UX', 'Spline', 'Prototyping'], color: 'text-pink-400' },
    { name: 'DevOps', icon: <Shield />, items: ['Docker', 'CI/CD', 'Vercel', 'AWS'], color: 'text-red-400' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-32 bg-slate-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-white/50 max-w-2xl mx-auto text-lg">
            Expertise in building scalable, user-centric applications with the latest industry standards.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass group transition-all duration-300 border-slate-200 dark:border-[rgba(255,255,255,0.1)] hover:border-pink-500/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(s => (
                  <span key={s} className="text-sm font-medium text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white/80 transition-colors">
                    {s} •
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
