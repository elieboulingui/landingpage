import React from 'react';
import Formulaire from './Formulaire';
import {maps} from '../database/data'
import {Urls} from "../database/data"

export default function Maps() {
  const map= maps[0].url
  const lien = Urls[0].url
  return (
<div className='flex flex-col container mx-auto'>
<div>
      <a href={lien} target="_blank" rel="noopener noreferrer">
        <img src={map} alt="Map" style={{ width: '100%', height: '506px', display: 'block' }} />
      </a>
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
