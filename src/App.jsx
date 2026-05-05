import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import TechTicker from './components/TechTicker';
import Contact from './sections/Contact';
import PosSystem from './pages/PosSystem';
import BudgetApp from './pages/BudgetApp';

// Scroll to top component to handle navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <TechTicker />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-pink-500/30">
        <Navbar />
        <FloatingActions />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pos-system" element={<PosSystem />} />
            <Route path="/budget-app" element={<BudgetApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;

