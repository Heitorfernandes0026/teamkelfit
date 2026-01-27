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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Full screen with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Team KelFit"
          className="w-full h-full object-cover object-[70%_15%]"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center pt-20">
        {/* Main title */}
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-in-up max-w-4xl">
          <span className="text-foreground">Feito para o Seu</span>
          <br />
          <span className="text-gradient-neon">Estilo Fitness.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
          Seus objetivos, seu ritmo, nossos programas comprovados — desenvolvidos para ajudá-lo a treinar com propósito e transformar-se com confiança.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
            className="w-14 h-14 rounded-full border-2 border-foreground/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group mt-2"
          >
            <Play className="w-5 h-5 text-foreground group-hover:text-primary transition-colors fill-current" />
          </button>
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
