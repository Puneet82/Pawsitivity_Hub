import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import DogImg from '../public/img/NewsLetter/dog.png';

const NewsLetter = () => {
  return (
    <section className='py-16 bg-cream'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8'>
        <div className='flex-1 flex flex-col justify-center items-center p-8 lg:p-0'>
          <h2 className='text-4xl lg:text-5xl text-primary font-bold mb-8 lg:mb-12'>Subscribe & Get Pet Update News</h2>
          <div className='relative w-full max-w-md'>
            <input
              className='bg-transparent border-b-2 placeholder-gray-400 text-gray-800 outline-none w-full pr-12'
              type='text'
              placeholder='Enter your email'
            />
            <HiOutlineArrowNarrowRight className='absolute top-0 right-0 text-primary text-3xl' />
          </div>
        </div>
        <div className='flex-1 flex justify-center items-end'>
          <div className='w-72 h-72 lg:w-96 lg:h-96 relative'>
            <Image src={DogImg} alt='Dog' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;


