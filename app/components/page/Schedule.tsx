// Importez les tableaux de données
import React from 'react'; 
import { Descriptiondate,activities, scheduleDescription, planing1, planing2, planing3, planing4, planing5} from '../database/data';

const combinedPlaningData: Descriptiondate[] = [...planing1, ...planing2, ...planing3, ...planing4, ...planing5,];

function Schedule() {
    const [iten]= activities;
    const [item] = scheduleDescription;
    if (combinedPlaningData.length === 0) {
        return (
            <div className="h-full container mx-auto bg-violet-600 flex flex-col justify-between p-4">
                <div className="flex-grow   flex items-center justify-center text-center pt-4">
                    <div>
                        <h1 className="text-center font-oswald font-bold text-5xl mb-4"> {item.h1}</h1>
                        <h2 className="text-white text-center font-oswald font-bold text-5xl"> {item.h2}</h2>
                        <p className="text-white py-5 text-sm">
                          {item.p}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const items = Array.from({ length: 5 }, (_, index) => combinedPlaningData[index % combinedPlaningData.length]);

    return (

        <div className="h-full w-full  bg-violet-600 px-10 py-10 ">
            <div className="flex-grow flex items-center justify-center text-center pt-4">
                <div>
                    <h1 className="text-white text-center pt-12 font-oswald font-bold text-5xl mb-4">{iten.jour}</h1>
                    <h2 className="text-white text-center font-oswald font-bold text-5xl"> {iten.titre}</h2>
                    <div className='md:w-1/2 mx-auto'>
                        <p className="text-white font-thin py-5 ">
                            {iten.description}
                        </p>
                    </div>

                </div>
            </div>


            <div className="flex flex-col justify-center items-center w-full md:pt-24 py-8">
      <div className="w-full md:w-4/5 flex flex-col space-y-4 relative">
        {activities.map((item, index) => (
          <div key={index} className="w-full flex flex-col md:flex-row justify-between p-4 relative">
            <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0 relative">
              <p className="text-center font-bold text-3xl text-white">{item.heureFin}</p>
              <p className="text-center text-white">{item.jour}</p>

              {index < 4 && (
                <div className="absolute h-32 mt-16 w-1 bg-white md:block hidden"></div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start relative">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-center md:text-start font-bold text-xl text-white">{item.titre}</p>
                <p className="text-center md:text-start font-thin text-white">{item.heureDebut} - {item.heureFin}</p>
                <p className="text-center md:text-start font-thin text-white">{item.animation}</p>
              </div>
            </div>

            <div className="w-full flex items-start justify-center mt-4 md:mt-0">
              <div className="md:w-1/2">
                <p className="text-left font-thin text-white">{item.description}</p>
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
