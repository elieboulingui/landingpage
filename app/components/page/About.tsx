import Image from "next/image";
import React from 'react'
import { invitation } from '../database/data';
const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-14 ">
      <h1 className='text-violet-900 text-center text-5xl md:text-4xl pt-28 font-bold'>
        Vous êtes invité(e)s à notre
      </h1>
      <h1 className="text-violet-900 text-center text-5xl md:text-4xl pt-2  font-bold"> Conférence </h1>
      <p className='text-center  pt-4 font-thin md:text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus
        <br />
        id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
        <div className="flex justify-center items-center md:pb-20">
          <div>
            {invitation.map((invitation, index) => (
              <Image
                className=""
                key={index}
                src={invitation.image}
                width={299}
                height={80}
                alt={`Invitation ${index}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-9  space-x-20">

          <div className="flex flex-col  items-start space-y-9 pt-6 md:pt-16  space-x-10 ">
            <div className=" w-full  md:w-2/3    md:px-11">
              <p className="font-thin   one md:text-lg">
                Worem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur placeat
              </p>
            </div>


            <div className="flex items-start    md:w-3/4">
              <div className='bg-violet-800 w-2  space-x-10 h-12 mr-2'></div>

              <p className="font-thin  ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur
              </p>
            </div>
            <div className="flex items-start  pt-3 md:3/4 ">
              <div className='bg-violet-800 w-2 h-12 mr-2'></div>
              <p className="font-thin ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur
              </p>
            </div>
            <div className="flex items-start   md:w-3/4 ">
              <p className="font-thin ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis rem eius inventore consequatur numquam eligendi qui magnam magni atque
                similique cum consequuntur
              </p>
            </div>
            <div className=" relative  pb-6 pt-6 md:pb-24  md:py-16">
              <button className="bg-purple-800 text-xl md:px-6 px-2  py-4 font-oswald text-white flex items-center">
                <div className='bg-white h-6 w-1 mr-4'></div>
                En savoir plus
                <div className='bg-white h-6 w-1 ml-4'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;