// Sponsored.tsx
import React from 'react';
import Image from 'next/image';
import { image } from './data';

const Sponsored: React.FC = () => {
  return (
    <div className='h-full custom-bg pt-16 flex flex-col justify-around bg-violet-500 container mx-auto'>
      <div className="flex-grow flex items-center justify-center text-center pt-4">
        <div>
          <h1 className="text-white font-osvald font-bold text-4xl mb-4">
            Sponsored of Meetup<br /> Conference
          </h1>
          <p className="text-center text-white pt-9 font-thin md:text-lg pb-20">
            le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
            ne constituant pas l'intrigue principale d'une œuvre.
          </p>
        </div>
      </div>
      <div className="p-4 pr-28 pl-28">
        <div className="grid grid-cols-4">
          {image.map((image, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${index % 4 < 3 ? 'border-r border-gray-300' : ''} ${index >= 4 ? 'border-t border-gray-300' : ''} `}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={image.src}
                  width={150}
                  height={150}
                  className='mb-6'
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10 pb-20">
          <button className="text-xl bg-white px-6 py-4 font-oswald text-violet-400 flex items-center mt-12">
            <div className='bg-purple-800 h-6 w-1 mr-4'></div>
            Call For Speaker
            <div className='bg-purple-800 h-6 w-1 ml-4'></div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sponsored;
