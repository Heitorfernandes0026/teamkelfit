import { useState } from 'react';
import { Award, Users, Target, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

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
  { icon: Users, value: '+500', label: 'Alunos' },
  { icon: Award, value: 'Top 2', label: 'Nacional' },
  { icon: Target, value: '8+', label: 'Anos' },
  { icon: TrendingUp, value: '98%', label: 'Satisfação' },
];

const AboutSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const goToPrevious = () => {
    setCurrentPhoto((prev) => (prev - 1 + professorPhotos.length) % professorPhotos.length);
  };

  const goToNext = () => {
    setCurrentPhoto((prev) => (prev + 1) % professorPhotos.length);
  };

  return (
    <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Carousel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {professorPhotos.map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.image}
                  alt={photo.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    index === currentPhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center touch-btn fast-transition hover:bg-background"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center touch-btn fast-transition hover:bg-background"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {professorPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentPhoto ? 'bg-primary w-6' : 'bg-foreground/40 w-2'
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                <span className="font-bold text-sm">TOP 2 Nacional</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-xs md:text-sm font-bold tracking-widest mb-3 block">
              SOBRE O PROFESSOR
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
              KESLEY - <span className="text-primary">KELFIT</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-muted-foreground mb-6 md:mb-8">
              <p className="text-sm sm:text-base leading-relaxed">
                Atleta e Personal Trainer com <strong className="text-foreground">+8 anos de experiência</strong> em 
                transformação corporal. <strong className="text-foreground">Top 2 em competição nacional</strong> de fisiculturismo.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Especialista em <strong className="text-foreground">emagrecimento, hipertrofia e definição</strong>. 
                Protocolos individualizados com base científica e acompanhamento constante.
              </p>
            </div>

            {/* Stats - Compact for mobile */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 md:p-4 rounded-xl bg-card/50 border border-border/30"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
                  <p className="font-display font-black text-lg md:text-2xl text-foreground">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</p>
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
