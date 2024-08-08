import React from 'react'

export default function Sponsored() {
  return (
    <div className='h-full custom-bg  pt-10 flex flex-col justify-around bg-violet-400'>
    <div className="flex-grow flex items-center justify-center text-center pt-4">
      <div>
        <h1 className="text-white text-2xl mb-4">
          Sponsored of Meetup<br />  Conference
        </h1>
        <p className="text-white text-sm">
          le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
          ne constituant pas l'intrigue principale d'une œuvre.
        </p>
      </div>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center justify-center border-r border-b border-gray-300 p-4">
          <p>Icon 1</p>
        </div>
        <div className="flex items-center justify-center border-r border-b border-gray-300 p-4">
          <p>Icon 2</p>
        </div>
        <div className="flex items-center justify-center border-r border-b border-gray-300 p-4">
          <p>Icon 3</p>
        </div>
        <div className="flex items-center justify-center border-b p-4">
          <p>Icon 4</p>
        </div>
        <div className="flex items-center justify-center border-r border-gray-300 p-4">
          <p>Icon 5</p>
        </div>
        <div className="flex items-center justify-center border-r border-gray-300 p-4">
          <p>Icon 6</p>
        </div>
        <div className="flex items-center justify-center border-r border-gray-300 p-4">
          <p>Icon 7</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <p>Icon 8</p>
        </div>
      </div>
      <div className=" flex justify-center">
        <button className=" text-xl bg-white px-6 py-4 font-oswald text-violet-400 flex items-center mt-12">
          <div className='bg-purple-800 h-6 w-1 mr-4'></div>
          Call For Speaker
          <div className='bg-purple-800 h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  </div>
  )
}
