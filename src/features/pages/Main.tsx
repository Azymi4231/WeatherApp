'use client';
import Image from 'next/image';
import React from 'react';
import Weather from '../../../public/image.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store';

const Main = () => {
  const curentWeather = useSelector(
    (state: RootState) => state.weather.curentWeather,
  );
  const curentTemp = useSelector(
    (state: RootState) => state.weather.curentTemp,
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={Weather} alt="ImageOfWeather" />
      <p className="text-3xl">{curentWeather}</p>
      <p className="text-5xl font-black">{curentTemp}</p>
    </div>
  );
};

export default Main;
