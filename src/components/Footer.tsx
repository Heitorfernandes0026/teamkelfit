import { Instagram, Facebook, Youtube } from 'lucide-react';

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
    <footer className="border-t border-border/30 py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-primary rounded-lg rotate-45" />
                <span className="font-display font-black text-lg text-primary">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-foreground">TEAM</span>
                <span className="font-display font-black text-xl tracking-tight text-primary -mt-1">KELFIT</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Consultoria fitness premium com foco em resultados reais. 
              Transformando vidas através do treinamento personalizado e suporte 24h.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">REDES SOCIAIS</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-lg bg-background border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              <span className="block mb-1">WhatsApp:</span>
              <a href="https://wa.me/5531991741310" className="text-primary hover:underline">(31) 99174-1310</a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Team KelFit. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
