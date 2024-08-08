import React from 'react';
import Formulaire from './Formulaire';

export default function Maps() {
  return (
<div className='flex flex-col'>
  <div>
    <img src="/image/map.jpg" alt="Map" style={{ width: '100%', height: '300px' }} />
  </div>
  <Formulaire/>
 <div className='pt-96 bg-black'>
  <div className='bg-black p-4 pl-3'>
    <ul className='flex justify-center gap-6 text-white font-bold  w-8/12 ml-60'>
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
