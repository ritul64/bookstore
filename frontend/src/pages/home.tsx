import React from 'react';
import Hero from '../components/Home/hero';
import Recentlyadded from '../components/Home/recentlyadded';

const Home = () => {
  return (
  <div className='bg-zinc-900 text-white px-10 py-8'>
    <Hero/>
    <Recentlyadded/>
  </div>
  );
};

export default Home;
