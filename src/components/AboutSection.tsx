import { useState, useEffect } from 'react';
import { Award, Users, Target, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Professor photos
import professorImage1 from '@/assets/professor-kelfit.png';
import professorImage2 from '@/assets/professor-2.jpeg';
import professorImage3 from '@/assets/professor-3.jpeg';
import professorImage4 from '@/assets/professor-4.jpeg';
import professorImage5 from '@/assets/professor-5.jpeg';

const professorPhotos = [
  { id: 1, image: professorImage1, alt: 'Kesley com troféu' },
  { id: 2, image: professorImage2, alt: 'Kesley em competição' },
  { id: 3, image: professorImage3, alt: 'Kesley no palco' },
  { id: 4, image: professorImage4, alt: 'Kesley no estádio' },
  { id: 5, image: professorImage5, alt: 'Kesley palestrando' },
];

const stats = [
  { icon: Users, value: '+500', label: 'Alunos Transformados' },
  { icon: Award, value: 'Top 2', label: 'Scalibu / Estreante / Mineiro' },
  { icon: Target, value: '8+', label: 'Anos de Experiência' },
  { icon: TrendingUp, value: 'Top 7', label: 'BopGames Profissional' },
];

const AboutSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % professorPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentPhoto((prev) => (prev - 1 + professorPhotos.length) % professorPhotos.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentPhoto((prev) => (prev + 1) % professorPhotos.length);
  };

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image Carousel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl" />
              
              {/* Main image carousel */}
              <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[3/4]">
                {professorPhotos.map((photo, index) => (
                  <img
                    key={photo.id}
                    src={photo.image}
                    alt={photo.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentPhoto ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Navigation arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border-border/50 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border-border/50 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {professorPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentPhoto(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentPhoto
                          ? 'bg-primary w-6'
                          : 'bg-foreground/30 hover:bg-foreground/50 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                <span className="font-display font-bold text-lg">Atleta Profissional</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4 block">
              SOBRE O PROFESSOR
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6">
              KESLEY - KEL<span className="text-primary">FIT</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-muted-foreground mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Atleta e Treinador com mais de <strong className="text-foreground">8 anos de experiência</strong> em
                transformação corporal e preparação para competições.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                <strong className="text-foreground">Conquistas:</strong><br />
                • Campeonato Scalibu TOP 2<br />
                • Campeonato Estreante TOP 2<br />
                • Campeonato Mineiro TOP 2<br />
                • BopGames Profissional TOP 7
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Especialista em <strong className="text-foreground">hipertrofia e definição muscular</strong>, 
                desenvolve protocolos individualizados baseados em ciência e experiência prática, garantindo resultados 
                reais para cada perfil de aluno.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Formado em Educação Física com especializações em treinamento de força, nutrição esportiva e 
                periodização avançada. Sua abordagem combina <strong className="text-foreground">análise técnica de 
                movimentos, acompanhamento nutricional</strong> e suporte contínuo para maximizar seus resultados.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 sm:mb-2" />
                  <p className="font-display font-black text-xl sm:text-2xl text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
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
