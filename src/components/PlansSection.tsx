import { Check, Star, Zap, Crown, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    description: 'Para começar sua transformação',
    price: '197',
    icon: Zap,
    popular: false,
    features: [
      'Treino personalizado',
      'Planilha mensal',
      'Suporte via WhatsApp',
      'Grupo exclusivo',
    ],
  },
  {
    name: 'Premium',
    description: 'Mais escolhido',
    price: '347',
    icon: Star,
    popular: true,
    features: [
      'Treino 100% personalizado',
      'Planilha semanal',
      'Suporte 24h',
      'Acompanhamento nutricional',
      'Análise de vídeo',
      'Grupo VIP',
    ],
  },
  {
    name: 'Elite',
    description: 'Resultados extraordinários',
    price: '597',
    icon: Crown,
    popular: false,
    features: [
      'Tudo do Premium',
      'Ajustes ilimitados',
      'Atendimento prioritário',
      'Chamadas de vídeo',
      'Preparação competição',
    ],
  },
];

const PlansSection = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${planName} do Team KelFit!`
    );
    window.open(`https://wa.me/5531991741310?text=${message}`, '_blank');
  };

  return (
    <section id="planos" className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest mb-3 block">
            PLANOS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-3">
            INVISTA NA SUA <span className="text-primary">TRANSFORMAÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Escolha o plano ideal para seu objetivo.
          </p>
        </div>

        {/* Plans Grid - Mobile scroll or stack */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-5 md:p-6 ${
                plan.popular
                  ? 'bg-primary/10 border-2 border-primary'
                  : 'bg-background border border-border/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                plan.popular ? 'bg-primary' : 'bg-primary/20'
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              {/* Plan info */}
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-xs mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-5">
                <span className="text-muted-foreground text-sm">R$</span>
                <span className="font-display font-black text-4xl text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm touch-btn fast-transition ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                COMEÇAR AGORA
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-xs mt-8 max-w-lg mx-auto">
          Todos os planos podem ser cancelados a qualquer momento. 
          Consulte condições para pacotes trimestrais e semestrais.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
