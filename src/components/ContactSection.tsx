import { MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Quero começar minha transformação com o Team KelFit!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Main CTA Box */}
          <div className="text-center p-6 md:p-12 rounded-2xl border border-primary/20 bg-card/30">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-primary font-medium">VAGAS LIMITADAS</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-4">
              PRONTO PARA SUA
              <br />
              <span className="text-primary">TRANSFORMAÇÃO?</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md mx-auto">
              Fale agora com o Kesley e descubra o plano ideal para você.
            </p>

            {/* WhatsApp CTA - Main focus */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5C] active:bg-[#1da851] text-white font-bold text-base px-8 py-4 rounded-xl transition-colors touch-btn"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR NO WHATSAPP
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <p className="text-muted-foreground text-xs mt-4">
              (31) 99174-1310 • Resposta em até 2 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
