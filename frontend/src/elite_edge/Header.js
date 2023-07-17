import React, { useState } from 'react';

import Logo from '../assets/img/logo.png';
import Nav from '../elite_edge/Nav';
import NavMobile from '../elite_edge/NavMobile';

import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  
  return (
    <header
      className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down'
      data-aos-delay='300'
      data-aos-duration='1000'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between relative'>
          <div className='flex items-center gap-x-[120px]'>
            <a href='/'>
              <img src={Logo} alt='' />
            </a>

            {/* nav - initially hidden, show s on large screens */}
            <div className='hidden lg:flex'>
              <Nav />
            </div>
          </div>
          {/* mobile only nav */}
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
            Request Demo{' '}
            <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
          </button>
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='lg:hidden text-2xl text-primary cursor-pointer'
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
