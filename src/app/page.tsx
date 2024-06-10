import React from 'react';
import { Header } from '../features';
import { Search } from '../features';
import { Main } from '../features';

const Page = () => {
  return (
    <div className="flex flex-grow flex-col p-5">
      <Header />
      <Search />
      <Main />
    </div>
  );
};

export default Page;
