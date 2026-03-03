import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Estimasi', href: '#calculator' },
  { name: 'Testimoni', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(26, 26, 26, 1)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 10px 30px -10px rgba(0, 0, 0, 0.1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, color: textColor, boxShadow: shadow }}
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold tracking-widest">GARDENIA</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-white md:hidden"
      >
        <div className="flex flex-col gap-6 px-6 py-10 text-dark">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-primary py-4 text-center text-sm font-bold text-white"
          >
            Hubungi Kami
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
