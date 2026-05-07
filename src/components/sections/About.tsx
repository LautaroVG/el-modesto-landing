export const About = () => {
  return (
    <section id="nosotros" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-primary">El sabor de lo nuestro.</h2>
          <div className="w-20 h-1 bg-bodegon-rojo"></div>
           <p className="text-stone-600 leading-relaxed text-lg">
            En El Modesto abrazamos la tradición de la buena mesa argentina. Nacimos con la idea de combinar la calidad de los ingredientes y el cuidado de un restaurante, con el alma cálida y generosa del típico bodegón de barrio. Nuestras carnes al fuego, las pastas caseras y cada plato que llega a tu mesa están pensados para compartir y disfrutar sin apuros. Somos ese rincón donde lo clásico manda y la comida honesta es protagonista.
           </p>
        </div>

        
         <div className="relative h-100 -mb-32 z-30"> 
           <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
              className="absolute top-0 left-0 w-2/3 h-4/5 object-cover rounded-sm shadow-2xl z-20 border-8 border-white"
              alt="Equipo trabajando"
           />
           <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" 
              className="absolute bottom-0 right-0 w-2/3 h-4/5 object-cover rounded-sm shadow-xl z-10 border-8 border-white"
              alt="Evento en el local"
           />
        </div>
        
      </div>
      
    </section>
  );
};