import React from 'react';
import Image from 'next/image';
import { info } from '../database/data';

const Formulaire: React.FC = () => {
    const [form] = info;
    const defaultForm = form || {};

    return (
        <div className='absolute grid-cols-1 md:absolute pt-[330px] container w-full mx-auto px-4 md:px-20'>
            <div className='md:grid grid-flow-col justify-center'>
                <div className='hidden md:block bg-violet-500 px-20'>
                    <h1 className='text-white font-osvald font-bold text-5xl pt-10 pr-10'>Contactez-nous</h1>
                    <div className='pt-10 font-thin'>
                        <div className='bg-white w-1 h-20 absolute'></div>
                        <h1 className='text-white pl-6'>{defaultForm.ville}</h1>
                        <h1 className='text-white pl-6'>{defaultForm.quatier}</h1>
                        <h1 className='text-white pl-6'>{defaultForm.numeroderue}</h1>
                    </div>
                    <div className='pt-9 font-thin'>
                        <div className='bg-white w-1 h-12 absolute'></div>
                        <h1 className='text-white pl-6'>{defaultForm.contact1}</h1>
                        <h1 className='text-white pl-6'>{defaultForm.contact2}</h1>
                    </div>
                    <div className='pt-8 font-thin'>
                        <div className='bg-white w-1 h-12 absolute'></div>
                        <h1 className='text-white pl-6'>{defaultForm.email}</h1>
                        <h1 className='text-white pl-6'>{defaultForm.citeweb}</h1>
                    </div>
                </div>
                <div className='w-full bg-violet-400 p-8 pt-12 container mx-auto'>
                    <h1 className="pb-6 pr-10 font-oswald text-white flex items-center">
                        <div className='bg-white h-6 w-1 mr-2'></div>
                        Formulaire d'inscription
                        <div className='bg-white h-6 w-1 ml-2'></div>
                    </h1>
                    <div className='flex flex-col max-w-xl mx-auto'>
                        <label htmlFor='inputField' className='text-white font-bold'>Titre</label>
                        <input id='inputField' type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor='name' className='text-white'>Nom</label>
                        <input id='name' type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor='email' className='text-white'>Email</label>
                        <input id='email' type='email' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />

                        <label htmlFor='ticket' className='text-white'>Ticket</label>
                        <input id='ticket' type='text' className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500 mb-4 rounded-none' />
                    </div>
                    <div className="flex justify-arround  items-center flex-wrap ">
                        <Image src="/image/pay.png" className='p-3' width={46} height={50} alt="Pay" />
                        <Image src="/image/visa.png" width={46} className='p-3' height={50} alt="Visa" />
                        <Image src="/image/master.png" width={46} height={50} className='p-3' alt="MasterCard" />
                        <button className="bg-white  max-w-[600] min-w-[100]  text-xl md:px-2 py-2 font-oswald text-violet-400 flex items-center">
                            <div className='bg-violet-400 h-6 w-1 mr-4'></div>
                            Soumettre
                            <div className='bg-violet-400 h-6 w-1 ml-4'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;
