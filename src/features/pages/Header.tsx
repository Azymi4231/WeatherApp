'use client';
import { RootState } from '@/src/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const curentCity = useSelector(
    (state: RootState) => state.weather.curentCity,
  );

  return (
    <div className="flex justify-between text-lg">
      <p className="font-medium">{curentCity}</p>
      <p className="font-normal">11:00</p>
    </div>
  );
};

export default Header;
