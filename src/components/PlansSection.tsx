import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Essencial',
    description: 'Para quem quer começar sua transformação',
    price: '197',
    period: '/mês',
    icon: Zap,
    popular: false,
    features: [
      'Treino personalizado',
      'Planilha de treino mensal',
      'Suporte via WhatsApp',
      'Análise de evolução mensal',
      'Acesso ao grupo exclusivo',
    ],
    notIncluded: [
      'Acompanhamento nutricional',
      'Análise de vídeo de execução',
      'Atendimento prioritário',
    ],
  },
  {
    name: 'Premium',
    description: 'O mais escolhido pelos nossos alunos',
    price: '347',
    period: '/mês',
    icon: Star,
    popular: true,
    features: [
      'Treino 100% personalizado',
      'Planilha de treino semanal',
      'Suporte via WhatsApp 24h',
      'Análise de evolução semanal',
      'Acesso ao grupo VIP',
      'Acompanhamento nutricional básico',
      'Análise de vídeo de execução',
    ],
    notIncluded: [
      'Atendimento prioritário',
    ],
  },
  {
    name: 'Elite',
    description: 'Para quem busca resultados extraordinários',
    price: '597',
    period: '/mês',
    icon: Crown,
    popular: false,
    features: [
      'Treino 100% personalizado',
      'Ajustes ilimitados de treino',
      'Suporte VIP via WhatsApp 24h',
      'Análise de evolução diária',
      'Acesso a todos os grupos',
      'Acompanhamento nutricional completo',
      'Análise de vídeo ilimitada',
      'Atendimento prioritário',
      'Chamadas de vídeo mensais',
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
    <section id="planos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block">
            PLANOS
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            INVISTA NA SUA <span className="text-gradient-orange">TRANSFORMAÇÃO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha o plano ideal para o seu objetivo e comece sua jornada rumo ao corpo dos sonhos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/20 to-background border-2 border-primary shadow-lg shadow-primary/20'
                  : 'bg-card/50 border border-border/30 hover:border-primary/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.popular ? 'bg-primary' : 'bg-primary/20'
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              {/* Plan info */}
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-muted-foreground text-sm">R$</span>
                <span className="font-display font-black text-5xl text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 opacity-50">
                    <span className="w-5 h-5 flex items-center justify-center text-muted-foreground flex-shrink-0">—</span>
                    <span className="text-muted-foreground text-sm line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-6 font-bold text-base ${
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
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto">
          * Todos os planos incluem acesso à nossa metodologia exclusiva e podem ser cancelados a qualquer momento. 
          Consulte condições especiais para pacotes trimestrais e semestrais.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
