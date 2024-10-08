import React from 'react';
import Image from 'next/image';
import { invitation } from '../database/data';
import { video } from '../database/data';

export default function Venu() {
  const [item]=invitation;
  const videoUrl = video[0]?.video;

  return (
    <div className='flex flex-col gap-4 p-6 md:p-24 '>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='bg-violet-500 px-6 py-8 md:px-10 md:py-12'>
          <h1 className='text-white font-oswald font-bold text-3xl md:text-4xl mb-4'>
           {item.text1}
          </h1>
          <h1 className='text-white font-oswald font-bold text-3xl md:text-4xl mb-6'>
           {item.text2}
          </h1>
          <div className='mb-6 md:mb-8'>
          <p className='font-thin text-white pl-4 md:pl-5'>
          {item.textlorem}
          </p>
          </div>
          <div className='mb-6 md:mb-8'>
            <h2 className='text-white font-oswald text-xl md:text-2xl mb-2 pl-4 md:pl-5'>{item.location}</h2>
            <p className='font-thin text-white pl-4 md:pl-5'>
            {item.textlorem1}
            </p>
          </div>
          <div className='mb-6 md:mb-8'>
            <h2 className='text-white font-oswald text-xl md:text-2xl mb-2 pl-4 md:pl-5'>{item.Accommodation}</h2>
            <p className='font-thin text-white pl-4 md:pl-5'>
            {item.textlorem2}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-black p-6 md:p-8'>
          <div className='relative w-full max-w-md h-64 mb-8'>
            {videoUrl ? (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                className='object-cover w-full h-full'
              />
            ) : (
              <p className='text-white text-center'>{item.texterror}</p>
            )}
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            {invitation.map((item, index) => (
              <div key={index} className='w-full max-w-[530px]'>
                <Image
                  src={item.image}
                  width={3}
                  height={3}
                  alt={`Invitation ${index}`}
                  className='w-full h-64 aspect-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
