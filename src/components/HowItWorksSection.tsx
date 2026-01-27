import { ClipboardList, Dumbbell, HeartPulse, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Análise Completa',
    description: 'Avaliação do seu perfil, objetivos e rotina.',
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Treino Personalizado',
    description: 'Programa 100% adaptado às suas necessidades.',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'Nutrição Estratégica',
    description: 'Plano alimentar flexível e sustentável.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Evolução Contínua',
    description: 'Acompanhamento semanal com ajustes.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest mb-3 block">METODOLOGIA</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            PASSO A PASSO
            <br />
            <span className="text-primary">PARA O SUCESSO</span>
          </h2>
        </div>

        {/* Steps Grid - Mobile optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="relative h-full p-5 md:p-6 bg-background border border-border/30 rounded-xl">
                  {/* Number badge */}
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-primary font-display font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-base md:text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
