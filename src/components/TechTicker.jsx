import { motion } from 'framer-motion';

const techs = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M20 4L35 13v14L20 36 5 27V13L20 4z" fill="#3C873A"/>
        <text x="20" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="Arial">JS</text>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M20 4C15 4 11 10 11 20c0 6 3 10 7 12l2 4 2-4c4-2 7-6 7-12 0-10-4-16-9-16z" fill="#4DB33D"/>
        <path d="M20 4C25 4 29 10 29 20c0 6-3 10-7 12" fill="#3FA037"/>
        <rect x="19" y="28" width="2" height="8" rx="1" fill="#4DB33D"/>
      </svg>
    ),
  },
  {
    name: 'Express',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#1a1a2e"/>
        <text x="20" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" fontFamily="monospace">ex</text>
        <text x="20" y="26" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#888" fontFamily="monospace">press</text>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M20 10c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.857 2.031C22.1 17.393 23.957 19.25 27.5 19.25c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.857-2.031C25.4 11.857 23.543 10 20 10zM12.5 19.25c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.857 2.031C14.6 26.643 16.457 28.5 20 28.5c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.857-2.031C17.9 21.107 16.043 19.25 12.5 19.25z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="6" fill="#3178C6"/>
        <text x="20" y="27" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="Arial">TS</text>
      </svg>
    ),
  },
  {
    name: 'Expo',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#000020"/>
        <path d="M8 22c4-8 6-10 12-10s8 2 12 10" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M10 24c3-5 5-7 10-7s7 2 10 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="14" y="4" width="12" height="12" rx="6" fill="#F24E1E"/>
        <rect x="14" y="16" width="12" height="12" fill="#FF7262"/>
        <rect x="14" y="28" width="12" height="8" rx="4" fill="#A259FF"/>
        <rect x="2" y="16" width="12" height="12" rx="6" fill="#1ABCFE"/>
        <circle cx="26" cy="22" r="6" fill="#0ACF83"/>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M11 30L15 12l5 8 3-14 6 20z" fill="#FFA000"/>
        <path d="M11 30l4-18 5 8z" fill="#F57C00"/>
        <path d="M23 6l6 24-18-6z" fill="#FFCA28"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#000"/>
        <path d="M20 10l12 20H8L20 10z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="4" y="18" width="6" height="5" rx="1" fill="#2496ED"/>
        <rect x="11" y="18" width="6" height="5" rx="1" fill="#2496ED"/>
        <rect x="18" y="18" width="6" height="5" rx="1" fill="#2496ED"/>
        <rect x="11" y="12" width="6" height="5" rx="1" fill="#2496ED"/>
        <rect x="18" y="12" width="6" height="5" rx="1" fill="#2496ED"/>
        <path d="M4 24s0 5 6 6h16c4 0 7-3 7-6H4z" fill="#2496ED" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M37 18.6L21.4 3a2 2 0 00-2.8 0l-3 3 3.8 3.8a2.4 2.4 0 013 3l3.6 3.6a2.4 2.4 0 11-1.4 1.4l-3.4-3.4v8.8a2.4 2.4 0 11-2 0V14a2.4 2.4 0 01-1.3-3.2L14 6.9l-11 11a2 2 0 000 2.8l15.6 15.7a2 2 0 002.8 0L37 21.4a2 2 0 000-2.8z" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <ellipse cx="20" cy="14" rx="12" ry="6" fill="#336791"/>
        <path d="M8 14v12c0 3.3 5.4 6 12 6s12-2.7 12-6V14" stroke="#336791" strokeWidth="2" fill="none"/>
        <ellipse cx="20" cy="14" rx="12" ry="6" fill="none" stroke="#5594c8" strokeWidth="1.5"/>
        <path d="M8 20c0 3.3 5.4 6 12 6s12-2.7 12-6" stroke="#5594c8" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M20 4C13 4 10 7 10 12v3h10v2H8C5 17 3 19 3 24s2 8 5 9l2 1h3v-4c0-3 2-5 7-5s7 2 7 5v5h3l2-1c3-1 5-4 5-9s-2-7-5-8H15v-2h10v-3c0-5-3-8-10-8z" fill="#3776AB"/>
        <path d="M20 36C27 36 30 33 30 28v-3H20v-2h12c3 0 5-2 5-7s-2-8-5-9l-2-1h-3v4c0 3-2 5-7 5s-7-2-7-5v-5H10l-2 1C5 17 3 20 3 25s2 7 5 8h12v2H10v3c0 5 3 8 10 8z" fill="#FDD835" opacity="0.9"/>
        <circle cx="16" cy="10" r="1.5" fill="white"/>
        <circle cx="24" cy="30" r="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#000"/>
        <path d="M24 28L14 14v14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 20v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#232F3E"/>
        <path d="M12 22c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v4z" fill="#FF9900"/>
        <text x="20" y="22" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="Arial">AWS</text>
        <path d="M10 28c3 2 7 3 10 3s7-1 10-3" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M8 26l2 2M32 26l-2 2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#E76F00"/>
        <text x="20" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial">JAVA</text>
        <path d="M16 22c2-1 6-1 8 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M14 26c3-1 9-1 12 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M20 20v8" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'React Native',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#20232A"/>
        <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.6" fill="none"/>
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(120 20 20)"/>
      </svg>
    ),
  },
  {
    name: 'Flutter',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#0A1628"/>
        <path d="M10 20L20 10h10L18 22z" fill="#54C5F8"/>
        <path d="M18 22L30 10" stroke="#54C5F8" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M10 20l8 8h10L20 20z" fill="#01579B"/>
        <path d="M18 28l4-4-4-4" fill="#29B6F6"/>
      </svg>
    ),
  },
  {
    name: '.NET',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect width="40" height="40" rx="8" fill="#512BD4"/>
        <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="Arial">.NET</text>
      </svg>
    ),
  },
];

// Quadruple for a very long track so the loop is seamless even on wide screens
const row1 = [...techs, ...techs, ...techs, ...techs];
const row2 = [...techs, ...techs, ...techs, ...techs].reverse();

const chipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 18px',
  borderRadius: '16px',
  border: '1px solid rgba(148,163,184,0.2)',
  background: 'rgba(148,163,184,0.08)',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  cursor: 'default',
};

const trackStyle = (direction) => ({
  display: 'flex',
  gap: '14px',
  width: 'max-content',
  animation: `${direction} 40s linear infinite`,
});

const TechTicker = () => {
  return (
    <section style={{ padding: '60px 0', overflow: 'hidden', position: 'relative' }}>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '28px' }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/30">
          Technologies I Work With
        </span>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div style={{ overflow: 'hidden', marginBottom: '14px' }}>
        <div style={trackStyle('ticker-ltr')} className="ticker-ltr">
          {row1.map((tech, i) => (
            <div key={i} style={chipStyle}
              className="border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:border-pink-500/40 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              {tech.svg}
              <span className="text-sm font-semibold text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div style={{ overflow: 'hidden' }}>
        <div style={trackStyle('ticker-rtl')} className="ticker-rtl">
          {row2.map((tech, i) => (
            <div key={i} style={chipStyle}
              className="border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:border-indigo-500/40 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              {tech.svg}
              <span className="text-sm font-semibold text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechTicker;
