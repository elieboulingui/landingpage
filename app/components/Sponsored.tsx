import React from 'react'
import Image from "next/image";
export default function Sponsored() {
  return (
    <div className='h-full custom-bg  pt-16 flex flex-col justify-around bg-violet-500  container mx-auto'>
    <div className="flex-grow flex items-center justify-center text-center pt-4">
      <div>
        <h1 className="text-white font-osvald font-bold  text-4xl mb-4">
          Sponsored of Meetup<br />  Conference
        </h1>
        <p className="text-center text-white pt-9 font-thin md:text-lg pb-20">
          le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
          ne constituant pas l'intrigue principale d'une œuvre.
        </p>
      </div>
    </div>
    <div className="p-4   pr-28  pl-28 ">
      <div className="grid grid-cols-4">
        <div className="flex items-center justify-center border-r border-b border-gray-300 ">
          <Image src={"/image/ee1.png"} width={150} height={150} className='mb-6'  alt="une image"/>
        </div>
        <div className="flex items-center   justify-center border-r border-b border-gray-300">
        <Image src={"/image/e.png"} width={150} className='mb-6' height={150} alt="une image"/> 
        </div>
        <div className="flex items-center   justify-center border-r border-b border-gray-300 ">
        <Image src={"/image/ee3.png"} width={150} className='mb-6' height={150} alt="une image"/>
        </div>   
        <div className="flex items-center  justify-center border-b ">
        <Image src={"/image/ee41.png"}  className='mb-6'width={150} height={150} alt="une image"/> 
        </div>
        <div className="flex items-center  justify-center border-r  border-gray-300 ">
        <Image src={"/image/e.png"} width={150}   className='mt-8' height={150} alt="une image"/> 
        </div>
        <div className="flex items-center   justify-center border-r border-gray-300 ">
        <Image src={"/image/ee41.png"} className='mt-3' width={150} height={150} alt="une image"/> 
        </div>
        <div className="flex items-center  justify-center border-r border-gray-300 ">
        <Image src={"/image/ee1.png"}  className='mt-8' width={150} height={150} alt="une image"/>
        </div>
        <div className="flex items-center justify-center p-4">
        <Image src={"/image/ee32.png"}  className='mt-8'  width={150} height={150} alt="une image"/> 
        </div>
      </div>
      <div className=" flex justify-center pt-10 pb-20">
        <button className="  text-xl bg-white px-6 py-4 font-oswald text-violet-400 flex items-center mt-12">
          <div className='bg-purple-800 h-6 w-1 mr-4'></div>
          Call For Speaker
          <div className='bg-purple-800 h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  </div>
  )
}
