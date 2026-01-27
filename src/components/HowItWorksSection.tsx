import { ClipboardList, Dumbbell, HeartPulse, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Análise Completa',
    description: 'Avaliação detalhada do seu perfil físico, objetivos e rotina para criar a estratégia perfeita.',
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Treino Personalizado',
    description: 'Programa de treino 100% adaptado às suas necessidades, preferências e disponibilidade.',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'Nutrição Estratégica',
    description: 'Plano alimentar flexível e sustentável, ajustado ao seu estilo de vida e objetivos.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Evolução Contínua',
    description: 'Acompanhamento semanal com ajustes constantes para maximizar seus resultados.',
  },
];

const HowItWorksSection = () => {
  const { ref, visibleItems } = useScrollAnimation(steps.length);

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background" />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-primary text-sm font-bold tracking-widest mb-4 block">METODOLOGIA</span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
              PASSO A PASSO
              <br />
              <span className="text-gradient-orange">PARA O SUCESSO</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Uma metodologia comprovada que já transformou mais de 500 vidas. Seu próximo nível começa aqui.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-card/50 border border-border/30 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:bg-card/80">
                  {/* Large background number */}
                  <span className="absolute -right-4 -top-4 font-display font-black text-[120px] text-primary/5 leading-none select-none group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Number badge */}
                  <div className="relative z-10 inline-flex items-center gap-2 mb-4">
                    <span className="text-primary font-display font-bold text-sm">{step.number}</span>
                    <div className="w-8 h-px bg-primary/50" />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 font-display font-bold text-xl mb-3">{step.title}</h3>
                  <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
