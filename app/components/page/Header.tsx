'use client'
import Image from "next/image";
import { useState } from 'react';
import { header } from "../database/data"; 
const Header = () => {
const [head]=header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-start justify-between container mx-auto p-7  relative">
     {head.image ? (
  <Image src={head.image} width={120} height={10} alt="Logo" />
) : (
  <div>No image available</div>
)}
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
        <ul className={`flex flex-col md:flex-row space-y-4 bg-yellow-200 md:bg-transparent md:space-y-0 md:space-x-8 items-center absolute md:relative top-full md:top-0 right-0 md:right-auto mt-2 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="text-white text-xl oswald"> <a href={head.link}>{head.a1}</a></li>
          <li className="text-white text-xl oswald"><a href={head.link}>{head.a2}</a></li>
          <li className="text-white text-xl oswald"><a href={head.link}>{head.a3}</a></li>
          <li>
            <button
              onClick={toggleMenu}
              className=" md:bg-purple-800 text-xl oswald px-6 py-4 p-4 text-white flex justify-between items-center"
            >
              <div className=' md:bg-white h-6 w-1  mr-2'></div>
                <a href={head.link}>{head.btn}</a>
              <div className='md:bg-white h-6 w-1  ml-2 '></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
