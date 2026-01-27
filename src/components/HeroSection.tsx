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
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-background">
      {/* Background Image - Full coverage with cover and center positioning */}
      <div 
        className="absolute inset-0 top-16 md:top-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 md:via-background/60 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content - Responsive layout with flexbox centering */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 min-h-[80vh] md:min-h-screen flex flex-col justify-center items-start pt-20 md:pt-24 pb-24 md:pb-28">
        <div className="max-w-[90%] sm:max-w-xl md:max-w-2xl">
          {/* Main title - Responsive typography */}
          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
            <span className="text-foreground">Team </span>
            <span className="text-foreground">Kel</span>
            <span className="text-primary">Fit</span>
            <br />
            <span className="text-foreground text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Não é apenas mais um treino.</span>
            <br />
            <span className="text-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">É o seu novo padrão de resultados.</span>
          </h1>

          {/* Subtitle - Responsive text */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mb-6 md:mb-10 leading-relaxed">
            Acesso restrito a quem busca o máximo desempenho. Protocolos 100% individuais com análise técnica de movimentos e suporte direto via WhatsApp.
          </p>

          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
            <Button
              onClick={scrollToPlans}
              size="lg"
              className="w-full xs:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full uppercase tracking-wider"
            >
              Comece Agora
            </Button>
            
            {/* Play button - Hidden on small screens */}
            <button 
              onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-foreground/30 items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors flex-shrink-0"
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
