import React from 'react';
import { video } from '../database/data'; 

export default function Minivideo() {
  const videoUrl = video[0]?.video;

  return (
    <div className='relative bg-violet-400 container mx-auto'>
      {/* Background Video */}
      <div className='absolute inset-0 overflow-hidden'>
        <video 
          src={videoUrl} 
          autoPlay 
          loop 
          muted 
          className='object-cover w-full h-full absolute top-0 left-0'
        />
      </div>

      {/* Content Over Video */}
      <div className='relative z-10 flex flex-col items-center justify-center h-screen text-center text-white'>
        <h1 className='text-5xl font-bold pt-28'>
        Découvrez notre vidéo de présentation
        </h1>
        <h1 className='text-5xl md:text-4xl pt-6 font-bold'>
        Conférences de rencontre
        </h1>
        <p className='pt-9 font-thin md:text-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam
          <br />
          id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.
        </p>
      </div>
    </div>
  );
}
