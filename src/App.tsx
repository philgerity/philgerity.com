import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Learn from './components/sections/Learn';
import Blog from './components/sections/Blog';
import Media from './components/sections/Media';
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
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-cream-100'
      }`}>
      <SkipLink />
      <Navigation theme={theme} setTheme={setTheme} />
      <main id="main-content" tabIndex={-1}>
        <section
          className="hero-section relative bg-cream-100 overflow-hidden"
          aria-label="Introduction"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* Circular Profile Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/phil-gerity-2.jpg"
                  alt="Phil Gerity"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-white/50 animate-fade-in"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-4 text-gray-900 leading-tight animate-fade-in">
                  Phil Gerity
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in animate-delay-100" role="doc-subtitle">
                  Product Leader | Maker
                </p>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed animate-fade-in animate-delay-200">
                  I'm a product leader at Microsoft, building innovative experiences for Windows 365 and Azure Virtual Desktop.
                  My passion is designing cutting edge products that solve real customer problems.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 justify-center md:justify-start animate-fade-in animate-delay-300">
                  <a href="https://www.linkedin.com/in/philgerity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/philgerity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors"
                    aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Learn />
        <Blog />
        <Media />
        <Projects />
        <About />
        <Contact />
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;