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
    <main style={{
      margin: 0,
      padding: 0,
      overflowX: 'hidden', /* Évite le scroll horizontal */
      width: '100vw', /* Assure que le conteneur occupe toute la largeur de l'écran */
    }}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%', /* Assure que l'image de fond couvre toute la largeur */
          overflowX: 'hidden', /* Évite le scroll horizontal */
        }}
      > 
        <Header/>
        <Hero/>
      </div>
      <About/>
      <Minivideo/>
      <Intervenant/>
      <Schedule/>
      <Venu/>
      <Sponsored/>
      <Maps/>
    </main>
  );
}
