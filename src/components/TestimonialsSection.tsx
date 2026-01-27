import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkoutMarquee from './WorkoutMarquee';

// Transformation photos
import transform1 from '@/assets/transformations/transform-1.jpeg';
import transform2 from '@/assets/transformations/transform-2.jpeg';
import transform3 from '@/assets/transformations/transform-3.jpeg';
import transform4 from '@/assets/transformations/transform-4.jpeg';
import transform5 from '@/assets/transformations/transform-5.jpeg';
import transform6 from '@/assets/transformations/transform-6.jpeg';
import transform7 from '@/assets/transformations/transform-7.jpeg';
import transform8 from '@/assets/transformations/transform-8.jpeg';
import testimonialVideo from '@/assets/transformations/testimonial-video.mp4';

// Social proof photos
import socialProof1 from '@/assets/social-proof-1.jpeg';
import socialProof2 from '@/assets/social-proof-2.jpeg';
import socialProof3 from '@/assets/social-proof-3.jpeg';

const transformations = [
  { id: 1, image: transform1, name: 'Transformação 1', caption: 'Resultados em 3 meses de acompanhamento' },
  { id: 2, image: socialProof2, name: 'Acompanhamento Presencial', caption: 'Acompanhamento Personalizado Presencialmente' },
  { id: 3, image: transform2, name: 'Transformação 2', caption: 'Definição muscular e ganho de força' },
  { id: 4, image: transform3, name: 'Transformação 3', caption: 'Mudança completa de composição corporal' },
  { id: 5, image: transform4, name: 'Transformação 4', caption: 'Foco em hipertrofia e definição' },
  { id: 6, image: transform5, name: 'Transformação 5', caption: 'Evolução consistente com treino personalizado' },
  { id: 7, image: transform6, name: 'Transformação 6', caption: 'Resultados reais com metodologia científica' },
  { id: 8, image: transform7, name: 'Transformação 7', caption: 'Transformação física e mental' },
  { id: 9, image: transform8, name: 'Transformação 8', caption: 'Antes e depois - Compromisso e dedicação' },
];

const socialProofPhotos = [
  { id: 1, image: socialProof1, caption: 'Treino presencial com alunas' },
  { id: 2, image: socialProof2, caption: 'Correção de execução em tempo real' },
  { id: 3, image: socialProof3, caption: 'Intensidade e foco nos treinos' },
];

const testimonials = [
  {
    name: 'Rafael Mendes',
    role: 'Empresário',
    avatar: 'RM',
    rating: 5,
    text: 'Em 6 meses, perdi 15kg e ganhei massa muscular. O suporte do Team KelFit é incomparável. Mudou minha vida completamente!',
  },
  {
    name: 'Ana Paula Silva',
    role: 'Advogada',
    avatar: 'AS',
    rating: 5,
    text: 'Finalmente encontrei uma consultoria que entende minha rotina corrida. Resultados incríveis com treinos de apenas 45 minutos.',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Médico',
    avatar: 'CE',
    rating: 5,
    text: 'A metodologia científica e o acompanhamento nutricional fizeram toda a diferença. Recomendo a todos que buscam excelência.',
  },
  {
    name: 'Juliana Costa',
    role: 'Atleta Amadora',
    avatar: 'JC',
    rating: 5,
    text: 'Preparação perfeita para minha primeira competição. O suporte 24h me deu confiança para alcançar o pódio!',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm font-bold tracking-widest mb-3 md:mb-4 block">DEPOIMENTOS</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
            HISTÓRIAS DE <span className="text-gradient-orange">SUCESSO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Veja o que nossos alunos têm a dizer sobre a experiência com o Team KelFit.
          </p>
        </div>

        {/* Transformation Photos Gallery */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-center text-xl md:text-2xl font-display font-bold mb-6 md:mb-8">
            Transformações <span className="text-primary">Reais</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
            {transformations.map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer overflow-hidden rounded-lg md:rounded-xl aspect-[3/4] bg-muted group"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 md:p-4">
                  <p className="text-foreground text-xs md:text-sm font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-center text-xl md:text-2xl font-display font-bold mb-6 md:mb-8">
            Acompanhamento <span className="text-primary">Presencial</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {socialProofPhotos.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/5] bg-muted group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-foreground text-sm md:text-base font-medium text-center">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section - Separate */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-center text-xl md:text-2xl font-display font-bold mb-6 md:mb-8">
            Depoimento em <span className="text-primary">Vídeo</span>
          </h3>
          
          <div className="max-w-lg md:max-w-2xl mx-auto">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black aspect-[9/16] md:aspect-video border-4 border-primary shadow-[0_0_30px_hsl(4_82%_56%_/_0.4)]">
              <video
                src={testimonialVideo}
                controls
                preload="metadata"
                className="w-full h-full object-contain"
              >
                Seu navegador não suporta vídeos.
              </video>
              {/* Play indicator overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-3">Clique para reproduzir o vídeo</p>
          </div>
        </div>

        {/* Text Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-display font-bold mb-6 md:mb-8">
            O que nossos alunos <span className="text-primary">dizem</span>
          </h3>
          
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl bg-background border border-border/30">
              {/* Quote icon - Hidden on mobile */}
              <Quote className="hidden md:block absolute top-8 left-8 w-16 h-16 text-primary/10" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6 md:mb-8 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base md:text-xl lg:text-2xl text-center leading-relaxed mb-6 md:mb-10 font-light">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <span className="font-display font-bold text-primary text-sm md:text-lg">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold text-base md:text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2 md:gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-6 md:w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Marquee */}
      <div className="mt-16 md:mt-20">
        <WorkoutMarquee />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Transformação ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
