import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Learn from './components/sections/Learn';
import Blog from './components/sections/Blog';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import SkipLink from './components/SkipLink';
import { ArrowUp } from 'lucide-react';
import { generateSchemaMarkup } from './lib/schema';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Add schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = generateSchemaMarkup();
    document.head.appendChild(script);

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector('.hero-parallax') as HTMLElement;
      if (hero) {
        hero.style.setProperty('--scroll-offset', `${scrolled * 0.5}px`);
      }

      // Show/hide back to top button
      setShowBackToTop(scrolled > 500);
    };

    // Entrance animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.entrance-animation').forEach(el => {
      observer.observe(el);
    });

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        });

        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          const nextIndex = e.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, sections.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    // Check system preference for dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    handleThemeChange(mediaQuery);
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      mediaQuery.removeEventListener('change', handleThemeChange);
      observer.disconnect();
      document.head.removeChild(script);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <SkipLink />
      <Navigation theme={theme} setTheme={setTheme} />
      <main id="main-content" tabIndex={-1}>
        <section 
          className="hero-section relative flex items-start justify-center bg-cover bg-center overflow-hidden"
          aria-label="Introduction"
        >
          <div className="hero-parallax absolute inset-0 bg-cover bg-center"
               style={{
                 backgroundImage: 'url("/phil-gerity.jpg")',
                 transform: 'translateY(var(--scroll-offset, 0))'
               }}
               role="presentation"></div>
          <div className="absolute inset-0 bg-black/25 z-1" role="presentation"></div>
          
          <div className="relative text-center z-10 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white animate-fade-in">Phil Gerity</h1>
            <p className="text-lg md:text-xl text-gray-200 animate-type-writer" role="doc-subtitle">Product Leader | Maker</p>
          </div>
        </section>
        <Learn />
        <Blog />
        <Projects />
        <About />
        <Contact />
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;