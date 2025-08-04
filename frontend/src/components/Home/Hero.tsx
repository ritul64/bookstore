import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <div className='min-h-[75vh] flex flex-col lg:flex-row px-4'>
    <div className='w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center py-10'>
      <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left leading-tight'>
        Escape into the pages of your next great read
      </h1>
      <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
        Every book has a story. Every reader finds a piece of themselves in it.
        Let us help you find the one that speaks to your soul.
      </p>
      <div className='mt-8'>
        <Link to="/all-books" className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>
          Discover Books
        </Link>
      </div>
    </div>
    <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
      <img src='./helloooo.jpg' alt="hero"/>
    </div>

  </div>
};

export default Hero;
