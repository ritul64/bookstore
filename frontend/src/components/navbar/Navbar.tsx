import React from 'react';
import { Link } from 'react-router-dom'; // only if using React Router

const Navbar = () => {
  const Links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "All-Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];

  return (
    <div className='flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
      <div className='flex items-center'>
        <img className="h-10 me-4" src="/logo.jpg" alt="logo" />
        <h1 className='text-2xl font-semibold'>Inkfinity</h1>
      </div>
      <div className='flex items-center gap-8'>
        <div className='flex gap-4'>
          {Links.map((item, i) => (
            <a key={i} href={item.link} className='hover:text-blue-500 transition-all duration-300'>
              {item.title}
            </a>
          ))}
        </div>
        <div className='flex gap-4'>
          <button className='px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-duration-300ms'>Log-In</button>
          <button className='px-4 py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-duration-300ms'>Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
