const benefits = [
  "✅ Checklist de 65 passos (planejamento mensal)",
  "✅ Planilha de orçamento com controle de gastos",
  "✅ Lista interativa de convidados com RSVP",
  "✅ Gerenciador completo de fornecedores",
  "✅ Calendário personalizado do grande dia",
  "🔐 Acesso vitalício + Atualizações futuras gratuitas",
  "📲 Compatível com celular, tablet e computador"
];

const guarantees = [
  {
    icon: "💰",
    title: "Garantia de 30 dias",
    description: "Se você não amar, devolvemos 100% do seu dinheiro. Simples assim."
  },
  {
    icon: "📱",
    title: "Acesso vitalício",
    description: "Use no seu celular, computador ou tablet, onde e quando quiser."
  },
  {
    icon: "♾️",
    title: "Atualizações grátis para sempre",
    description: "Compre uma vez e tenha acesso a todas as melhorias futuras sem pagar nada a mais."
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-olive-200 py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-olive-800 mb-8 md:mb-12 tracking-tight leading-[1.2]">
          Invista uma única vez, use para sempre
        </h2>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl">
          <h3 className="text-[22px] md:text-[24px] font-bold text-olive-600 mb-4">
            PLANNER DE CASAMENTO
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <span className="text-olive-400 text-[16px] line-through">R$ 97,00</span>
            <span className="text-[28px] md:text-[32px] font-bold text-olive-600">R$ 47,00</span>
          </div>

          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {benefits.map((benefit, index) => (
              <p key={index} className="text-[15px] md:text-[16px] text-olive-500">
                {benefit}
              </p>
            ))}
          </div>

          <a 
            href="https://pay.hotmart.com/P99156857X?off=qvo2krj2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-olive-900 font-bold py-4 px-8 md:px-10 rounded-full text-[16px] md:text-[17px] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform uppercase relative overflow-hidden group"
          >
            <span className="relative z-10">Comprar Agora!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="text-[32px] mb-2">{guarantee.icon}</div>
                <h4 className="font-semibold text-[15px] md:text-[16px] text-olive-600 mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-[14px] md:text-[15px] text-olive-500">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 