import Image from "next/image";
import React from 'react'
import { invitation, textinvitation } from '../database/data';
const About: React.FC = () => {
  const [text] = textinvitation;
 
  return (
    <div className="flex flex-col items-center px-4 md:px-14 ">
      <h1 className='text-violet-900 w-2/3 text-center text-5xl md:text-4xl pt-28 font-bold'>
        {text.textinvite}
      </h1>
      <h1 className="text-violet-900 text-center text-5xl md:text-4xl pt-2  font-bold"> {text.textinvite2} </h1>
      <p className='text-center  w-1/2  pt-4 font-thin md:text-lg'>
      {text.textlorem1}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
        <div className="flex justify-center items-center md:pb-20">
          <div className=" ">
            {invitation.map((invitation, index) => (
              <Image
                className=" pb-20"
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
               {text.textlorem2}
              </p>
            </div>


            <div className="flex items-start    md:w-3/4">
              <div className='bg-violet-800 w-2  space-x-10 h-12 mr-2'></div>

              <p className="font-thin  ">
               {text.textlorem3}
              </p>
            </div>
            <div className="flex items-start  pt-3 md:3/4 ">
              <div className='bg-violet-800 w-2 h-12 mr-2'></div>
              <p className="font-thin ">
               {text.textlorem4}
              </p>
            </div>
            <div className="flex items-start   md:w-3/4 ">
              <p className="font-thin ">
               {text.textlorem5}
              </p>
            </div>
            <div className=" relative  pb-6 pt-6 md:pb-24  md:py-16">
              <button className="bg-purple-800 text-xl md:px-6 px-2  py-4 font-oswald text-white flex items-center">
                <div className='bg-white h-6 w-1 mr-4'></div>
                {text.ensavoirplus}
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