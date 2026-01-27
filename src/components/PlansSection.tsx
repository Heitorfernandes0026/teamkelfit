import { Check, Zap, Calendar, CalendarDays, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Aula Avulsa',
    description: 'Para quem quer experimentar',
    price: '99,90',
    period: '',
    icon: Zap,
    popular: false,
    features: [
      'Treino Personalizado',
      'Análise de evolução exclusivo',
    ],
    notIncluded: [],
  },
  {
    name: 'Mensal',
    description: 'Para quem quer começar sua transformação',
    price: '180',
    period: '/mês',
    icon: Calendar,
    popular: false,
    features: [
      'Treino Personalizado',
      'Suporte via WhatsApp',
      'Análise de evolução exclusivo',
      'Aplicativo de Ficha',
    ],
    notIncluded: [],
  },
  {
    name: 'Trimestral',
    description: 'O mais escolhido pelos nossos alunos',
    price: '300',
    period: '/trimestre',
    icon: CalendarDays,
    popular: true,
    features: [
      'Treino Personalizado',
      'Suporte via WhatsApp',
      'Análise de evolução exclusivo',
      'Aplicativo de Ficha',
      'Acesso ao grupo VIP',
      'Análise de vídeo de execução',
    ],
    notIncluded: [],
  },
  {
    name: 'Semestral',
    description: 'Para quem busca resultados extraordinários',
    price: '540',
    period: '/semestre',
    icon: Crown,
    popular: false,
    features: [
      'Treino Personalizado',
      'Suporte via WhatsApp',
      'Análise de evolução exclusivo',
      'Aplicativo de Ficha',
      'Acesso ao grupo VIP',
      'Análise de vídeo de execução',
      'Atendimento Prioritário',
      'Chamada de Vídeos mensais',
      'Preparação para competições',
    ],
    notIncluded: [],
  },
];

const PlansSection = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${planName} do Team KelFit. Gostaria de saber mais informações.`
    );
    window.open(`https://wa.me/5531991741310?text=${message}`, '_blank');
  };

  return (
    <section id="planos" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative gradient - Reduced on mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/5 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4 block">
            PLANOS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
            INVISTA NA SUA <span className="text-gradient-orange">TRANSFORMAÇÃO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Escolha o plano ideal para o seu objetivo e comece sua jornada rumo ao corpo dos sonhos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 md:hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/20 to-background border-2 border-primary shadow-lg shadow-primary/20'
                  : 'bg-card/50 border border-border/30 hover:border-primary/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ${
                plan.popular ? 'bg-primary' : 'bg-primary/20'
              }`}>
                <plan.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              {/* Plan info */}
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-5 sm:mb-6 md:mb-8">
                <span className="text-muted-foreground text-xs sm:text-sm">R$</span>
                <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-4 sm:py-5 md:py-6 font-bold text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                }`}
              >
                COMEÇAR AGORA
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto px-2">
          * Todos os planos incluem acesso à nossa metodologia exclusiva e podem ser cancelados a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
