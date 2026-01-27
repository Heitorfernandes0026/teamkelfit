import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kelfit.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image - Maintains aspect ratio, positioned right */}
      <div className="absolute inset-0 flex justify-end">
        <img
          src={heroImage}
          alt="Team KelFit"
          className="h-full w-auto max-w-none object-contain object-right"
        />
        {/* Subtle gradient overlay for text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/70" />
      </div>

      {/* Content - Left aligned */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex flex-col justify-center pt-20">
        <div className="max-w-2xl">
          {/* Main title */}
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up">
            <span className="text-foreground">Team </span>
            <span className="text-foreground">Kel</span>
            <span className="text-primary">Fit</span>
            <br />
            <span className="text-foreground">Não é apenas mais um treino.</span>
            <br />
            <span className="text-primary">É o seu novo padrão de resultados.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Acesso restrito a quem busca o máximo desempenho. Protocolos 100% individuais com análise técnica de movimentos e suporte direto via WhatsApp para garantir que você nunca treine errado.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-10 py-7 rounded-full group uppercase tracking-wider"
            >
              Comece Agora
            </Button>
            
            {/* Play button */}
            <button 
              onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-14 h-14 rounded-full border-2 border-foreground/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Play className="w-5 h-5 text-foreground group-hover:text-primary transition-colors fill-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-primary-foreground font-display font-black text-xl md:text-2xl mx-8 uppercase tracking-wider">
              Workout
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;