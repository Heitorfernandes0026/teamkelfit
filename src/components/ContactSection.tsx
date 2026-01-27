import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria fitness Team KelFit.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Large glow - Reduced on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Box */}
          <div className="text-center p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary/20 bg-card/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative corners - Hidden on mobile */}
            <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-r-2 border-primary/50 rounded-br-2xl sm:rounded-br-3xl" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-5 sm:mb-6 md:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-primary font-medium tracking-wide">VAGAS LIMITADAS</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 md:mb-6">
              PRONTO PARA
              <br />
              <span className="text-gradient-orange">SUA TRANSFORMAÇÃO?</span>
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto">
              Fale com um de nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                FALAR NO WHATSAPP
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5 md:mt-6 text-muted-foreground text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              <span>(31) 99174-1310</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
