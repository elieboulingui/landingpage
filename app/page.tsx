import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intervenant from "./components/Intervenant";
import Maps from "./components/Maps";
import Minivideo from "./components/Minivideo";
import Sponsored from "./components/Sponsored";
import Venu from "./components/Venu";

export default function Home() {
  return (
    <main className="container  mx-auto "  >
      <div  style={{ backgroundImage: 'url("/image/one.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}> 
    <Header/>
    <Hero/>
    </div>
    <About/>
    <Minivideo/>
    <Intervenant/>
    < Venu/>
    <Sponsored/>
    <Maps/>
    </main>
  );
}