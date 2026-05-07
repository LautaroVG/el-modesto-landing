import { useState, useEffect } from 'react';

const images = [
  "/images/localgeneradoIa.png",
  "/images/cartelLocal.png",
  "/images/centrodelLocal.png"
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img src={img} alt="Restaurante" className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-7xl md:text-9xl font-serif text-primary tracking-tighter">
           El Modesto
        </h1>
        <p className="text-stone-600 text-xl font-light italic">Restaurante con corazon de Bodegon</p>
      </div>
    
    </section>
  );
};