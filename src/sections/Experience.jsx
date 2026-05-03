import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Prologics IT Solutions Pvt Ltd',
      role: 'Software Engineer Intern',
      period: '6 Months (Completed)',
      location: 'Sri Lanka',
      description: (
        <div className="space-y-4 text-base md:text-lg">
          <p>Gained hands-on experience in full-stack web development by building and maintaining applications with React, Node.js, and modern databases. Collaborated with agile teams to deliver features and improve code quality.</p>
          <div>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Developed responsive frontend UI components and resolved critical bugs.</li>
              <li>Integrated REST APIs and optimized database functions.</li>
              <li>Gained practical knowledge of the complete software development lifecycle.</li>
            </ul>
          </div>
        </div>
      ),
      skills: ['React', 'JavaScript', 'Node.js', 'Firebase', 'Cloud Firestore', 'Git', 'Testing', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-slate-100 dark:bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Professional Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            Work <span className="text-slate-300 dark:text-white/20 italic">Experience</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-10 rounded-[2.5rem] glass border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 transition-all"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                <div className="flex flex-col gap-2 text-slate-500 dark:text-white/50 font-medium">
                  <div className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} /> {exp.location}</div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gradient inline-block">{exp.role}</h4>
                <div className="text-slate-600 dark:text-white/60 leading-relaxed">
                  {exp.description}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-600 dark:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
