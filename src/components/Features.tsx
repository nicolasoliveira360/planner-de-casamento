import Image from 'next/image';

const features = [
  {
    title: "✅ Planejamento completo em 65 passos.​",
    description: "Você vai saber exatamente o que fazer em cada mês, desde os primeiros sonhos até o altar. São 65 passos detalhados para não esquecer nada e evitar surpresas.",
    image: "/img/1.png",
    highlight: "65 passos detalhados"
  },
  {
    title: "💰 Controle total do orçamento.",
    description: "Tenha controle real do seu dinheiro: registre o valor previsto, o que foi realmente gasto, se já pagou e para quem. Tudo em um só lugar, acessível com poucos cliques.",
    image: "/img/2.png",
    highlight: "Economize milhares de reais"
  },
  {
    title: "📝 Lista de convidados com confirmação de presença.​",
    description: "Cadastre os nomes um a um ou por família, acompanhe quem confirmou presença e tenha clareza no número final. Evite gastos desnecessários e garanta uma recepção perfeita.",
    image: "/img/3.png",
    highlight: "Organize todos os convidados"
  },
  {
    title: "📋 Gerenciamento de fornecedores.",
    description: "Organize todos os fornecedores por categoria, acompanhe orçamentos, contatos, endereços e o status de cada contratação. Esqueça as anotações soltas e ganhe praticidade.",
    image: "/img/4.png",
    highlight: "Gerencie todos os contratos"
  },
  {
    title: "🗓️ Calendário personalizado do grande dia.",
    description: "Crie o cronograma do seu casamento minuto a minuto: do momento que acordar até o fim da festa. Chega de dúvidas e ansiedade – seu dia será leve, lindo e sem atrasos.",
    image: "/img/5.png",
    highlight: "Cronograma minuto a minuto"
  }
];

const Features = () => {
  return (
    <section className="bg-beige-100 py-16 md:py-24 lg:py-32 px-4 relative">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-olive-800 mb-4 md:mb-6 lg:mb-8 tracking-tight leading-[1.2]">
            Conheça as funcionalidades
          </h2>
          <p className="text-base sm:text-[16px] md:text-[17px] lg:text-[18px] text-olive-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Tudo que você precisa para organizar seu casamento em um só lugar
          </p>
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              <div className="flex-1 text-left">
                {/* Badge de destaque */}
                <div className="inline-block bg-gold-100 text-olive-700 px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  {feature.highlight}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-olive-800 mb-3 md:mb-4 lg:mb-6 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[16px] lg:text-[17px] text-olive-600 leading-relaxed mb-6 md:mb-8 lg:mb-10">
                  {feature.description}
                </p>

                {/* Indicador de seção */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="w-8 md:w-12 lg:w-16 h-1 bg-olive-200 rounded-full"></div>
                  <span className="text-xs md:text-sm text-olive-400 font-medium">Funcionalidade {index + 1}/5</span>
                </div>
              </div>

              <div className="flex-1 group">
                <div className="relative bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl lg:rounded-[2rem] shadow-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={385}
                    className="rounded-xl md:rounded-2xl lg:rounded-[1.5rem]"
                  />
                  {/* Overlay de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 rounded-2xl md:rounded-3xl lg:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 