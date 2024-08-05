'use client';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex flex-col">
      <div className="relative  bg-gray-700">
        <nav className="flex justify-between items-center p-4 relative">
          <a href="#" className="link-styled">Eivent</a>
          <div className="lg:hidden flex items-center z-10">
            <button onClick={toggleMenu} className="p-2 rounded-md text-purple-700 hover:bg-purple-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul className={`absolute top-16 right-0 bg-gray-700 lg:flex lg:space-x-6 lg:static lg:bg-transparent ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="text-lg font-medium text-white p-2 lg:p-0">About</li>
            <li className="text-lg font-medium text-white p-2 lg:p-0">Space</li>
            <li className="text-lg font-medium text-white p-2 lg:p-0">Contact</li>
            <button className="bg-white text-purple-700 py-1 px-4 rounded hover:bg-purple-100">
              BYU Tickets
            </button>
          </ul>
        </nav>
        <div className="w-full max-w-md pl-4 pb-6 md:pl-20 md:pb-11">
          <p className="text-white font-bold text-base md:text-lg">Meetup</p>
          <p className="text-white font-bold text-base md:text-lg">Conference</p>
          <p className="text-white font-bold text-base md:text-lg">Networking</p>
          <div className="pt-3">
            <p className="text-white text-sm md:text-base">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue principale d'une œuvre. Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-between pt-4">
            <div className="bg-white py-2 px-4 rounded text-center">
              <p className="text-2xl">365</p>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center">
              <p className="text-2xl">24</p>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center md:col-span-2">
              <p className="text-2xl">59</p>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center md:col-span-2 md:order-1">
              <p className="text-2xl">59</p>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="inline-flex items-center px-4 py-2 rounded-md text-purple-700 bg-white hover:bg-purple-100">
              I kNOW MORE
            </button>

          </div>
        </div>
      </div>
      <div>
        <div className="h-full  flex flex-col justify-around">

          <div className="flex-grow flex items-center justify-center text-center pt-4">
            <div>
              <h1 className="text-black text-2xl  mb-4">
                You are invited to our <br /> Meetup Conference
              </h1>
              <p className="text-black text-sm">
                le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
                ne constituant pas l'intrigue principale d'une œuvre. <br />
                Ce terme est notamment utilisé dans le domaine des jeux vidéo.
              </p>
            </div>
          </div>


          <div className="flex justify-around p-4">
            <div className='w-full max-w-md pt-6 pl-4 md:pl-20 md:pb-11'>
              <img src='./image/téléchargement.jpeg' className='w-full h-auto md:h-96 md:max-w-full' />
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-md pl-4 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base link-styled">
               We   are so excited to introduce to you our new Unbounce
Template called Conference. This Template is fully
responsive and CMS ready, no coding skills required!
                </p>
              </div>

              <div className='w-full max-w-md pl-4 pt-2 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « », est
                </p>
              </div>

              <div className='w-full max-w-md pl-4 pt-2 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « », est
                </p>
              </div>

              <div className='w-full max-w-md pl-4 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base link-styled">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue
                </p>
              </div>

              <div className='flex justify-center pt-4 pr-10'>
                <button className="bg-violet-400 text-white px-4 py-2 rounded hover:bg-purple-100">
                  BYU Tickets
                </button>
              </div>
            </div>

          </div></div>
      </div>
    
      <div className="h-full bg-violet-600 flex flex-col justify-around">
  <div className="flex-grow flex items-center justify-center text-center pt-4">
    <div>
      <h1 className="text-white text-2xl mb-4">
        You are invited to our <br /> Meetup Conference
      </h1>
      <p className="text-white text-sm">
        le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
        ne constituant pas l'intrigue principale d'une œuvre. <br />
        Ce terme est notamment utilisé dans le domaine des jeux vidéo.
      </p>
      <div className="pt-4 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
        </svg>
      </div>
    </div>
  </div>
</div>



    </main>


  );
}
