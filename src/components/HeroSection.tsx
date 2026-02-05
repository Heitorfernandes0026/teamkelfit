import { memo } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kelfit.jpg';
import WorkoutMarquee from './WorkoutMarquee';

const HeroSection = memo(() => {
  const scrollToPlans = () => {
    const element = document.querySelector('#planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-background">
      {/* LCP-optimized Hero Image with priority loading - explicit dimensions for CLS prevention */}
      <img
        src={heroImage}
        alt="Team KelFit - Consultoria Fitness Premium"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="sync"
        loading="eager"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1920px 1080px' }}
        className="absolute inset-0 top-16 md:top-20 w-full h-full object-cover object-center"
      />

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
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mt-4 md:mt-0">
            <Button
              onClick={scrollToPlans}
              size="lg"
              className="w-full xs:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full uppercase tracking-wider"
            >
              Comece Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <WorkoutMarquee />
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
