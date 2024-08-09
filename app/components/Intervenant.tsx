import React from 'react';
import Image from "next/image";

export default function Intervenant() {
  return (
    <div className='bg-gray-100 container mx-auto'>
      <div className='pt-36'>
        <h1 className='text-center font-oswald font-bold text-5xl text-violet-900'>Speaker of Meeting </h1>
        <h1 className='text-center font-oswald font-bold pt-8 text-5xl text-violet-900'>Conference</h1>
        <p className='text-center font-thin pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident eos facilis fugiat fugit sapiente ipsam.  <br /> Itaque sunt facere distinctio praesentium ea, ipsum corporis doloribus laboriosam? Tenetur et alias cum.</p>
      </div>
      <div className=' grid grid-cols-1  pt-8 pl-24 md:grid-cols-3 gap-6 '>
        <div>
          <Image src={"/image/pro.jpeg"} width={400} height={20} alt="une image" />
          <footer className='md:bg-white h-24'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-4 pl-7'>john Deo</h1>
            <p className='pt-2 pl-7 font-thin'>CEO AT Company</p>
          </footer>
        </div>
        <div>
          <Image src={"/image/pro.jpeg"} width={400} height={20} alt="une image" />
          <footer className='   md:bg-white h-24'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-4 pl-7'>john Deo</h1>
            <p className='pt-2 pl-7 font-thin'>CEO AT Company</p>
          </footer>
        </div>
        <div>
          <Image src={"/image/pro.jpeg"} width={400} height={20} alt="une image" />
          <footer className='md:bg-white h-24'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-4 pl-7'>john Deo</h1>
            <p className='pt-2 pl-7 font-thin'>CEO AT Company</p>
          </footer>
        </div>
      </div>
      <div className=" relative pt- flex justify-center pb-32">
        <button className="bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center mt-32">
          <div className='bg-white h-6 w-1 mr-4'></div>
          Call For Speaker
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
}
