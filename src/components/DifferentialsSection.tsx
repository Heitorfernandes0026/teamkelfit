import { Headphones, FlaskConical, Trophy, Target, Zap, Users } from 'lucide-react';

const differentials = [
  { icon: Target, title: 'Personalização Total', description: 'Treino exclusivo para você.' },
  { icon: Headphones, title: 'Suporte 24 Horas', description: 'Tire dúvidas a qualquer momento.' },
  { icon: FlaskConical, title: 'Base Científica', description: 'Métodos comprovados.' },
  { icon: Trophy, title: 'Resultados Reais', description: '+500 alunos transformados.' },
  { icon: Users, title: 'Comunidade VIP', description: 'Grupo exclusivo de alunos.' },
  { icon: Zap, title: 'Método Eficiente', description: 'Máximo resultado, menos tempo.' },
];

const DifferentialsSection = () => {
  return (
    <section id="resultados" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest mb-3 block">DIFERENCIAIS</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4">
            POR QUE O <span className="text-primary">TEAM KELFIT?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
            O que nos torna a escolha certa para sua transformação.
          </p>
        </div>

        {/* Differentials Grid - Mobile optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-4 md:p-6 rounded-xl border border-border/30 bg-card/30"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar - Simplified for mobile */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl border border-border/30 bg-card/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '500+', label: 'Alunos' },
              { value: '98%', label: 'Satisfação' },
              { value: '24/7', label: 'Suporte' },
              { value: '8+', label: 'Anos' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display font-black text-2xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
