
import React from 'react';
import Image from 'next/image';
import { speakers, speakerinfo } from '../database/data';

const Intervenant: React.FC = () => {
  const [item] = speakerinfo
  return (
    <div className='bg-gray-100  px-4'>
      <div className=' pt-10 md:pt-36'>
        <h1 className='text-center font-oswald font-bold text-5xl text-violet-900'>{item.speakertext1} </h1>
        <h1 className='text-center font-oswald font-bold md:pt-8 text-5xl text-violet-900'>{item.speakertext2}</h1>
        <div className=' md:w-1/2 mx-auto'>
          <p className='text-center font-thin pt-6'>
            {item.speakertext}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 pt-8 md:grid-cols-3  gap-4'>
        {speakers.map((speaker, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='flex-grow w-full flex justify-center'>
              <Image
                className='aspect-square'
                src={speaker.image}
                width={309}
                height={200}
                alt={speaker.nom}
              />
            </div>

            <footer className='bg-white w-[309px] text-center py-4 mx-auto'>
              <h1 className='text-violet-400 font-oswald font-bold text-2xl'>{speaker.nom}</h1>
              <p className='pt-2 font-thin'>{speaker.role}</p>
            </footer>

          </div>
        ))}
      </div>

      <div className='relative flex justify-center pb-24'>
        <button className='bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center mt-20 md:mt-32'>
          <div className='bg-white h-6 w-1 mr-4'></div>
          {item.speakerappe}
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
};

export default Intervenant;
