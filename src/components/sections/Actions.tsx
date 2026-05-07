export const Actions = () => {
  return (
    <section id="contacto" className="bg-primary text-white overflow-hidden">
      {/* Grid que se vuelve 1 columna en móvil y 3 en escritorio */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        {/* Botón 1: La Carta */}
        <button 
          onClick={() => window.open('https://wa.me/p/26101908632777160/5492914664777', '_blank')}
          className="group relative py-24 px-8 border-stone-800 border-b md:border-b-0 md:border-r transition-all duration-500 hover:bg-stone-900 overflow-hidden cursor-pointer"
        >
          {/* Efecto de fondo sutil al hacer hover */}
          <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            <span className="block text-xs tracking-[0.4em] text-stone-500 mb-4 uppercase group-hover:text-accent transition-colors">
              Explorar sabores
            </span>
            <h3 className="text-4xl font-serif mb-2">La Carta</h3>
            <p className="text-stone-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Ver platos y bebidas
            </p>
          </div>
        </button>

        {/* Botón 2: Reservas */}
        <button 
          onClick={() => window.open('https://wa.me/5492914664777?text=Hola%20Modesto!%20Quisiera%20hacer%20una%20reserva', '_blank')}
          className="group relative py-24 px-8 border-stone-800 border-b md:border-b-0 md:border-r transition-all duration-500 hover:bg-bodegon-rojo cursor-pointer"
        >
          <div className="relative z-10">
            <span className="block text-xs tracking-[0.4em] text-stone-300 mb-4 uppercase group-hover:text-white/80">
              Asegurá tu mesa
            </span>
            <h3 className="text-4xl font-serif mb-2">Reservar</h3>
           
            <p className="text-white/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              WhatsApp
            </p>
          </div>
        </button>

        {/* Botón 3: Pedido Ya */}
        <button 
          onClick={() => window.open('https://www.pedidosya.com.ar/restaurantes/bahia-blanca/el-modesto-5d6b3ab0-6853-419e-bba6-a5203b9f4e87-menu?origin=shop_list', '_blank')}
          className="group relative py-24 px-8 transition-all duration-500 hover:bg-[#E5243F] cursor-pointer"
        >
          <div className="relative z-10"> 
            <span className="block text-xs tracking-[0.4em] text-stone-500 mb-4 uppercase group-hover:text-white/80">
              En tu casa
            </span>
            <h3 className="text-4xl font-serif mb-2">Delivery</h3>
            <p className="text-white/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Pedir por PedidoYa
            </p>
          </div>
        </button>

      </div>

      {/* Footer minimalista de cierre */}
      <footer className="py-16 border-t border-stone-800 text-center space-y-4">
        <div className="flex justify-center gap-8 text-stone-500 text-sm uppercase tracking-widest mb-4">
          <a href="https://www.instagram.com/elmodestocomedor/" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.facebook.com/elmodestocomedor" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <p className="text-[10px] text-stone-600 uppercase tracking-[0.6em]">
          El Modesto • Casanova 383, Bahía Blanca • 2017
        </p>
      </footer> 
    </section>
  );
};

/* https://wa.me/5492914664777 */