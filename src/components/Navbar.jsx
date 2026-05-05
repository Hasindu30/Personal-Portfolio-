import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Helper to handle smooth scroll to hash links
  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const ThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-7 flex items-center bg-slate-200 dark:bg-white/10 rounded-full p-1 cursor-pointer transition-colors"
      aria-label="Toggle Theme"
    >
      <div className="flex justify-between w-full px-1 z-0">
        <Moon size={14} className="text-slate-400 dark:text-white/40" />
        <Sun size={14} className="text-slate-400 dark:text-white/40" />
      </div>
      <motion.div
        className="absolute w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center z-10"
        animate={{
          left: theme === 'dark' ? '4px' : 'calc(100% - 24px)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-slate-900" />
        ) : (
          <Sun size={12} className="text-slate-900" />
        )}
      </motion.div>
    </button>
  );

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-slate-200 dark:border-white/10' 
          : 'py-6 bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            HASINDU<span className="text-pink-500">.</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-white/70 hover:text-pink-500 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {/* Theme Toggle Switch */}
          <div className="flex items-center ml-4 pl-4 border-l border-slate-200 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-semibold text-slate-600 dark:text-white/80 hover:text-pink-500 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

