import React from 'react'
import Image from "next/image";

export default function Venu() {
  return (
    <div className='p-16'>
       <div className='grid grid-flow-col justify-center'>
        <div className= ' bg-violet-500 '>
            <h1 className='text-white font-osvald font-bold text-2xl pl-5 pt-5'> Venue O f Meeting  <br /> conference</h1>
            <p className='font-thin pl-7 pt-4   w-96 h1/4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!</p>

            <div className=' pt-14 pl-14 font-osvald'>
                <h1>Location</h1>
                <p className='font-thin w-96 pt-4 h1/4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!</p>
            </div>
            <div className=' pt-10 pl-14 font-osvald'>
                <h1 className='pt-5 font-osvald'>Accommodation</h1>
            <p className='font-thin  pt-4 h1/4  w-96 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!</p>
            </div>
        </div >
        <div className='w-full h-full'>
        <Image src={"/image/piece.avif"} width={200} height={700} alt="une image" /> 
        <Image src={"/image/piece.avif"} width={200} height={700} alt="une image" />
        </div>
       </div>
    </div>
  )
}
