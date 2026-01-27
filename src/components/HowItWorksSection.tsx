import { ClipboardList, Dumbbell, HeartPulse, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import WorkoutMarquee from './WorkoutMarquee';

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
    description: 'Facilitamos sua conexão com nutricionistas de elite para que sua nutrição seja tão personalizada quanto seu protocolo de treinamento.',
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
    <section id="como-funciona" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background" />
      
      {/* Decorative grid lines - Hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-primary text-sm font-bold tracking-widest mb-3 md:mb-4 block">METODOLOGIA</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              PASSO A PASSO
              <br />
              <span className="text-gradient-orange">PARA O SUCESSO</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right text-sm md:text-base">
            Uma metodologia comprovada que já transformou mais de 500 vidas. Seu próximo nível começa aqui.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 md:duration-700 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-6 md:p-8 bg-card/50 border border-border/30 rounded-xl hover:border-primary/50 transition-colors overflow-hidden">
                  {/* Large background number - Hidden on mobile */}
                  <span className="hidden md:block absolute -right-4 -top-4 font-display font-black text-[100px] lg:text-[120px] text-primary/5 leading-none select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>

                  {/* Number badge */}
                  <div className="relative z-10 inline-flex items-center gap-2 mb-3 md:mb-4">
                    <span className="text-primary font-display font-bold text-sm">{step.number}</span>
                    <div className="w-6 md:w-8 h-px bg-primary/50" />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 font-display font-bold text-lg md:text-xl mb-2 md:mb-3">{step.title}</h3>
                  <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Workout Marquee */}
      <div className="mt-16 md:mt-20">
        <WorkoutMarquee />
      </div>
    </section>
  );
};

export default HowItWorksSection;
