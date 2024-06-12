import React from 'react';
import Image from 'next/image';
import DogSpaImg from '../public/img/services/dogspa.png';

const DogSpa = () => {
  return (
    <section className="p-10 bg-white text-[#062d3e]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Dog Spa</h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image src={DogSpaImg} layout="fill" objectFit="cover" alt="Dog Spa" className="rounded-lg" />
        </div>
        <p className="mb-8">Treat your pet to a luxurious spa day at Pawsitivity Hub. Our Dog Spa offers a range of grooming services, from baths and haircuts to nail trims and ear cleaning, all in a relaxing environment.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Baths & Haircuts</h2>
            <p className="text-lg text-center">Professional grooming services to keep your dog looking fresh and clean.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Nail Trims & Ear Cleaning</h2>
            <p className="text-lg text-center">Gentle care for your dog's nails and ears to maintain their health and hygiene.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Relaxing Environment</h2>
            <p className="text-lg text-center">A calming atmosphere for your dog to unwind and enjoy their spa experience.</p>
          </div>
        </div>
        <p className="text-lg mt-8">Our professional groomers use high-quality products and gentle techniques to ensure your dog leaves looking and feeling their best.</p>
      </div>
    </section>
  );
};

export default DogSpa;

