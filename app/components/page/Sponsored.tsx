import React from 'react';
import Image from 'next/image';
import { image,lienweb } from '../database/data';


const Sponsored: React.FC = () => {
  const getUrl = (index: number): string | undefined => {
    const link = lienweb[index];
    if (link) {
      return link.lien || link.google || link.github || link.youtube;
    }
    return undefined;
  };
  return (
    <div className='h-full custom-bg pt-16 flex flex-col justify-between bg-violet-500 container mx-auto px-4'>
      <div className="flex-grow flex items-center justify-center text-center pt-4">
        <div>
          <h1 className="text-white font-oswald font-bold text-3xl md:text-4xl mb-4">
            Sponsored of Meetup<br /> Conference
          </h1>
          <p className="text-center text-white pt-6 font-thin text-base md:text-lg pb-12">
            le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
            ne constituant pas l'intrigue principale d'une œuvre.
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {image.map((img, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                index % 4 < 3 ? 'md:border-r md:border-gray-300' : ''
              } ${
                index >= 4 ? 'md:border-t md:border-gray-300' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                <a href={getUrl(index)} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img.src}
                  width={150}
                  height={150}
                  className='object-contain'
                  alt={img.alt}
                />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-10 pb-20">
        <button className="text-xl bg-white px-6 py-4 font-oswald text-violet-400 flex items-center mt-12">
          <div className='bg-purple-800 h-6 w-1 mr-4'></div>
          Call For Speaker
          <div className='bg-purple-800 h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
};

export default Sponsored;
