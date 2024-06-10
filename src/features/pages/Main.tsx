import Image from 'next/image';
import React from 'react';
import Weather from '../../../public/image.png';

const Main = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={Weather} alt="ImageOfWeather" />
      <p className="text-3xl">Thunderstorm</p>
      <p className="text-5xl font-black">24°</p>
    </div>
  );
};

export default Main;
