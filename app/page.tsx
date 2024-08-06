'use client';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex flex-col">
      <div className="relative  bg-gray-700">
        <nav className="flex justify-between items-center p-4 relative">
          <a href="#" className="link-styled">Eivent</a>
          <div className="lg:hidden flex items-center z-10">
            <button onClick={toggleMenu} className="p-2 rounded-md custom-bg hover:bg-purple-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul className={`absolute top-16 right-0 bg-gray-700 lg:flex lg:space-x-6 lg:static lg:bg-transparent ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="text-lg font-medium text-white p-2 lg:p-0">About</li>
            <li className="text-lg font-medium text-white p-2 lg:p-0">Space</li>
            <li className="text-lg font-medium text-white p-2 lg:p-0">Contact</li>
            <button className="bg-white custom-bg py-1 px-4 rounded hover:bg-purple-100">
              BYU Tickets
            </button>
          </ul>
        </nav>
        <div className="w-full max-w-md pl-4 pb-6 md:pl-20 md:pb-11">
          <p className="text-white font-bold text-base md:text-lg">Meetup</p>
          <p className="text-white font-bold text-base md:text-lg">Conference</p>
          <p className="text-white font-bold text-base md:text-lg">Networking</p>
          <div className="pt-3">
            <p className="text-white text-sm md:text-base">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue principale d'une œuvre. Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-between pt-4">
            <div className="bg-white py-2 px-4 rounded text-center">
              <p className="text-2xl">365</p>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center">
              <p className="text-2xl">24</p>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center md:col-span-2">
              <p className="text-2xl">59</p>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="bg-white py-2 px-4 rounded text-center md:col-span-2 md:order-1">
              <p className="text-2xl">59</p>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="inline-flex items-center px-4 py-2 rounded-md text-purple-700 bg-white hover:bg-purple-100">
              I kNOW MORE
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full  flex flex-col justify-around">
          <div className="flex-grow flex items-center justify-center text-center pt-4">
            <div>
              <h1 className="text-black text-2xl  mb-4">
                You are invited to our <br /> Meetup Conference
              </h1>
              <p className="text-black text-sm">
                le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
                ne constituant pas l'intrigue principale d'une œuvre. <br />
                Ce terme est notamment utilisé dans le domaine des jeux vidéo.
              </p>
            </div>
          </div>
          <div className="flex justify-around p-4">
            <div className='w-full max-w-md pt-6 pl-4 md:pl-20 md:pb-11'>
              <img src='./image/téléchargement.jpeg' className='w-full h-auto md:h-96 md:max-w-full' />
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-md pl-4 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base link-styled">
                  We   are so excited to introduce to you our new Unbounce
                  Template called Conference. This Template is fully
                  responsive and CMS ready, no coding skills required!
                </p>
              </div>
              <div className='w-full max-w-md pl-4 pt-2 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « », est
                </p>
              </div>
              <div className='w-full max-w-md pl-4 pt-2 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « », est
                </p>
              </div>
              <div className='w-full max-w-md pl-4 md:pl-20 md:pb-11'>
                <p className="text-xs md:text-base link-styled">
                  W lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue
                </p>
              </div>
              <div className='flex justify-center pt-4 pr-10'>
                <button className="custom-bg text-white px-4 py-2 rounded hover:bg-purple-100">
                  BYU Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full custom-bg flex flex-col justify-around">
        <div className="flex-grow flex items-center justify-center text-center pt-4">
          <div>
            <h1 className="text-white text-2xl mb-4">
              You are invited to our <br /> Meetup Conference
            </h1>
            <p className="text-white text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
              ne constituant pas l'intrigue principale d'une œuvre. <br />
              Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
            <div className="pt-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-slate-50  pt-10 flex flex-col justify-around">
        <div className="flex-grow flex items-center justify-center text-center pt-4">
          <div>
            <h1 className="text-violet-700 text-2xl mb-4">
              You are invited to our <br /> Meetup Conference
            </h1>
            <p className="text-black text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
              ne constituant pas l'intrigue principale d'une œuvre. <br />
              Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>

          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="flex justify-around w-full">
          <div className='w-full max-w-md pt-6 pl-4 md:pl-20 md:pb-11'>
            <img src='./image/téléchargement.jpeg' className='w-full h-auto md:h-96 md:max-w-full' style={{ marginTop: '15px' }} />
            <div className="w-full text-left mt-2">
              <p>John Doe</p>
              <p>30 ans</p>
            </div>
          </div>
          <div className='w-full max-w-md pt-6 pl-4 md:pl-20 md:pb-11'>
            <img src='./image/téléchargement.jpeg' className='w-full h-auto md:h-96 md:max-w-full' style={{ marginTop: '15px' }} />
            <div className="w-full text-left mt-2">
              <p>John Doe</p>
              <p>30 ans</p>
            </div>
          </div>
          <div className='w-full max-w-md pt-6 pl-4 md:pl-20 md:pb-11'>
            <img src='./image/téléchargement.jpeg' className='w-full h-auto md:h-96 md:max-w-full' style={{ marginTop: '15px' }} />
            <div className="w-full text-left mt-2">
              <p>John Doe</p>
              <p>30 ans</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-4'>
          <button className="custom-bg text-white px-4 py-2 rounded hover:bg-purple-100">
            BYU Tickets
          </button>
        </div>
      </div>
      <div className="h-full custom-bg flex flex-col justify-around">
        <div className="flex-grow flex items-center justify-center text-center pt-4">
          <div>
            <h1 className="text-white text-2xl mb-4">
              Schuedule of Meeting<br />  Conference
            </h1>
            <p className="text-white text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
              ne constituant pas l'intrigue principale d'une œuvre. <br />
              Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
        </div>
        <div className="flex justify-around p-4">
          <div className='flex flex-col w-full max-w-7xl'>
            <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>
                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>
            <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>
                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>  <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>
                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>  <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>

                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>  <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>

                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>  <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>

                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>  <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8   text-white relative">23 <br /> May
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white top-full h-[20px] md:h-12"></span>

                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10 text-white">Lunch</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs md:text-base link-styled text-white pl-4">
                  Another exciting event description goes here. This is fully
                </p>
              </div>
            </div>

            <div className='pl-4 md:pl-20 md:pb-11 relative pt-5'>
              <div className="flex justify-between items-start">
                <span className="mr-8 text-white relative">24 <br /> May
                </span>
                <div className="flex flex-col justify-between items-start mr-4">
                  <p className="mr-10  text-white">Dinner</p>
                  <p className='text-white'>03:30 pm</p>
                </div>
                <p className="text-xs text-white md:text-base link-styled pl-4">
                  Join us for dinner and networking. This is fully responsive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full pb-10 bg-slate-50  pt-10 flex flex-col justify-around' >
        <div className='flex flex-row justify-center'>
          <div className='h-96 custom-bg w-96'>
            <div>
              <h1>Venue of meeting <br /> Conference </h1>
              <p className='text-white font-thin pt-5'>   Join us for dinner and networking. This is fully responsive</p>
            </div>
            <div className=' flex justify-center pt-10 pl-7 flex-col '>
              <h1 className=''>Location</h1>
              <p className='text-white font-thin '>   Join us for dinner and networking. This is fully responsive</p>
            </div>
            <div className=' flex justify-center pt-10 pl-7 flex-col '>
              <h1 className=''>Location</h1>
              <p className='text-white font-thin '>   Join us for dinner and networking. This is fully responsive</p>
            </div>
          </div>
          <div className='h-96 bg-white-800 w-96 flex flex-col'>
            <div className='pt-4'><img src="./image/téléchargement.jpeg" alt="" /></div>
            <div className='pt-20'><img src="./image/téléchargement.jpeg" alt="" /></div>
          </div>
        </div>
      </div>
      <div className='h-full custom-bg  pt-10 flex flex-col justify-around'>
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
          <div className='flex justify-center pt-4'>
            <button className="custom-bg  text-white px-4 py-2 rounded hover:bg-purple-100">
              BYU Tickets
            </button>
          </div>
        </div>
      </div>
      <div className='bg-slate-50 flex flex-col min-h-screen relative'>
 
  <div className='bg-red-700 flex-shrink-0'>
    <a href="https://www.google.fr/maps/preview" target="_blank" rel="noopener noreferrer">
      <img src="./image/map.avif" alt="Map" className="w-full max-h-80 object-cover" />
    </a>
  </div>


  <div className='absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-6'>

    <div className='custom-bg p-4 md:pb-16 shadow-lg max-w-md w-full'>
      <h1 className='text-lg font-semibold text-white'>Get in touch</h1>
      <div className='flex flex-col md:flex-row items-start'>
        <div className='w-full md:w-2 bg-gray-600 mb-4 md:mb-0 md:mr-4'></div>
        <div className='text-white'>
          <p className='text-sm pt-2 md:pt-4'>Lorem ipsum dolor, sit amet consectetur consequuntur <br /> repellendus ducimus magnam <br /> accusamus fugit vitae!</p>
          <p className='text-sm pt-2 md:pt-4'>Lorem ipsum dolor, sit amet consectetur consequuntur <br /> repellendus ducimus magnam <br /> accusamus fugit vitae!</p>
          <p className='text-sm pt-4 md:pt-8'>Lorem ipsum dolor, sit amet consectetur consequuntur accusamus fugit vitae!</p>
        </div>
      </div>
    </div>


    <div className='custom-bg p-4 md:p-7 shadow-lg max-w-md w-full'>
      <form>
        <h2 className='text-lg font-semibold mb-4 text-white'>Sign Up</h2>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-sm font-medium text-white'>Username</label>
          <input type='text' id='username' name='username' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm' />
        </div>
        <div className='mb-4'>
          <label htmlFor='signup-email' className='block text-sm font-medium text-white'>Email</label>
          <input type='email' id='signup-email' name='signup-email' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm' />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
          <input type='password' id='password' name='password' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm' />
        </div>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Sign Up</button>
      </form>
    </div>
  </div>


  <div className='bg-black h-96 flex-shrink-0'>
    <div className='flex items-center justify-center p-4'>

    </div>
  </div>

 -
  <div className='bg-black h-20 fixed bottom-0 w-full flex-shrink-0'>
    <div className='flex items-center justify-center h-full px-4'>
      <ul className="flex flex-wrap justify-center space-x-6 text-white text-sm md:text-lg">
        <li><a href="#" className='hover:underline'>Careers</a></li>
        <li><a href="#" className='hover:underline'>About</a></li>
        <li><a href="#" className='hover:underline'>Privacy</a></li>
        <li><a href="#" className='hover:underline'>Policy</a></li>
        <li><a href="#" className='hover:underline'>MobileApp</a></li>
        <li><a href="#" className='hover:underline'>Press</a></li>
      </ul>
    </div>
  </div>
</div>


    </main>
  );
}
