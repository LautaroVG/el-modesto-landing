const featuredDishes = [
  {
    name: "Carne del Dia C/ Papas Volcan",
    img: "/images/bifeconpapas.jpg"
  },
  {
    name: "Seitan Remixado",
    img: "/images/seitanRemixado.jpg"
  },
  {
    name: "Ravioles C/ salsa Blanca",
    img: "/images/pastacasera.jpg"
  }
];

export const Featured = () => {
  return (
    <section id="destacados" className="py-24 px-8 bg-bodegon-crema relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4">Los elegidos de siempre</h2>
          <p className="text-stone-500 italic">Nuestras especialidades de la casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredDishes.map((dish, i) => (
            /* 1. Agregamos flex-col e items-center para centrar todo el bloque */
            <div key={i} className="group flex flex-col items-center">
              
              {/* 2. El Contorno: Agregué border-8 blanco y un anillo sutil de sombra */}
              <div className="overflow-hidden mb-6 shadow-xl border-12 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={dish.img} 
                  className="w-full h-400px object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  alt={dish.name}
                />
              </div>

              {/* 3. Centrado del texto: Quitamos el 'justify-between' que mandaba el precio a la punta */}
              <div className="text-center">
                <h3 className="text-2xl font-serif text-primary leading-tight">
                  {dish.name}
                </h3>
                {/* Podés agregar una línea decorativa abajo si querés */}
                <div className="w-8 h-1px bg-accent/40 mx-auto mt-3"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};