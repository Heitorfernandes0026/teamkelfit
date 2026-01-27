import { Award, Users, Target, TrendingUp } from 'lucide-react';
import professorImage from '@/assets/professor-kelfit.png';

const stats = [
  { icon: Users, value: '+500', label: 'Alunos Transformados' },
  { icon: Award, value: 'Top 2', label: 'Competição Nacional' },
  { icon: Target, value: '8+', label: 'Anos de Experiência' },
  { icon: TrendingUp, value: '98%', label: 'Taxa de Satisfação' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/30">
                <img
                  src={professorImage}
                  alt="Professor Kesly - Team KelFit"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                <span className="font-display font-bold text-lg">TOP 2 Nacional</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-bold tracking-widest mb-4 block">
              SOBRE O PROFESSOR
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              KESLY <span className="text-gradient-orange">SILVA</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Atleta e Personal Trainer com mais de <strong className="text-foreground">8 anos de experiência</strong> em 
                transformação corporal e preparação para competições. Conquistou o <strong className="text-foreground">Top 2 
                em competição nacional de fisiculturismo</strong>, comprovando na prática a eficácia da sua metodologia.
              </p>
              <p className="text-lg leading-relaxed">
                Especialista em <strong className="text-foreground">emagrecimento, hipertrofia e definição muscular</strong>, 
                desenvolve protocolos individualizados baseados em ciência e experiência prática, garantindo resultados 
                reais para cada perfil de aluno.
              </p>
              <p className="text-lg leading-relaxed">
                Formado em Educação Física com especializações em treinamento de força, nutrição esportiva e 
                periodização avançada. Sua abordagem combina <strong className="text-foreground">análise técnica de 
                movimentos, acompanhamento nutricional</strong> e suporte contínuo para maximizar seus resultados.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-display font-black text-2xl text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
