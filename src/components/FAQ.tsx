"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "Preciso ter experiência com planilhas ou aplicativos?",
    answer: "Não! Tudo é super intuitivo. Foi feito exatamente para noivas que querem praticidade, mesmo sem experiência com tecnologia."
  },
  {
    question: "Funciona no celular?",
    answer: "Sim! É 100% compatível com celular, tablet e computador. Você pode usar no navegador ou salvar como atalho na tela inicial."
  },
  {
    question: "Posso começar mesmo se meu casamento estiver longe?",
    answer: "Sim! O planner te guia mês a mês. Quanto antes começar, mais tranquila será sua jornada até o altar."
  },
  {
    question: "E se eu me arrepender?",
    answer: "Você tem 30 dias para testar. Se não gostar por qualquer motivo, devolvemos todo o seu dinheiro."
  },
  {
    question: "É realmente possível organizar o casamento sozinha?",
    answer: "Com certeza! Com o guia certo, você consegue organizar tudo com confiança e economia – e ainda se sentir realizada por ter feito tudo com suas próprias mãos."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-beige-50 py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-olive-600 text-center mb-8 md:mb-12 tracking-tight leading-[1.2]">
          FAQ – Perguntas Frequentes
        </h2>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-beige-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[15px] md:text-[16px] text-olive-600">
                  {faq.question}
                </span>
                <span className="text-xl md:text-2xl text-olive-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-6 py-3 md:py-4 bg-beige-50">
                  <p className="text-[14px] md:text-[15px] text-olive-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 