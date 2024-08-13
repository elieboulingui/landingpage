'use client'
import React, { useState } from 'react';
import  {day,knowmore} from "../database/data"
const Hero :React.FC = () => {
  const [deroule , seTderoule ]=useState<boolean>(false)
  const [item] = day;
  return (
    <div className='h-full w-full   p-6  '>
      <div className=''>
        <h1 className='text-6xl  font-bold text-white font-oswald'>
        {item.rencontre}
        </h1>
        <h1 className='text-6xl  font-bold text-white font-oswald'>{item.conference}</h1>
        <p className="  py-6 md:w-4/12 text-white font-inter ">
         {item.conferencetext}
        </p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.Descriptiondate}</h1>
            <p className="font-thin font-oswald text-lg">{item.decriptionjours}</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.hours}</h1>
            <p className="font-thin font-oswald text-lg">{item.decriptionheure}</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.minutes}</h1>
            <p className="font-thin font-oswald text-lg">{item.decriptionminute}</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.seconds}</h1>
            <p className="font-thin font-oswald text-lg">{item.decriptionsegond}</p>
          </div>
        </div>
      </div>
      <div className=" py-4 flex">
        <button onClick={()=> seTderoule(!deroule)} className="bg-purple-800 hover:bg-red-800 text-xl px-6 py-4 font-oswald text-white flex items-center">
          <div className='bg-white h-6 w-1 mr-4'></div>
          {item.ensavoirplus}
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
    
      </div>
      <div>
      {deroule && (
        <ul className='text-white font-osvald flex justify-between font-bold'>
          {knowmore.map((item, index) => (
            <li key={index}>
              {<div>{item.info1}</div>}
              {<div>{item.info2}</div>}
              {<div>{item.info3}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default Hero;
