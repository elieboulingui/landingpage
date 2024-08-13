import React from 'react';
import Formulaire from './Formulaire';
import { maps ,footer} from '../database/data'
import { Urls } from "../database/data"

export default function Maps() {
  const [item] = footer;
  const map = maps[0].url
  const lien = Urls[0].url
  return (
    <div className='flex flex-col '>
      <div>
        <a href={lien} target="_blank" rel="noopener noreferrer">
          <img src={map} alt="Map" style={{ width: '100%', height: '506px', display: 'block' }} />
        </a>
      </div>
      <Formulaire />
      <div className='pt-96 bg-black '>
        <div className='bg-black p-4'>
          <ul className='flex flex-wrap justify-center gap-6 text-white font-bold'>
            <li className='flex-shrink-0'><a href="">{item.text1}</a></li>
            <li className='flex-shrink-0'><a href="">{item.text2}</a></li>
            <li className='flex-shrink-0'><a href="">{item.text3}</a></li>
            <li className='flex-shrink-0'><a href="">{item.text4}</a></li>
            <li className='flex-shrink-0'><a href="">{item.text5}</a></li>
            <li className='flex-shrink-0'><a href="">{item.text6}</a></li>
          </ul>
          <p className='text-white text-center py-5  md:text-center'>{item.text7}</p>
        </div>
      </div>
    </div>

  );
}
