import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const whatsappNumber = '5531991741310';
  const whatsappMessage = encodeURIComponent('Olá! Quero começar minha transformação com o Team KelFit!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed-cta-mobile md:hidden">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5C] active:bg-[#1da851] text-white font-bold text-base py-4 rounded-xl shadow-lg transition-colors touch-btn"
      >
        <MessageCircle className="w-5 h-5" />
        QUERO COMEÇAR AGORA
      </a>
    </div>
  );
};

export default FloatingCTA;
