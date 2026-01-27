import { Instagram, Facebook, Youtube } from 'lucide-react';
import logoKelfit from '@/assets/logo-kelfit.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#' },
    { label: 'Metodologia', href: '#como-funciona' },
    { label: 'Diferenciais', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border/30 py-10 sm:py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="flex items-center mb-3 sm:mb-4">
              <img 
                src={logoKelfit} 
                alt="Team KelFit" 
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs">
              Consultoria fitness premium com foco em resultados reais. 
              Transformando vidas através do treinamento personalizado e suporte 24h.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-5 md:mb-6 text-primary">NAVEGAÇÃO</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-5 md:mb-6 text-primary">REDES SOCIAIS</h4>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-background border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              <span className="block mb-1">WhatsApp:</span>
              <a href="https://wa.me/5531991741310" className="text-primary hover:underline">(31) 99174-1310</a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Team KelFit. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
