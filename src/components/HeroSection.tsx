import { ArrowRight } from 'lucide-react';
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background - Full black */}
      <div className="absolute inset-0 bg-background" />

      {/* Hero Image - Right side, dramatic */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src={heroImage}
          alt="Team KelFit"
          className="w-full h-full object-cover object-top"
        />
        {/* Orange glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <span className="text-xs text-muted-foreground tracking-widest rotate-[-90deg] origin-center whitespace-nowrap">
          TEAM KELFIT
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl pt-24 lg:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium tracking-wide">CONSULTORIA FITNESS PREMIUM</span>
          </div>

          {/* Main title */}
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-6 animate-fade-in-up">
            <span className="text-foreground">ADQUIRA</span>
            <br />
            <span className="text-gradient-orange">O SEU</span>
            <br />
            <span className="text-foreground">SHAPE!</span>
          </h1>

          {/* Subtitle with decorative line */}
          <div className="flex items-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-0.5 bg-primary mt-3 flex-shrink-0" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Treino personalizado, nutrição estratégica e acompanhamento 24h para você conquistar resultados reais e duradouros.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <p className="font-display font-black text-3xl md:text-4xl text-primary">500+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Alunos</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="font-display font-black text-3xl md:text-4xl text-primary">98%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Satisfação</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="font-display font-black text-3xl md:text-4xl text-primary">24/7</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Suporte</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-7 rounded-lg group"
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border/50 hover:border-primary/50 text-foreground font-bold text-base px-8 py-7 rounded-lg"
            >
              COMO FUNCIONA
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar with scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6 border-t border-border/20">
            <div className="hidden md:flex items-center gap-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll para explorar</span>
              <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-12 border border-muted-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
