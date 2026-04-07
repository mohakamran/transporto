import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useScroll } from '@/src/hooks/useScroll';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Tracking', path: '/tracking' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Determine if we should show dark text or light text
  // On home page, we want light text when not scrolled (over hero)
  // On other pages, we always want dark text or a background
  const showLightText = isHomePage && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-white/80 text-xs py-2 px-6 transition-all duration-500 overflow-hidden",
        isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={12} className="text-secondary" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={12} className="text-secondary" /> support@transporto.com</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <Link to="/faq" className="hover:text-secondary transition-colors">Help Center</Link>
            <Link to="/tracking" className="hover:text-secondary transition-colors">Track Order</Link>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'transition-all duration-500 px-6 py-4',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3 border-b border-gray-200/50' 
            : isHomePage 
              ? 'bg-transparent py-6' 
              : 'bg-white shadow-sm py-4'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "p-2 rounded-xl transition-all duration-500 shadow-lg group-hover:rotate-12",
              (isScrolled || !isHomePage) ? "bg-primary" : "bg-secondary"
            )}>
              <Truck className={cn("w-6 h-6", (isScrolled || !isHomePage) ? "text-white" : "text-primary")} />
            </div>
            <span className={cn(
              "text-2xl font-display font-bold tracking-tight transition-colors",
              showLightText ? "text-white" : "text-primary"
            )}>
              Trans<span className="text-secondary">Porto</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-bold text-sm uppercase tracking-widest transition-all hover:text-secondary relative group',
                  showLightText ? 'text-white' : (location.pathname === link.path ? 'text-secondary' : 'text-primary')
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full",
                  location.pathname === link.path ? "w-full" : "w-0"
                )}></span>
              </Link>
            ))}
            <Link to="/contact" className={cn(
              "px-8 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-xl hover:shadow-secondary/20",
              showLightText 
                ? "bg-secondary text-primary hover:bg-white" 
                : "bg-primary text-white hover:bg-primary/90"
            )}>
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2 transition-colors", showLightText ? "text-white" : "text-primary")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 lg:hidden flex flex-col p-8 gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-xl font-display font-bold py-3 border-b border-gray-50 transition-colors',
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-4 rounded-2xl font-bold mt-4 shadow-xl"
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
