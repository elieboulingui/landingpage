import Image from "next/image";
import React from 'react'
import { invitation} from '../database/data';
 const About: React.FC=()=> {
  return (
    <div className="flex flex-col items-center px-4 md:px-14 container mx-auto">
      <h1 className='text-violet-900 text-center text-5xl md:text-4xl pt-28 font-bold'>
      Vous êtes invité(e) à notre
      </h1>
      <h1 className="text-violet-900 text-center text-5xl md:text-4xl  font-bold"> Conférence </h1>
      <p className='text-center  font-thin md:text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus
        <br />
        id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
        <div className="flex justify-center items-center md:pb-20">
        <div>
        {invitation.map((invitation, index) => (
          <Image 
          className="pb-16" 
            key={index} 
            src={invitation.image} 
            width={278} 
            height={100} 
            alt={`Invitation ${index}`} 
          />
        ))}
      </div>
        </div>
        <div className="flex flex-col space-y-9 ">
          <p className="font-thin one w-96">
            Worem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
            similique cum consequuntur placeat
          </p>
          <div className="flex flex-col space-y-9 pt-4">
            <div className="flex items-start">
              <div className='bg-violet-800 w-5 h-12 mr-2'></div>
              <p className="font-thin   w-3/4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur 
              </p>
            </div>
            <div className="flex items-start pt-3">
              <div className='bg-violet-800 w-5 h-12 mr-2'></div>
              <p className="font-thin  w-3/4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur 
              </p>
            </div>
            <div className="flex items-start  ">
              <p className="font-thin w-3/4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur 
              </p>
            </div>
          </div>
          <div className="   px-8 py-12 flex">
            <button className="bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center">
              <div className='bg-white h-6 w-1 mr-4'></div>
              En savoir plus
              <div className='bg-white h-6 w-1 ml-4'></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;