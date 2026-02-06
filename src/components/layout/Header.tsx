import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="container-lab">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Minimal */}
          <Link 
            to="/" 
            className="font-display text-lg italic text-white hover:opacity-70 transition-opacity duration-500"
          >
            Industrial Magic
          </Link>

          {/* Desktop Navigation - Sparse */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-caption uppercase tracking-widest transition-opacity duration-500 ${
                    location.pathname === item.href 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-white"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-background z-40"
          >
            <ul className="container-lab pt-32 flex flex-col gap-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-display-lg italic"
                >
                  Home
                </Link>
              </motion.li>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: (index + 2) * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-display-lg italic ${
                      location.pathname === item.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
