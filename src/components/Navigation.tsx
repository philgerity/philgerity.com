import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Navigation = ({ theme, setTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full nav-blur z-50 shadow-sm transition-all duration-300 ${isVisible ? 'nav-visible' : 'nav-hidden'
        } ${theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} role="progressbar" aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div>
              <a
                href="#"
                className="text-xl font-bold transition-colors duration-300 hover:text-blue-600"
                aria-label="Home"
              >
                Phil Gerity
              </a>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Product Leader | Maker
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ?
                <Moon className="w-5 h-5" aria-hidden="true" /> :
                <Sun className="w-5 h-5" aria-hidden="true" />
              }
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'work', label: 'Work' },
                { id: 'writing', label: 'Writing' },
                { id: 'media', label: 'Media' },
                { id: 'projects', label: 'Projects' },
                { id: 'bio', label: 'Bio' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`hover:text-blue-600 transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleMenuKeyDown}
                className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                {isOpen ?
                  <X size={24} aria-hidden="true" /> :
                  <Menu size={24} aria-hidden="true" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden animate-slide-down"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            {[
              { id: 'work', label: 'Work' },
              { id: 'writing', label: 'Writing' },
              { id: 'media', label: 'Media' },
              { id: 'projects', label: 'Projects' },
              { id: 'bio', label: 'Bio' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;