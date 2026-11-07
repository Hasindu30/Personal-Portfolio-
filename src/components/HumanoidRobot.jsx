import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

/**
 * HumanoidRobot Component
 * Renders the premium animated 3D humanoid robot inspired by GTN Technologies.
 * Supports transparent WebGL canvas, initial reveal zoom-out, idle breathing motion,
 * subtle mouse tracking, dynamic dark/light mode adaptation, and clean WebGL disposal.
 */
const HumanoidRobot = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Detect and track current theme from documentElement
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize and load the Spline 3D robot
  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const app = new Application(canvas, {
      renderMode: prefersReducedMotion ? 'manual' : 'auto',
      renderer: 'webgl',
    });
    appRef.current = app;

    const sceneLocalUrl = '/assets/robot.splinecode';
    const sceneCdnUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

    let updatePixelRatio = null;

    const loadScene = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Try local file first, fallback to CDN if needed
        try {
          await app.load(sceneLocalUrl);
        } catch (localErr) {
          console.warn('[HumanoidRobot] Local scene load failed, attempting CDN fallback:', localErr);
          await app.load(sceneCdnUrl);
        }

        if (isMounted) {
          window.__splineApp = app;

          // Clamp mobile DPR to max 1.6 to prevent fillrate overload on Retina screens
          updatePixelRatio = () => {
            if (app._renderer && canvas) {
              const isMobile = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
              const targetDPR = isMobile
                ? Math.min(window.devicePixelRatio || 1, 1.6)
                : Math.min(window.devicePixelRatio || 1, 2.0);
              app._renderer.setPixelRatio(targetDPR);
              app._renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            }
          };

          updatePixelRatio();
          window.addEventListener('resize', updatePixelRatio);

          // Fine-tune head rotation range, responsiveness, and return to neutral on leave
          try {
            const lookAtHandler = app._eventManager?.handlers?.LookAt;
            if (lookAtHandler?.events) {
              for (const ev of lookAtHandler.events) {
                if (ev.object?.name === 'Head') {
                  // Decreasing distance from 300 to 220 increases horizontal rotation by ~35% and vertical by ~25%
                  ev.data.distance = 220;
                  // Improve tracking responsiveness while preserving smooth mechanical easing
                  ev.data.dampingFactor = 7.5;
                  // Enable smooth return to neutral orientation when cursor leaves
                  ev.data.resetOnPointerLeave = true;
                  ev.data.resetSpeed = 16;
                }
                if (ev.object?.name === 'Top part') {
                  ev.data.distance = 780;
                  ev.data.dampingFactor = 36;
                  ev.data.resetOnPointerLeave = true;
                  ev.data.resetSpeed = 16;
                }
              }
            }
          } catch (tuneErr) {
            console.warn('[HumanoidRobot] LookAt fine-tuning notice:', tuneErr);
          }

          setIsLoading(false);
          // If reduced motion, trigger single frame render
          if (prefersReducedMotion) {
            app.requestRender();
          }
        }
      } catch (err) {
        console.error('[HumanoidRobot] Failed to load 3D robot scene:', err);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    loadScene();

    // Viewport visibility observer to halt WebGL render loop when scrolled offscreen
    let visibilityObserver = null;
    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          if (!appRef.current || !appRef.current._renderer) return;
          if (entry.isIntersecting) {
            if (appRef.current.isStopped) {
              appRef.current.play();
            }
          } else {
            if (!appRef.current.isStopped) {
              appRef.current.stop();
            }
          }
        },
        { threshold: 0.02 }
      );
      visibilityObserver.observe(containerRef.current);
    }

    // Mouse leave handler to smoothly return head to neutral pose
    const handleMouseLeave = () => {
      try {
        const lookAtHandler = appRef.current?._eventManager?.handlers?.LookAt;
        if (lookAtHandler?.events) {
          for (const ev of lookAtHandler.events) {
            ev.isReset = true;
            if (typeof lookAtHandler.updateSingleEvent === 'function') {
              lookAtHandler.updateSingleEvent(ev);
            }
          }
        }
      } catch {
        // silent fail
      }
    };

    const canvasEl = canvasRef.current;
    if (canvasEl) {
      canvasEl.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup WebGL buffers, contexts and event listeners on unmount
    return () => {
      isMounted = false;
      if (visibilityObserver) {
        visibilityObserver.disconnect();
      }
      if (updatePixelRatio) {
        window.removeEventListener('resize', updatePixelRatio);
      }
      if (canvasEl) {
        canvasEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      try {
        if (appRef.current) {
          appRef.current.dispose();
          appRef.current = null;
        }
      } catch (e) {
        console.warn('[HumanoidRobot] Error during disposal:', e);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[440px] md:min-h-[560px] lg:min-h-[640px] flex items-center justify-center select-none cursor-default ${className}`}
      aria-label="Interactive 3D Humanoid Robot"
    >
      {/* Background Lighting Effects */}
      {/* Dark Mode: Futuristic tech spotlight & subtle rim glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Soft radial rim spotlight centered behind the robot's head and shoulders */}
        <div className="absolute right-[5%] top-[10%] w-[80%] h-[75%] rounded-full bg-gradient-to-br from-indigo-500/15 via-pink-500/10 to-transparent blur-[70px]" />
        
        {/* Subtle tech dot/grid backdrop behind robot */}
        <div 
          className="absolute inset-4 rounded-3xl opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at 60% 45%, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 60% 45%, black 40%, transparent 75%)',
          }}
        />
      </div>

      {/* Light Mode: Elegant ambient soft aura to contrast the glossy black robot */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${
          !isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Soft bright gradient grounding the robot against the off-white background */}
        <div className="absolute right-[8%] top-[12%] w-[80%] h-[75%] rounded-full bg-gradient-to-b from-indigo-100/40 via-purple-50/20 to-transparent blur-[70px]" />
        <div className="absolute bottom-[5%] left-[20%] right-[20%] h-[24px] rounded-full bg-slate-900/5 blur-xl" />
      </div>

      {/* Loading Skeleton / Futuristic Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Spinning glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-pink-500 border-r-indigo-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-500 animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 animate-pulse" />
          </div>
          <p className="mt-4 text-xs font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 animate-pulse">
            Initializing 3D Robot...
          </p>
        </div>
      )}

      {/* Fallback in case WebGL is unavailable */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          <div className="w-16 h-16 mb-4 rounded-2xl bg-pink-500/10 dark:bg-white/5 border border-pink-500/20 flex items-center justify-center text-pink-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Interactive 3D Robot</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
            WebGL acceleration is required to render the real-time humanoid model.
          </p>
        </div>
      )}

      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block cursor-default transition-opacity duration-700 relative z-10 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{
          cursor: 'default',
          outline: 'none',
          touchAction: 'pan-y',
          maskImage: 'linear-gradient(to bottom, black 82%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 98%)',
        }}
      />
    </div>
  );
};

export default HumanoidRobot;
