import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center shadow-lg shadow-accent-500/30 group-hover:shadow-accent-500/50 transition-all duration-300 group-hover:scale-110">
            <span className="font-heading font-bold text-white text-sm tracking-tight">SM</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-semibold text-gray-800 dark:text-white text-sm tracking-wide">Sangram</span>
            <span className="block font-mono text-accent-500 text-xs tracking-widest">MORKAR</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 font-heading font-medium text-sm rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-accent-500 bg-accent-500/10'
                    : 'text-gray-600 dark:text-gray-300 hover:text-accent-500 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-accent-500"
            aria-label="Toggle theme"
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>

          <a
            href="#"
            className="hidden md:flex btn-primary text-sm py-2 px-4"
          >
            <i className="fas fa-download text-xs" />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-sm`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-gray-100 dark:border-dark-700 px-6 py-4 space-y-1">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'text-accent-500 bg-accent-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2">
            <a href="#" className="btn-primary w-full justify-center text-sm">
              <i className="fas fa-download text-xs" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
