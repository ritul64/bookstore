import React from 'react';

const Hero = () => {
  return <div className='h-[75vh] flex'>
    <div className='w-3/6 flex flex-col items-start justify-center'><h1 className='text-6xl font-semibold text-yellow-100'>
      Escape into the pages of your next great read</h1>
      <p className='mt-4 text-xl text-zinc-300'>
        Every book has a story. Every reader finds a piece of themselves in it.
        Let us help you find the one that speaks to your soul.
      </p>
      <div className='mt-8'>
        <button className='text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>
        Discover Books
        </button></div>
      </div>
    <div className='w-3/6'></div>
    </div>
};

export default Hero;
