'use client';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex flex-col">
      <div className="relative h-full bg-gray-700">
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
        <div className="w-96 pl-20 pb-11">
          <p className="text-white font-bold">Meetup</p>
          <p className="text-white font-bold">Conference</p>
          <p className="text-white font-bold">Networking</p>
          <div className="pt-3">
            <p className="text-white text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue principale d'une œuvre. Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
          <div className="flex flex-row justify-between pt-4">
            <div className="bg-white py-1 px-4 rounded">
              <p className="text-2xl">365</p>
              <span>Days</span>
            </div>
            <div className="bg-white py-1 px-4 rounded">
              <p className="text-2xl">24</p>
              <span>Hours</span>
            </div>
            <div className="bg-white py-1 px-4 rounded">
              <p className="text-2xl">59</p>
              <span>Minutes</span>
            </div>
            <div className="bg-white py-1 px-4 rounded">
              <p className="text-2xl">59</p>
              <span>Seconds</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="bg-white text-purple-700 py-1 px-4 rounded hover:bg-purple-100">
              I kNOW MORE
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full bg-red-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-2xl mb-4">
              You are invited to our <br /> Meetup Conference
            </h1>
            <p className="text-white text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
              ne constituant pas l'intrigue principale d'une œuvre. <br />
              Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
