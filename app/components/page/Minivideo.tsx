import React from 'react';
import { video } from '../database/data';

export default function Minivideo() {
  const [videos]= video;
  const videoUrl = video[0]?.video;

  return (
    <div className='relative bg-violet-400 '>

      <div className="absolute w-full h-full  mx-auto">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      </div>


      <div className='relative z-10 flex flex-col items-center justify-center h-screen text-center text-white'>
        <h1 className='text-5xl font-bold pt-28'>
 {videos.videodescription}
        </h1>
        <h1 className='text-5xl md:text-4xl pt-6 font-bold'>
         {videos.videodescription2}
        </h1>
      <div className='w-1/2'>
      <p className='pt-9  font-thin md:text-lg'>
         {videos.videolorem}
        </p>
      </div>
      </div>
    </div>
  );
}