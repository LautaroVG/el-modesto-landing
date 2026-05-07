import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Featured } from './components/sections/Featured';
import { Actions } from './components/sections/Actions';



function App() {
  return (
    // Cambié bg-white por bg-bodegon-crema para que aplique tu nueva estética
    <main className="min-h-screen bg-bodegon-crema text-primary selection:bg-accent/20">
      {/* 1. Impacto Visual */ }  
       <Hero />
      {/* 2. La propuesta gastronómica */}
      <About />
      {/* Entre Nosotros y Destacados */}
      <div className="h-24 bg-gradient-to-crema" />
      {/* 3. Los platos destacados */}
      <Featured />
      {/*4. La botonera final */ }
      <Actions />
    </main>
  );
}
export default App;