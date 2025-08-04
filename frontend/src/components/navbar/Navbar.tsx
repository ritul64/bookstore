import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';


const Navbar = () => {
  const Links = [
    { title: "Home", link: "/" },
    // { title: "About Us", link: "/about" },
    { title: "All-Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];
  const [MobileNav, setMobileNav] = useState("hidden");


  return (
    <>
    <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
      <Link to='/' className='flex items-center'>
        <img 
          className="h-10 me-4" 
          src="/logo.jpg" 
          alt="logo" 
        />
        <h1 className='text-2xl font-semibold'>Inkfinity</h1>
      </Link>

      <div className='nav-links-inkfinity block md:flex items-center gap-4'>
        <div className='hidden md:flex gap-4'>
          {Links.map((item, i) => (
            <Link 
              key={i}
              to={item.link}
              className='hover:text-blue-500 transition-all duration-300'
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className='hidden md:flex gap-4'>
          <Link 
            to="/login"
            className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'
          >
            Log-In
          </Link>
          <Link 
            to="/signup"
            className='px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'
          >
            Sign-Up
          </Link>
        </div>
        <button 
        className ='block md:hidden text-white text-2xl hover:text-zinc-400'
        onClick={
          ()=>setMobileNav( MobileNav === 'hidden' ? "block" : "hidden" )
          }>
          <FaGripLines />
        </button>
      </div>
    </nav>
    <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
      {Links.map((item, i) => (
            <Link 
              //key={i}
              to={item.link}
              className={`${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300`}
              key={i}
              onClick={
              ()=>setMobileNav( MobileNav === 'hidden' ? "block" : "hidden" )
              }
            >
              {item.title}{" "}
            </Link>
          ))}
          <Link 
            to="/login"
            className={`${MobileNav} px-8 mb-8 py-2 text-3xl text-semibold border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          >
            Log-In
          </Link>
          <Link 
            to="/signup"
            className={`${MobileNav} px-8 mb-8 py-2 text-3xl text-semibold bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          >
            Sign-Up
          </Link>
        </div>
    </>
  );
};

export default Navbar;
