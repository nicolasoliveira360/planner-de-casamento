"use client";

import Image from 'next/image';

const Hero = () => {
  const scrollToPrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-beige-50 to-beige-100 py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Badge Premium */}
        <div className="inline-flex items-center gap-2 bg-gold-100 text-olive-700 px-3 py-1.5 rounded-full mb-4 md:mb-6 text-sm font-medium">
          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></span>
          Planner Premium de Casamento
        </div>

        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-olive-800 mb-4 md:mb-6 leading-[1.2] tracking-tight">
          👰 Planeje o seu casamento dos sonhos
          <span className="block text-olive-600 mt-2">sozinha, do seu jeito e sem estresse!</span>
        </h1>

        <p className="text-[16px] md:text-[17px] lg:text-[18px] text-olive-700 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Com o nosso Planner de Casamento Digital, você organiza cada detalhe do seu grande 
          dia com clareza, controle e tranquilidade — sem precisar gastar com uma cerimonialista.
        </p>

        <div className="aspect-video w-full max-w-4xl mx-auto mb-8 md:mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-hover transition-all duration-300 hover:scale-[1.02]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FoQqnQOanMY"
            title="Planner de Casamento Digital"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={scrollToPrice}
            className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-olive-900 font-bold py-4 md:py-5 px-8 md:px-12 rounded-full text-[16px] md:text-[17px] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden group"
          >
            <span className="relative z-10">👉 Ver preço especial de lançamento!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Social Proof */}
          <p className="text-olive-500 flex items-center gap-2 text-[14px] md:text-[15px]">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Mais de 1.000 noivas já compraram</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 