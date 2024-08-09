import React from 'react'
import Image from "next/image";

export default function Formulaire() {
    return (
        <div className='  absolute grid-cols-1 md:absolute pt-[330px] w-full mx-auto px-4 md:px-20'>
            <div className='  md:grid grid-flow-col justify-center '>
                <div className='hidden md:block bg-violet-500 px-20'>
                    <h1 className='text-white font-osvald font-bold text-5xl relative  pt-10  pr-10'> Get In Touch </h1>
                    <div className='pt-10 font-thin '>
                    <div className='bg-white w-1 h-20 absolute'></div>
                    <h1 className='text-white pl-6 '>Abx city Mary Road</h1>
                    <h1 className='text-white pl-6 '>123 E Main St Portage</h1>
                    <h1 className='text-white pl-6 '>MI 12345-6779</h1>
                    </div>
                    <div className='pt-9 font-thin  '>
                        <div className='bg-white w-1 h-12 absolute '></div>
                        <h1 className='text-white pl-6'>+241 74 56 56 55</h1>
                        <h1 className='text-white pl-6'>+241 76 67 67 65 </h1>
                    </div>
                    <div className='pt-8 font-thin '>
                    <div className='bg-white w-1 h-12 absolute '></div>
                        <h1 className='text-white pl-6'>elie@gmail.com</h1>
                        <h1 className='text-white pl-6' >www.boulingui.com</h1>
                    </div>
                </div>
                <div className='w-full bg-violet-400 p-8 pr-8   pt-12 container mx-auto'>
                    <h1 className="  pb-6 pr-10 font-oswald text-white flex items-center">
                        <div className='bg-white h-6 w-1 mr-2'></div>
                        Register Form
                        <div className='bg-white h-6 w-1 ml-2'></div>
                    </h1>
                    <div className='flex flex-col max-w-xl mx-auto'>
                        <label htmlFor='inputField' className=' text-white font-bold'>Titre </label>
                        <input id='inputField' type='text' className='border  border-gray-300 p-2  focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor="name" className=' text-white'>Nom</label>
                        <input id="name" type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor="email" className=' text-white'>Email</label>
                        <input id="email" type='email' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor="ticket" className=' text-white'>Ticket</label>
                        <input id="ticket" type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />
                    </div>
                    <div className="flex justify-ar">
                        <Image src={"/image/pay.png"} width={50} height={50} alt="pa" />
                        <Image src={"/image/visa.png"} width={50} height={50} alt="visa" />
                        <Image src={"/image/master.png"} width={50} height={50} alt="master" />
                        <button className="bg-white text-xl px-2 py-2 font-oswald text-violet-400 flex items-center">
                            <div className='bg-violet-400 h-6 w-1 mr-4'></div>
                            Submit
                            <div className='bg-violet-400 h-6 w-1 ml-4'></div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
