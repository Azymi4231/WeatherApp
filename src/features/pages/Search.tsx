'use client';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';

const Search = () => {
  const [city, setCity] = useState<string>();
  return (
    <Formik
      initialValues={{
        Search: '',
      }}
      onSubmit={async (values) => {
        setCity(values.Search);
        console.log(city);
      }}
    >
      <Form className="flex flex-col">
        <div className="relative flex flex-col">
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
