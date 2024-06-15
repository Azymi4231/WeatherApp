'use client';
import React from 'react';
import { Header } from '../features';
import { Search } from '../features';
import { Main } from '../features';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Page = () => {
  const curentWeather = useSelector(
    (state: RootState) => state.weather.curentWeather,
  );
  return (
    <div
      className={`flex flex-grow flex-col items-center  p-5 ${
        curentWeather === 'Clear'
          ? 'bg-blue-200'
          : 'Clouds'
          ? 'bg-slate-300'
          : 'Snow'
          ? 'bg-white'
          : 'bg-black'
      }`}
    >
      <div className="w-full max-w-xl">
        <Header />
        <Search />
      </div>
      <Main />
    </div>
  );
};

export default Page;
