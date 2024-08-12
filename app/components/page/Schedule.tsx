// Importez les tableaux de données
import React from 'react';
import { Descriptiondate, planing1, planing2, planing3, planing4, planing5 } from '../database/data';

const combinedPlaningData: Descriptiondate[] = [...planing1, ...planing2, ...planing3, ...planing4, ...planing5,];

function Schedule() {
    if (combinedPlaningData.length === 0) {
        return (
            <div className="h-full container mx-auto bg-violet-600 flex flex-col justify-between p-4">
                <div className="flex-grow   flex items-center justify-center text-center pt-4">
                    <div>
                        <h1 className="text-center font-oswald font-bold text-5xl mb-4">Calendrier de la réunion</h1>
                        <h2 className="text-white text-center font-oswald font-bold text-5xl">Conference</h2>
                        <p className="text-white py-5 text-sm">
                            No schedule data available.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const items = Array.from({ length: 5 }, (_, index) => combinedPlaningData[index % combinedPlaningData.length]);

    return (

        <div className="h-full w-full  bg-violet-600 p-4">
            <div className="flex-grow flex items-center justify-center text-center pt-4">
                <div>
                    <h1 className="text-white text-center pt-12 font-oswald font-bold text-5xl mb-4">Calendrier de la réunion</h1>
                    <h2 className="text-white text-center font-oswald font-bold text-5xl">réunion</h2>
                    <p className="text-white font-thin  py-5 ">
                        Le lore,emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
                        ne constituant pas l'intrigue principale d'une œuvre.
                    </p>
                </div>
            </div>

            
            <div className="flex flex-col justify-center items-center w-full py-8">
    <div className="w-4/5 flex flex-col space-y-4">
        {items.map((item, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row justify-between p-4 relative">
                {/* Colonne gauche : affichée sur tous les écrans */}
                <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
                    <p className="text-center font-bold text-3xl text-white">{item.jours}</p>
                    <p className="text-center text-white md:hidden">{item.moi}</p>
                </div>
                {/* Ligne de séparation */}
                <div className='absolute top-0 left-28 h-20 mt-20 border-l border-white transform -translate-x-1/2 hidden md:block'></div>
                {/* Colonne droite : affichée sur tous les écrans */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <p className="text-center font-bold text-xl text-white">{item.but}</p>
                    <p className="text-center text-white md:hidden">{item.heure}</p>
                </div>
                {/* Détails : visible uniquement sur écrans mobiles */}
                <div className="w-full flex items-start justify-center mt-4 md:mt-0">
                    <div className="w-2/3">
                        <p className="text-left text-white ">{item.detaille}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


        </div>

    );
}

export default Schedule;
