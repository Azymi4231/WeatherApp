'use client';

import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTemp,
  changeWeather,
  changeCity,
} from '@/src/redux/weatherSlice';
import { RootState } from '@/src/redux/store';

const Search = () => {
  const curentCity = useSelector(
    (state: RootState) => state.weather.curentCity,
  );
  const apiUrl = process.env.NEXT_PUBLIC_API_KEY;
  console.log(apiUrl);
  const dispatch = useDispatch();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${curentCity}&units=metric&appid=${apiUrl}`;
  useEffect(() => {
    // Asynchroniczna funkcja do pobierania danych
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const curentWeather = response.data.weather[0].description;
        const curentTemp = response.data.main.temp;
        const curentCity = response.data.name;
        dispatch(changeWeather(curentWeather));
        dispatch(changeTemp(curentTemp));
        dispatch(changeCity(curentCity));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [curentCity]);

  return (
    <Formik
      initialValues={{
        Search: '',
      }}
      onSubmit={async (values) => {
        dispatch(changeCity(values.Search));
      }}
    >
      <Form className="flex flex-col">
        <div className="relative flex flex-col py-5">
          <Field
            className="rounded-full text-black opacity-40 placeholder:text-black"
            id="Search"
            name="Search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <FaSearchLocation />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Search;
