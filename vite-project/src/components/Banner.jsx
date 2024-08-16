import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Banner = ({ description, link, timeLeft, isVisible, onClose }) => {
  const [countdown, setCountdown] = useState(timeLeft);

  useEffect(() => {
    if (isVisible && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isVisible, countdown]);

  if (!isVisible || countdown <= 0) return null;

  return (
    <div className="relative p-8 bg-white shadow-slate-900 shadow-2xl max-w-xl mx-auto my-8 rounded-2xl text-center hover:scale-105 transition-transform duration-150 ease-in-out delay-100 ">
      {/* <Button onClick={onClose} /> */}
      <div className="flex flex-col items-center">
        <div className='flex items-center mb-2'>
          <p className="mt-2 text-green-900 font-bold text-sm">{countdown} seconds left</p>
        </div>
        <div className='flex items-center mb-2'>
          <a href={link} className="mt-2 text-green-900 font-bold text-sm">Click here</a>
        </div>
        <div className="flex items-center mb-2">
          <p className="ml-4 text-green-900 text-2xl font-bold">{description}</p>
        </div>
        <div className="text-green-700 text-4xl font-extrabold">We're Growing Fast!</div>
      </div>
    </div>
  );
};
