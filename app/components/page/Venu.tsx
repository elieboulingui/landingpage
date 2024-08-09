import React from 'react'
import Image from "next/image";
import { invitation } from '../database/data';
import { image } from '../database/data';
export default function Venu() {
  return (
    <div className='flex flex-col gap-4 p-6 md:p-24 container mx-auto'>
      <div className=' grid grid-cols-1  md:grid-cols-2' >
        <div className='bg-violet-500 px-10 py-12 '>
          <h1 className='text-white font-osvald font-bold pl-5 text-4xl mb-4'>Venue Of Meeting</h1>
          <h1 className='text-white font-osvald font-bold text-4xl  pl-5  mb-7'> Conference</h1>
          <p className='font-thin  text-white mb-6 w-80 pl-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio
          </p>
          <div className='   mb-8 ml-16 pt-16'>
            <h2 className='text-white pl-14 font-osvald text-2xl mb-2'>Location</h2>
            <p className='font-thin text-white  pl-14 w-4/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!
            </p>
          </div>
          <div className='mb-8 ml-16 pt-7 pb-10 '>
            <h2 className='text-white  pl-14  text-2xl mb-2'>Accommodation</h2>
            <p className=' font-thin  pl-14 text-white w-4/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-black p-8'>
          <div className='bg-violet-600 p-6 rounded-full px-10 py-10 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12  text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.478-3.706a.5.5 0 00-.752.433v7.412a.5.5 0 00.752.433l6.478-3.706a.5.5 0 000-.866z" />
            </svg>
          </div>
          <div>
            {invitation.map((invitation, index) => (
              <Image
              className='h-96'
                key={index}
                src={invitation.image}
                width={330}
                height={300}
                alt={`Invitation ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

