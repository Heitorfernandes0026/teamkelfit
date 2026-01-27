import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Transformation photos
import transform1 from '@/assets/transformations/transform-1.jpeg';
import transform2 from '@/assets/transformations/transform-2.jpeg';
import transform3 from '@/assets/transformations/transform-3.jpeg';
import transform4 from '@/assets/transformations/transform-4.jpeg';
import transform5 from '@/assets/transformations/transform-5.jpeg';
import transform7 from '@/assets/transformations/transform-7.jpeg';
import testimonialVideo from '@/assets/transformations/testimonial-video.mp4';

const transformations = [
  { id: 1, image: transform1 },
  { id: 2, image: transform2 },
  { id: 3, image: transform3 },
  { id: 4, image: transform4 },
  { id: 5, image: transform5 },
  { id: 7, image: transform7 },
];

const testimonials = [
  {
    name: 'Rafael Mendes',
    role: 'Empresário',
    avatar: 'RM',
    text: 'Em 6 meses, perdi 15kg e ganhei massa muscular. Mudou minha vida!',
  },
  {
    name: 'Ana Paula Silva',
    role: 'Advogada',
    avatar: 'AS',
    text: 'Resultados incríveis com treinos de apenas 45 minutos. Recomendo!',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Médico',
    avatar: 'CE',
    text: 'A metodologia científica fez toda a diferença nos meus resultados.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest mb-3 block">RESULTADOS</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-3">
            HISTÓRIAS DE <span className="text-primary">SUCESSO</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Transformações reais dos nossos alunos.
          </p>
        </div>

        {/* Transformation Photos Gallery - Horizontal scroll on mobile */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-center text-lg md:text-xl font-display font-bold mb-6">
            Antes & Depois
          </h3>
          
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 md:overflow-visible">
            {transformations.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[45vw] md:w-auto snap-center cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt="Transformação"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-center text-lg md:text-xl font-display font-bold mb-6">
            Depoimento em Vídeo
          </h3>
          
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[9/16]">
              <video
                src={testimonialVideo}
                controls
                preload="metadata"
                className="w-full h-full object-contain bg-black"
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Text Testimonials - Simplified carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/30">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
            
            {/* Rating */}
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="text-base md:text-lg text-center leading-relaxed mb-6">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-bold text-primary text-sm">
                  {testimonials[currentIndex].avatar}
                </span>
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center touch-btn fast-transition hover:border-primary"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 w-2'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center touch-btn fast-transition hover:border-primary"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground text-4xl touch-btn"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Transformação ampliada"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
