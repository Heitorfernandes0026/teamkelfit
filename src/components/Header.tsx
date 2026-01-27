import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#como-funciona', label: 'METODOLOGIA' },
    { href: '#resultados', label: 'DIFERENCIAIS' },
    { href: '#depoimentos', label: 'DEPOIMENTOS' },
    { href: '#contato', label: 'CONTATO' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {/* Runner Icon SVG */}
            <svg 
              viewBox="0 0 40 40" 
              className="w-10 h-10 text-primary"
              fill="currentColor"
            >
              {/* Head */}
              <circle cx="28" cy="8" r="4" />
              {/* Body/Running pose */}
              <path d="M8 32 L14 22 L20 24 L24 16 L30 12 M14 22 L10 16 M20 24 L16 32 M20 24 L26 30" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            {/* Text Logo */}
            <div className="flex flex-col leading-none">
              <span className="text-white text-xs font-medium tracking-wide">Team</span>
              <span className="text-lg font-black tracking-tight">
                <span className="text-white">Kel</span>
                <span className="text-primary">Fit</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contato')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 tracking-wide"
            >
              AGENDE AGORA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/30 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 text-left tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contato')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2 tracking-wide"
            >
              AGENDE AGORA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
