import React from 'react'
import Image from "next/image";

export default function Formulaire() {
    return (
        <div className='absolute pl-96 pt-10'>
            <div className='grid grid-flow-col justify-center'>
                <div className=' bg-violet-500 '>
                    <h1 className='text-white font-osvald font-bold text-2xl pl-5 pt-5'> Get In Touch </h1>
                    <p className='font-thin pl-7 pt-4   w-96 h1/4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!</p>

                    <div className='pt-9 font-thin pl-7 '>
                        <h1>985434342324</h1>
                        <h1>985434342324</h1>
                    </div>
                    <div className='pt-9 font-thin pl-7 '>
                        <h1>985434342324</h1>
                        <h1>985434342324</h1>
                    </div>
                </div >
                <div className='w-full bg-violet-500 p-8'>
  <h1 className="bg-purple-500 text-xl px-6 py-4 font-oswald text-white flex items-center">
    <div className='bg-white h-6 w-1 mr-4'></div>
    Know More
    <div className='bg-white h-6 w-1 ml-4'></div>
  </h1>
  <div className='flex flex-col max-w-xl mx-auto'>
    <label htmlFor='inputField' className='text-lg font-bold mb-2'>Titre :</label>
    <input id='inputField' type='text' className='border border-gray-300 p-2 w-96 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

    <label htmlFor="name" className='mb-2'>Nom :</label>
    <input id="name" type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

    <label htmlFor="email" className='mb-2'>Email :</label>
    <input id="email" type='email' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

    <label htmlFor="ticket" className='mb-2'>Ticket :</label>
    <input id="ticket" type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />
  </div>
</div>

            </div>
        </div>
    )
}
