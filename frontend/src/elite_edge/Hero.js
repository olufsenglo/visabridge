import React from 'react';

import Header from '../elite_edge/Header';
import { heroData } from '../data';

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;

  return (
    <section className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full'>
          <div className='text-center xl:text-left xl:absolute'>
            <h1
              className='h1 xl:max-w-[700px] mb-6 xl:mb-12'
            >
              {title}
            </h1>
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
            >
              {subtitle}
            </p>
            <button
              className='btn btn-primary mb-8 xl:mb-0'
            >
              {btnText}
            </button>
          </div>
          <div
            className='xl:absolute xl:-right-12 xl:bottom-16'
          >
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
