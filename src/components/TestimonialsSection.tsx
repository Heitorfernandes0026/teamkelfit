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
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            HISTÓRIAS DE <span className="text-gradient-orange">SUCESSO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja quem já alcançou o objetivo com a Team KelFit.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
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
