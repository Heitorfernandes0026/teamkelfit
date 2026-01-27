import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logoKelfit from '@/assets/logo-kelfit.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'SOBRE' },
    { href: '#como-funciona', label: 'METODOLOGIA' },
    { href: '#planos', label: 'PLANOS' },
    { href: '#depoimentos', label: 'RESULTADOS' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const whatsappLink = 'https://wa.me/5531991741310?text=' + encodeURIComponent('Olá! Quero saber mais sobre o Team KelFit!');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logoKelfit} 
              alt="Team KelFit" 
              className="h-8 md:h-10 w-auto"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary fast-transition font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 py-2.5 rounded-lg fast-transition text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              AGENDAR
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 touch-btn flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary fast-transition font-medium py-3 text-left tracking-wide touch-btn"
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 mt-2 rounded-lg touch-btn"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR NO WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
