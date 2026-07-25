import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckSquare, Filter, ShieldCheck, LayoutDashboard, Clock, SortAsc } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const TaskManager = () => {
  const features = [
    {
      icon: <LayoutDashboard className="text-blue-500" />,
      title: "Analytics Dashboard",
      description: "A real-time summary dashboard showing total tasks, pending count, tasks in progress, completed items, and overdue alerts — giving you an instant snapshot of your team's productivity at a glance."
    },
    {
      icon: <CheckSquare className="text-blue-500" />,
      title: "Full Task CRUD",
      description: "Create, view, edit, and delete tasks through a clean modal interface. Each task supports a title, description, priority level (High / Medium / Low), status, and a due date for complete lifecycle management."
    },
    {
      icon: <Filter className="text-blue-500" />,
      title: "Advanced Filters & Search",
      description: "Filter tasks by status (Pending, In Progress, Completed), priority level, and sort by created date or due date in ascending or descending order. Search by task title in real time across all records."
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Priority & Deadline Tracking",
      description: "Color-coded priority badges (High in red, Medium in orange, Low in blue) and due date tracking with overdue detection help teams focus on what matters most and never miss a deadline."
    },
    {
      icon: <ShieldCheck className="text-blue-500" />,
      title: "JWT Authentication",
      description: "Secure login system with bcrypt-hashed passwords and JWT token-based authentication. Sessions are managed securely, with protected API routes ensuring only authorized users can access or mutate task data."
    },
    {
      icon: <SortAsc className="text-blue-500" />,
      title: "PostgreSQL + Prisma ORM",
      description: "Backed by a production-grade PostgreSQL database managed through Prisma ORM for type-safe queries, clean migrations, and scalable relational data modeling — deployed live on Railway."
    }
  ];

  const tech = [
    "React", "TypeScript", "Vite", "Tailwind CSS",
    "Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT", "bcrypt"
  ];

  const stats = [
    { value: "Full-Stack", label: "MERN + PostgreSQL" },
    { value: "TypeScript", label: "End-to-End Typed" },
    { value: "Live API", label: "Railway Deployed" },
    { value: "JWT Secured", label: "Auth System" },
  ];

  const screenshots = [
    { src: '/assets/taskmanager.png', alt: 'Dashboard — Task Status & Priority Overview' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[400px] bg-indigo-400/10 blur-[100px] rounded-full" />
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
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6"
              >
                ✅ Full-Stack Productivity App
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
              >
                Task{' '}
                <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Manager
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed"
              >
                A production-grade full-stack task management system with a real-time analytics dashboard, priority tracking, advanced filtering, and secure JWT authentication — built end-to-end with React, TypeScript, Express, and PostgreSQL via Prisma ORM.
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
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold"
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
                  href="https://task-management-system-pi-lime.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)' }}
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href="https://task-management-system-production-8014.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:border-blue-400 transition-all hover:scale-105"
                >
                  <ExternalLink size={18} /> Backend API
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
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img
                  src="/assets/taskmanager.png"
                  alt="TaskManager Dashboard Preview"
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
                  style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              About the Project
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8"
            >
              Productivity, Built with{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Precision
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-white/60 leading-relaxed"
            >
              TaskManager is a fully typed, end-to-end production application demonstrating a mature full-stack architecture. The React + TypeScript frontend communicates with a secure Express REST API, persisting data in a PostgreSQL database managed through Prisma ORM. Every layer — from bcrypt-hashed auth to type-safe database queries — reflects production engineering standards, not just a tutorial project.
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
              Core{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Features
              </span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A complete task management ecosystem — from real-time dashboards to secure authentication and advanced filtering.
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
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              App{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Showcase
              </span>
            </motion.h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              A look into the clean, functional interface — from the analytics dashboard to the task list and creation modal.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {screenshots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group bg-slate-100 dark:bg-white/5"
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

      {/* Architecture Section */}
      <section className="py-16 bg-slate-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Project{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Architecture
              </span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Frontend",
                items: ["React + TypeScript", "Vite build tool", "Tailwind CSS styling", "Deployed on Vercel"]
              },
              {
                label: "Backend",
                items: ["Node.js + Express", "TypeScript end-to-end", "JWT + bcrypt auth", "Deployed on Railway"]
              },
              {
                label: "Database",
                items: ["PostgreSQL (relational)", "Prisma ORM", "Type-safe queries", "Migration management"]
              },
              {
                label: "Security",
                items: ["bcrypt password hashing", "JWT session tokens", "Protected API routes", "Input validation"]
              }
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10"
              >
                <h3
                  className="text-sm font-black uppercase tracking-widest mb-4"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {col.label}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
            style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #6366f1)' }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[100px] rounded-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">🚀 Live on Vercel + Railway</p>
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                Try it Live — Use Default Credentials
              </h2>
              <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto">
                The app is fully deployed and ready to explore. Sign in with the default account to test all features — dashboard, task CRUD, filters, and more.
              </p>
              <p className="text-white/60 text-sm mb-10 font-mono">
                Email: admin@test.com &nbsp;|&nbsp; Password: 123456
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://task-management-system-pi-lime.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} /> Open TaskManager
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

export default TaskManager;
