'use client'
import React, { useState, useEffect } from 'react';
import { day } from '../database/data';

const Hero = () => {
  // Fonction pour obtenir le temps restant du localStorage ou initialiser avec les données par défaut
  const getInitialTime = () => {
    const savedEndTime = localStorage.getItem('endTime');
    if (savedEndTime) {
      const endTime = JSON.parse(savedEndTime);
      const now = Date.now();
      const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));
      
      return {
        Descriptiondate: Math.floor(timeLeft / (24 * 60 * 60)),
        hours: Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((timeLeft % (60 * 60)) / 60),
        seconds: timeLeft % 60,
      };
    }

    // Si aucune donnée n'est présente, utiliser les valeurs par défaut
    return {
      Descriptiondate: day[0]?.Descriptiondate || 0,
      hours: day[0]?.hours || 0,
      minutes: day[0]?.minutes || 0,
      seconds: day[0]?.seconds || 0,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(getInitialTime);

  useEffect(() => {
    // Convertir le temps restant en secondes
    let totalSeconds =
      timeRemaining.Descriptiondate * 24 * 60 * 60 +
      timeRemaining.hours * 60 * 60 +
      timeRemaining.minutes * 60 +
      timeRemaining.seconds;

    // Stocker le temps cible dans le localStorage
    localStorage.setItem('endTime', JSON.stringify(Date.now() + totalSeconds * 1000));

    const updateTime = () => {
      const endTime = JSON.parse(localStorage.getItem('endTime') || '0');
      const now = Date.now();
      const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          Descriptiondate: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        localStorage.removeItem('endTime');
        return;
      }

      const days = Math.floor(timeLeft / (24 * 60 * 60));
      const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
      const seconds = timeLeft % 60;

      setTimeRemaining({
        Descriptiondate: days,
        hours,
        minutes,
        seconds,
      });
    };

    updateTime(); // Appel initial pour mettre à jour immédiatement

    const intervalId = setInterval(updateTime, 1000); // Mise à jour toutes les secondes

    return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
  }, []); // Effet s'exécute une seule fois au chargement

  return (
    <div className='h-full w-full p-16 container mx-auto'>
      <div>
        <h1 className='text-6xl font-bold text-white font-oswald'>
          Meetup <br /> Conference
        </h1>
        <p className="py-6 md:w-4/12 text-white font-inter">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur cum explicabo tenetur recusandae, rerum ab fugit necessitatibus sint laborum illum nostrum quia distinctio amet tempora, placeat aspernatur quas perspiciatis debitis.
        </p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{timeRemaining.Descriptiondate}</h1>
            <p className="font-thin font-oswald text-lg">DAYS</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{timeRemaining.hours}</h1>
            <p className="font-thin font-oswald text-lg">HOURS</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{timeRemaining.minutes}</h1>
            <p className="font-thin font-oswald text-lg">MINUTES</p>
          </div>
          <div className="px-6 py-5 bg-white rounded text-center font-bold">
            <h1 className="text-3xl font-oswald">{timeRemaining.seconds}</h1>
            <p className="font-thin font-oswald text-lg">SECONDS</p>
          </div>
        </div>
      </div>
      <div className="py-4 flex">
        <button className="bg-purple-800 text-xl px-6 py-4 font-oswald text-white flex items-center">
          <div className='bg-white h-6 w-1 mr-4'></div>
          Know More
          <div className='bg-white h-6 w-1 ml-4'></div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
