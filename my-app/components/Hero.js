import React from 'react';
import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <section className='bg-cream lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]'>
      <Header />
      <div className='container mx-auto flex justify-start items-center min-h-[400px] lg:h-[850px]'>
        <div className='lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0'>
          {/* Future dog image */}
          <h1 className='text-5xl lg:text-8xl uppercase font-bold tracking-tight mb-10'>
            Caring for your pets
            <br />
            <span className='text-[#F79D5C] font-normal'>with love and joy</span>
            <br />
            every day
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
