import React, { useState } from 'react';
import logo from '../assets/img/hh.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar() {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  return (
    <nav className="bg-[#F9F8F6]">

      <div className="flex justify-between border-b border-[#DAD6D1] py-3 lg:py-4 px-6 lg:px-32 relative">

        <Link to={'/'} className='flex items-center justify-center'>
          <img src={logo} alt="logo" className="object-contain" />
        </Link>

        <RxHamburgerMenu
          className="size-5 text-[#75716B] lg:hidden cursor-pointer"
          onClick={() => {
            setOpenNavMenu(!openNavMenu);
          }}
        />

      <div className="hidden lg:flex gap-2">

        <Link to={'/login'} 
          className="px-10 py-3 rounded-full border border-[#75716B] transition-all duration-300 ease-in-out
                    text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                    >
                      Log in
        </Link>

        <Link to={'/sign-up'}
          className="px-10 py-3 rounded-full border border-[#26231E] bg-[#26231E] transition-all duration-300 ease-in-out
                     text-white text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                    >
                      Sign up
        </Link>
      </div>
      </div>

      <div 
        className={`lg:hidden w-full absolute flex flex-col py-10 px-6 gap-6 border-b bg-[#F9F8F6] 
                  shadow-xl transition-opacity duration-500 ease-in-out ${openNavMenu ? 'opacity-100' : 'opacity-0'}`
        }>

          <Link to={'/login'} 
            className="px-10 py-3 rounded-full border border-[#75716B] transition-all duration-300 ease-in-out
                        text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                      >
                        Log in
          </Link>

          <Link to={'/sign-up'} 
            className="px-10 py-3 rounded-full border border-[#26231E] bg-[#26231E] transition-all duration-300 ease-in-out
                       text-white text-base font-[Poppins] font-medium leading-6 hover:scale-105 text-center"
                      >
                        Sign up
          </Link>
      </div>
    </nav>
  );
}

export default Navbar;
