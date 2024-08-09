import React from 'react';
import Formulaire from './Formulaire';

export default function Maps() {
  return (
<div className='flex flex-col container mx-auto'>
  <div>
    <img src="/image/map.jpeg" alt="Map"style={{ width: '100%', height: '506px' }}/>
  </div>
  <Formulaire />
 <div className='pt-96 bg-black container mx-auto'>
  <div className='bg-black p-4 '>
    <ul className='flex justify-center gap-6 text-white font-bold  '>
      <li>carrers</li>
      <li>About</li>
      <li>privacy</li>
      <li>police</li>
      <li>MobileApp</li>
      <li>Press</li>
    </ul>
    </div>
  </div>
</div>

  );
}
