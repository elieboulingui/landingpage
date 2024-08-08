import React from 'react'

export default function Minivideo() {
  return (
    <div className='bg-violet-400 relative'>
      <h1 className='text-center text-3xl md:text-4xl text-white font-bold pt-28'>
        Check Out Our Intro Video <br /> Meetup Conferences
      </h1>
      <p className='text-center text-white pt-9 font-thin md:text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam
        <br />
        id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.
      </p>
      <div className='pt-12 pb-24 inset-0 flex justify-center items-center'>
        <div className='bg-violet-600 p-6 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.478-3.706a.5.5 0 00-.752.433v7.412a.5.5 0 00.752.433l6.478-3.706a.5.5 0 000-.866z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
