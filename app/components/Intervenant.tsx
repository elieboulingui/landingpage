import React from 'react';
import Image from "next/image";

export default function Intervenant() {
  return (
    <div className='bg-gray-300'>
      <div className='pt-36'>
        <h1 className='text-center font-oswald font-bold text-3xl text-violet-500'>Speaker of Meeting <br /> Conference</h1>
        <p className='text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident eos facilis fugiat fugit sapiente ipsam. Itaque sunt facere distinctio praesentium ea, ipsum <br /> corporis doloribus laboriosam? Tenetur et alias cum.</p>
      </div>
      <div className='grid grid-cols-3 gap-7 pl-20 pr-20 pt-28'>
        <div>
          <Image src={"/image/piece.jpeg"} width={600} height={600} alt="une image" />
          <footer className='bg-white h-28'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-5 pl-7'>john Deo</h1>
            <p className='pt-5 pl-7'>CEO AT Company</p>
          </footer>
        </div>
        <div>
          <Image src={"/image/piece.jpeg"} width={600} height={600} alt="une image" />
          <footer className='bg-white h-28'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-5 pl-7'>john Deo</h1>
            <p className='pt-5 pl-7'>CEO AT Company</p>
          </footer>
        </div>
        <div>
          <Image src={"/image/piece.jpeg"} width={600} height={600} alt="une image" />
          <footer className='bg-white h-28'>
            <h1 className='text-violet-400 font-oswald font-bold text-2xl pt-5 pl-7'>john Deo</h1>
            <p className='pt-5 pl-7'>CEO AT Company</p>
          </footer>
        </div>
      </div>
      <div className=" flex justify-center">
        <button className="bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center mt-32">
          <div className='bg-white h-6 w-1 mr-4'></div>
          Call For Speaker
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
}
