import { Sparkles, Headphones, FlaskConical, Trophy, Target, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const differentials = [
  {
    icon: Target,
    title: 'Personalização Total',
    description: 'Cada aspecto do seu programa é criado exclusivamente para você.',
  },
  {
    icon: Headphones,
    title: 'Suporte 24 Horas',
    description: 'Tire dúvidas e receba orientação a qualquer momento do dia.',
  },
  {
    icon: FlaskConical,
    title: 'Base Científica',
    description: 'Métodos comprovados por pesquisas atualizadas.',
  },
  {
    icon: Trophy,
    title: 'Resultados Reais',
    description: '+500 alunos transformados com resultados documentados.',
  },
  {
    icon: Sparkles,
    title: 'Evolução Semanal',
    description: 'Ajustes constantes para otimizar seu progresso.',
  },
  {
    icon: Zap,
    title: 'Método Eficiente',
    description: 'Máximos resultados com treinos objetivos e práticos.',
  },
];

const DifferentialsSection = () => {
  const { ref, visibleItems } = useScrollAnimation(differentials.length);

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block">DIFERENCIAIS</span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            POR QUE O <span className="text-gradient-orange">TEAM KELFIT?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <p className="text-muted-foreground max-w-xl">
              O que nos torna a escolha número 1 para quem busca resultados reais.
            </p>
            <div className="w-12 h-px bg-primary" />
          </div>
        </div>

        {/* Differentials Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 rounded-xl border border-border/30 bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-20 p-8 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Alunos Transformados' },
              { value: '98%', label: 'Taxa de Satisfação' },
              { value: '24/7', label: 'Suporte Disponível' },
              { value: '5+', label: 'Anos de Experiência' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
