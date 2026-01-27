import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kelfit.jpg';
import WorkoutMarquee from './WorkoutMarquee';

const HeroSection = () => {
  const scrollToPlans = () => {
    const element = document.querySelector('#planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image - Full coverage starting after header */}
      <div className="absolute inset-0 top-16 md:top-20">
        <img
          src={heroImage}
          alt="Team KelFit"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_15%]"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 md:via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content - Responsive layout */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex flex-col justify-center pt-16 md:pt-20 pb-20">
        <div className="max-w-xl md:max-w-2xl">
          {/* Main title - Reduced animation on mobile */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 md:animate-fade-in-up">
            <span className="text-foreground">Team </span>
            <span className="text-foreground">Kel</span>
            <span className="text-primary">Fit</span>
            <br />
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Não é apenas mais um treino.</span>
            <br />
            <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">É o seu novo padrão de resultados.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mb-6 md:mb-10 leading-relaxed">
            Acesso restrito a quem busca o máximo desempenho. Protocolos 100% individuais com análise técnica de movimentos e suporte direto via WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Button
              onClick={scrollToPlans}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-10 py-6 sm:py-7 rounded-full uppercase tracking-wider"
            >
              Comece Agora
            </Button>
            
            {/* Play button - Hidden on very small screens */}
            <button 
              onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-foreground/30 items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 text-foreground fill-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <WorkoutMarquee />
      </div>
    </section>
  );
};

export default HeroSection;