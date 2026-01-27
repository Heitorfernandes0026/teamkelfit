import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kelfit.jpg';

const HeroSection = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Quero começar minha transformação com o Team KelFit!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToPlans = () => {
    document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-background">
      {/* Background Image - Optimized for mobile */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Team KelFit"
          className="w-full h-full object-cover object-[70%_20%] md:object-contain md:object-right"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 md:via-background/50 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 min-h-[100svh] flex flex-col justify-center pt-20 pb-32 md:pb-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-4 md:mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">VAGAS LIMITADAS</span>
          </div>

          {/* Main title - Mobile optimized */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 md:mb-6 hero-title">
            <span className="text-foreground">Team </span>
            <span className="text-foreground">Kel</span>
            <span className="text-primary">Fit</span>
            <br className="hidden sm:block" />
            <span className="block mt-2 text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Seu novo padrão de <span className="text-primary">resultados.</span>
            </span>
          </h1>

          {/* Subtitle - Concise for mobile */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed">
            Treino 100% personalizado com acompanhamento direto via WhatsApp. 
            <span className="hidden sm:inline"> Protocolo individual baseado nos seus objetivos.</span>
          </p>

          {/* Benefits list - Mobile scannable */}
          <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-6 md:mb-8 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Suporte 24h
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Resultados em 30 dias
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              +500 alunos
            </li>
          </ul>

          {/* CTA Buttons - Large touch targets */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] active:bg-[#1da851] text-white font-bold text-base px-6 py-4 rounded-xl transition-colors touch-btn"
            >
              <MessageCircle className="w-5 h-5" />
              QUERO COMEÇAR AGORA
            </a>
            <Button
              onClick={scrollToPlans}
              variant="outline"
              className="border-border/50 hover:border-primary hover:bg-primary/10 font-bold text-base px-6 py-4 h-auto rounded-xl touch-btn"
            >
              VER PLANOS
            </Button>
          </div>
        </div>
      </div>

      {/* Simple bottom bar - No heavy animations on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-primary py-3 md:py-4">
        <div className="container mx-auto px-4">
          <p className="text-primary-foreground font-display font-bold text-center text-sm md:text-base uppercase tracking-wider">
            Transforme seu corpo com quem entende de resultado
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
