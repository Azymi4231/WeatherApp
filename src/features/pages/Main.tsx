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
  const curentHumidity = useSelector(
    (state: RootState) => state.weather.curentHumidity,
  );
  const curentPressure = useSelector(
    (state: RootState) => state.weather.curentPressure,
  );
  return (
    <div className="flex flex-col items-center gap-4">
      {curentWeather === 'broken clouds' ? (
        <Image src={Weather} alt="ImageOfWeather" />
      ) : null}
      <p className="text-3xl">{curentWeather}</p>
      <br />
      <p className="text-5xl font-black">{curentTemp}°C</p>
      <br />
      <p className="text-3xl">Humidity {curentHumidity}[%]</p>
      <p className="text-3xl">Pressure {curentPressure}[hPa]</p>
    </div>
  );
};

export default Main;
