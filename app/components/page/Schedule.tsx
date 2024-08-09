import React from 'react';
import { Descriptiondate, planing } from '../database/data';

// Function to combine planing details into a single object
const combinePlaningData = (data: Descriptiondate[]): Descriptiondate => {
    return data.reduce((acc, item) => ({ ...acc, ...item }), {});
};

const Schedule: React.FC = () => {
    // Ensure planing is an array and contains at least one element
    if (planing.length === 0) {
        return (
            <div className="h-full container mx-auto bg-violet-600 flex flex-col justify-between p-4">
                <div className="flex-grow flex items-center justify-center text-center pt-4">
                    <div>
                        <h1 className="text-white text-2xl mb-4">Schedule of Meeting</h1>
                        <h2 className="text-white text-2xl">Conference</h2>
                        <p className="text-white py-5 text-sm">
                            No schedule data available.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Combine the planing data into a single object
    const combinedPlaningData = combinePlaningData(planing);

    return (
        <div className="h-full container mx-auto bg-violet-600 flex flex-col justify-between p-4">
            <div className="flex-grow flex items-center justify-center text-center pt-4">
                <div>
                    <h1 className="text-white text-2xl mb-4">Schedule of Meeting</h1>
                    <h2 className="text-white text-2xl">Conference</h2>
                    <p className="text-white py-5 text-sm">
                        Le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
                        ne constituant pas l'intrigue principale d'une œuvre. <br />
                        Ce terme est notamment utilisé dans le domaine des jeux vidéo.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 space-y-14">
                <div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div><div className="flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="relative flex flex-col items-center md:items-start pr-4 md:pr-10 w-full md:w-[78px]">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-lg md:text-4xl text-white">{combinedPlaningData.jours}</span>
                            <p className="text-xs text-white px-24 lg:block hidden  absolute md:text-xl ">{combinedPlaningData.but}</p>
                            <p className="text-lg  text-white">{combinedPlaningData.moi}</p>
                            <p className="text-xs lg:block hidden text-white px-24 py-9 absolute md:text-xl">{combinedPlaningData.heure}</p>
                        </div>
                    </div>

                    <div className="flex-grow pl-0 md:pl-44 pt-4 md:pt-0">
                        <p className="text-white text-lg md:text-sm px-4 md:px-24 py-3">
                            {combinedPlaningData.detaille}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
