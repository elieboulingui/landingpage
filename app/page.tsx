import About from "./components/page/About";
import Header from "./components/page/Header";
import Hero from "./components/page/Hero";
import Intervenant from "./components/page/Intervenant";
import Maps from "./components/page/Maps";
import Minivideo from "./components/page/Minivideo";
import Schedule from "./components/page/Schedule";
import Sponsored from "./components/page/Sponsored";
import Venu from "./components/page/Venu";
 import { backgroundImage } from "./components/database/data";
export default function Home() {
  return (
    <main>
      <div  style={{ backgroundImage: `url(${backgroundImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
    <Header/>
    <Hero/>
    </div>
    <About/>
    <Minivideo/>
    <Intervenant/>
    < Schedule/>
    < Venu/>
    <Sponsored/>
    <Maps/>
    </main>
  );
}