import { Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Página Inicial', href: '#' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl">
                Team <span className="text-primary">KelFit</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consultoria de fitness online premium, oferecendo treinamento personalizado 
              e suporte 24h para você alcançar seus objetivos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Team KelFit. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
