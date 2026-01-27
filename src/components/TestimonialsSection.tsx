import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block">DEPOIMENTOS</span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            HISTÓRIAS DE <span className="text-gradient-orange">SUCESSO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre a experiência com o Team KelFit.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-background border border-border/30">
              {/* Quote icon */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-8 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-center leading-relaxed mb-10 font-light">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <span className="font-display font-bold text-primary text-lg">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
