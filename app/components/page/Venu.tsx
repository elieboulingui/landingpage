import React from 'react';
import Image from 'next/image';
import { invitation } from '../database/data';
import { video } from '../database/data'; 

export default function Venu() {
  // Extract the first video URL (or handle multiple videos as needed)
  const videoUrl = video[0]?.video;

  return (
    <div className='flex flex-col gap-4 p-6 md:p-24 container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-violet-500 px-10 py-12'>
          <h1 className='text-white font-osvald font-bold pl-5 text-4xl mb-4'>
            Venue Of Meeting
          </h1>
          <h1 className='text-white font-osvald font-bold text-4xl pl-5 mb-7'>
            Conference
          </h1>
          <p className='font-thin text-white mb-6 w-80 pl-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio.
          </p>
          <div className='mb-8 ml-16 pt-16'>
            <h2 className='text-white pl-14 font-osvald text-2xl mb-2'>Location</h2>
            <p className='font-thin text-white pl-14 w-4/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!
            </p>
          </div>
          <div className='mb-8 ml-16 pt-7 pb-10'>
            <h2 className='text-white pl-14 text-2xl mb-2'>Accommodation</h2>
            <p className='font-thin pl-14 text-white w-4/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-black p-8'>
          <div className='relative w-full max-w-md h-64'>
            {/* Ensure `videoUrl` is a valid string */}
            {videoUrl ? (
              <video 
                src={videoUrl} 
                autoPlay 
                loop 
                muted 
                className='object-cover w-full h-full'
                
              />
            ) : (
              <p className='text-white'>No video available</p>
            )}
          </div>
          <div className='mt-8'>
            {invitation.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                width={330}
                height={300}
                alt={`Invitation ${index}`}
                className='h-96 object-cover'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
