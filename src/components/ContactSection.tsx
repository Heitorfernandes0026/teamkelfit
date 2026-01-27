import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria fitness Team KelFit.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Box */}
          <div className="text-center p-8 md:p-16 rounded-3xl border border-primary/20 bg-card/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-3xl" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium tracking-wide">VAGAS LIMITADAS</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              PRONTO PARA
              <br />
              <span className="text-gradient-orange">SUA TRANSFORMAÇÃO?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Fale com um de nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-lg px-12 py-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                FALAR NO WHATSAPP
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(31) 99174-1310</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 p-8 md:p-12 rounded-2xl border border-border/30 bg-card/30">
            <h3 className="font-display font-bold text-2xl mb-2 text-center">Ou deixe seu contato</h3>
            <p className="text-muted-foreground text-center mb-8">Entraremos em contato em até 24 horas</p>
            
            <form className="space-y-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-5 py-4 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Qual seu principal objetivo fitness?"
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg tracking-wide"
              >
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
