import React from 'react';
import  {day} from "./data"
const Hero = () => {
  const [item] = day;
  return (
    <div className='h-full w-full  p-16  container mx-auto'>
      <div className=''>
        <h1 className='text-6xl  font-bold text-white font-oswald'>
          Meetup <br /> Conference
        </h1>
        <p className="  py-6 md:w-4/12 text-white font-inter ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur cum explicabo tenetur recusandae, rerum ab fugit necessitatibus sint laborum illum nostrum quia distinctio amet tempora, placeat aspernatur quas perspiciatis debitis.
        </p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.days}</h1>
            <p className="font-thin font-oswald text-lg">DAYS</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.hours}</h1>
            <p className="font-thin font-oswald text-lg">HOURS</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.minutes}</h1>
            <p className="font-thin font-oswald text-lg">MINUTES</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{item.seconds}</h1>
            <p className="font-thin font-oswald text-lg">SECONDS</p>
          </div>
        </div>
      </div>
      <div className=" py-4 flex">
        <button className="bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center">
          <div className='bg-white h-6 w-1 mr-4'></div>
          Know More
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
