const testimonials = [
  {
    text: "Antes de usar esse planner, eu estava completamente perdida… Agora sigo cada passo e tenho a sensação maravilhosa de que tudo está no controle!",
    author: "Amanda",
    location: "Curitiba"
  },
  {
    text: "Consegui economizar mais de R$2.000 só por ter controle do que estava pagando. Cada item ficou registrado e claro. O planner me salvou!",
    author: "Bruna",
    location: "São Paulo"
  },
  {
    text: "Montei o cronograma do meu grande dia com tanta confiança que parecia até que eu tinha uma equipe comigo. No fim, tudo saiu perfeito!",
    author: "Letícia",
    location: "Recife"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-olive-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Conheça algumas pessoas que usaram nosso planner de casamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-olive-700 mb-4 text-lg italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-olive-200 rounded-full flex items-center justify-center text-olive-800 font-bold text-xl">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-olive-800">{testimonial.author}</p>
                  <p className="text-olive-600 text-sm">Noiva de {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 