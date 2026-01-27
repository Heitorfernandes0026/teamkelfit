import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroAthlete from '@/assets/hero-athlete.jpg';

const HeroSection = () => {
  const benefits = [
    'Treinos Otimizados',
    'Nutrição Balanceada',
    'Suporte Contínuo',
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-in-up">
              TRANSFORME{' '}
              <span className="text-gradient-orange">SEU CORPO.</span>
              <br />
              SUPERE SEUS{' '}
              <span className="text-gradient-blue">LIMITES.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Programa de Treinamento Personalizado e Suporte 24h para Resultados Reais.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 pulse-glow group"
              >
                QUERO MINHA TRANSFORMAÇÃO
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl blur-2xl scale-110" />
              
              <img
                src={heroAthlete}
                alt="Atleta Team KelFit"
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/50 rounded-xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/30 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
