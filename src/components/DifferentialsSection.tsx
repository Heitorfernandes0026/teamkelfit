import { Sparkles, Headphones, FlaskConical, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const differentials = [
  {
    icon: Sparkles,
    title: 'Personalização Extrema',
    description: 'Cada plano é único, criado especificamente para você, considerando sua rotina, preferências e objetivos.',
  },
  {
    icon: Headphones,
    title: 'Suporte Humano 24h',
    description: 'Atendimento real, com profissionais dedicados prontos para ajudar a qualquer momento.',
  },
  {
    icon: FlaskConical,
    title: 'Metodologia Científica',
    description: 'Baseamos nossos protocolos nas mais recentes pesquisas de nutrição e treinamento.',
  },
  {
    icon: Trophy,
    title: 'Resultados Comprovados',
    description: '+500 alunos transformados com resultados documentados e acompanhamento contínuo.',
  },
];

const DifferentialsSection = () => {
  const { ref, visibleItems } = useScrollAnimation(differentials.length);

  return (
    <section id="resultados" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            POR QUE ESCOLHER O <span className="text-gradient-blue">TEAM KELFIT?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferenciais que fazem da nossa consultoria a escolha número 1.
          </p>
        </div>

        {/* Differentials Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex gap-6 p-6 rounded-xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all duration-500 group ${
                  visibleItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Alunos Transformados' },
            { value: '98%', label: 'Taxa de Satisfação' },
            { value: '24/7', label: 'Suporte Disponível' },
            { value: '5+', label: 'Anos de Experiência' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display font-black text-3xl md:text-4xl text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
