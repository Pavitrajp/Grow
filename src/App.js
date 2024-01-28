import React from 'react';
import './index.css';
import Header from './Header';
import Banner from './Banner';
import Experts from './Experts';
import NewsLetter from './NewsLetter';
import Plans from './Plans';

const App = () =>{
  return(
    <>
    <Header/>
    <Banner/>
    <Experts/>
    <NewsLetter/>
    <Plans/>
    </>
  );
};

export default App;
