import { Instagram } from 'lucide-react';
import logoKelfit from '@/assets/logo-kelfit.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-8 md:py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logoKelfit} alt="Team KelFit" className="h-8 w-auto" loading="lazy" />
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">Siga-nos:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-lg bg-background border border-border/30 flex items-center justify-center hover:border-primary fast-transition touch-btn"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs text-center md:text-right">
            © {currentYear} Team KelFit. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
