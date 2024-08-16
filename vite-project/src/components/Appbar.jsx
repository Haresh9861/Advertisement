import React, { useState, useEffect } from 'react';

const Appbar = () => {
  const [timeLeft, setTimeLeft] = useState(100); // Replace with actual initial time

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b bg-slate-50  flex flex-row justify-between items-center px-4 md:px-10 py-4">
      <div className="flex-shrink-0 flex flex-col cursor-pointer font-roboto font-bold text-xl md:text-3xl">
        Agency
      </div>
      <div className="flex-grow   text-customPink font-roboto px-10 md:text-right text-sm md:text-base">
        <p>Time Left: {timeLeft} seconds</p>
      </div>
      <nav className="flex-shrink-0">
        <ul className="flex flex-row gap-4 md:gap-7 space-x-2 md:space-x-4">
          <li className="flex flex-col cursor-pointer py-1 hover:text-orange-600">
            <a href="/" aria-label="Home">Home</a>
          </li>
          <li className="flex flex-col cursor-pointer py-1 hover:text-orange-600">
            <a href="/services" aria-label="Services">Services</a>
          </li>
          <li className="flex flex-col cursor-pointer py-1 hover:text-orange-600">
            <a href="/about-us" aria-label="About Us">About Us</a>
          </li>
          <li className="flex flex-col cursor-pointer py-1 hover:text-orange-600">
            <a href="/contact-us" aria-label="Contact Us">Contact Us</a>
          </li>
          <li className="flex flex-col text-center cursor-pointer">
            <button className="bg-orange-600 text-white px-2 py-1 text-base md:text-xl rounded-md hover:bg-pink-500">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Appbar;
