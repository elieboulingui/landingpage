'use client'
import Image from "next/image";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-start justify-between container mx-auto p-7  relative">
      <Image src={'/image/README.png'} width={120} height={10} alt="Logo" />
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-50 oswald p-2"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center absolute md:relative top-full md:top-0 right-0 md:right-auto mt-2 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="text-white text-xl oswald"> <a href="">À propos</a></li>
          <li className="text-white text-xl oswald"><a href="">Conférencier</a></li>
          <li className="text-white text-xl oswald"><a href="">Calendrier</a></li>
          <li>
            <button
              onClick={toggleMenu}
              className="bg-purple-800 text-xl oswald px-6 py-4 p-4 text-white flex justify-between items-center"
            >
              <div className='bg-white h-6 w-1  mr-2'></div>
                <a href=""> Buy Tickets</a>
              <div className='bg-white h-6 w-1  ml-2 '></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
