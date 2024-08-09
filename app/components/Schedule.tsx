import React from 'react';

const Schedule: React.FC = () => {
    return (
        <div className="h-full  container mx-auto bg-violet-600 flex flex-col justify-between p-4">
            <div className="flex-grow flex items-center justify-center text-center pt-4">
                <div>
                    <h1 className="text-white text-2xl mb-4">
                        Schedule of Meeting<br />Conference
                    </h1>
                    <p className="text-white   text-sm">
                        Le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction <br />
                        ne constituant pas l'intrigue principale d'une œuvre. <br />
                        Ce terme est notamment utilisé dans le domaine des jeux vidéo.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 space-y-14 ">
                {Array(6).fill(null).map((_, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start  p-4 rounded-lg shadow-lg w-full max-w-3xl">
                        <div className="relative flex flex-col pr-4 md:pr-10 justify-between mr-4 w-[78px] h-[43px]">
                            <span className="text-lg md:text-4xl text-white">26</span>
                            <p className="text-xs text-white md:text-xl   absolute pt-11" >May</p>
                            <p className="text-xs text-white md:text-xl   absolute ml-20 pt-3" >May</p>
                            <p className='text-xs text-white  md:text  absolute ml-20 pt-11'>08:30 AM</p>
                            <div className="absolute bottom-0 left-0 pl-4 md:pl-14">
                            </div>
                        </div>
                        <div className="flex-grow pl-44">
                            <p className="text-white text-sm md:text-xs ml-0 md:ml-12 px-24 py-3">
                                We are so excited to introduce to you our new Unbounce
                                Template called Conference. This Template is fully responsive
                                and CMS ready, no coding skills required!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Schedule;