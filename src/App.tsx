import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Featured } from './components/sections/Featured';
import { Actions } from './components/sections/Actions';



function App() {
  return (
    
    <main className="min-h-screen bg-bodegon-crema text-primary selection:bg-accent/20">
      
       <Hero />
     
      <About />
     
      <div className="h-24 bg-gradient-to-crema" />
     
      <Featured />
      
      <Actions />
    </main>
  );
}
export default App;
