import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria fitness Team KelFit.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            PRONTO PARA <span className="text-gradient-orange">MUDAR SUA VIDA?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Fale conosco e comece sua jornada fitness hoje mesmo. Estamos prontos para guiar você até o seu objetivo.
          </p>

          {/* Main CTA */}
          <div className="mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-lg px-10 py-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                FALE COM UM ESPECIALISTA VIA WHATSAPP
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <p className="text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              (31) 99174-1310
            </p>
          </div>

          {/* Alternative contact */}
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl mb-6">
              Ou deixe seu contato que ligamos para você
            </h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="tel"
                placeholder="Seu telefone"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Conte-nos sobre seus objetivos..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 glow-orange"
              >
                <Mail className="w-5 h-5 mr-2" />
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
