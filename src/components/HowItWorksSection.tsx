import { ClipboardList, Dumbbell, HeartPulse, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Análise Inicial',
    description: 'Preencha nosso questionário detalhado para uma análise completa do seu perfil, metas e rotina.',
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Plano Personalizado',
    description: 'Receba um programa de treino e nutrição 100% adaptado às suas necessidades e objetivos.',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'Acompanhamento Premium',
    description: 'Suporte contínuo com ajustes semanais e feedback em tempo real para maximizar resultados.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Evolução Constante',
    description: 'Acompanhe sua evolução com métricas detalhadas e celebre cada conquista no caminho.',
  },
];

const HowItWorksSection = () => {
  const { ref, visibleItems } = useScrollAnimation(steps.length);

  return (
    <section id="como-funciona" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 carbon-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            NOSSA <span className="text-gradient-orange">METODOLOGIA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entenda como vamos construir a sua melhor versão, passo a passo.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group glass-card p-6 hover:border-primary/30 transition-all duration-500 gradient-border ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <span className="font-display font-black text-5xl text-primary/20 group-hover:text-primary/40 transition-colors">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="my-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
