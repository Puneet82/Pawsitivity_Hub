import React from 'react';
import Image from 'next/image';
import DogWalkingImg from '../public/img/services/dogwalking.png';

const DogWalking = () => {
  return (
    <section className="p-10 bg-white text-[#062d3e]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Dog Walking</h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image src={DogWalkingImg} layout="fill" objectFit="cover" alt="Dog Walking" className="rounded-lg" />
        </div>
        <p className="mb-8">Our Dog Walking service is perfect for busy pet owners who want to ensure their dogs get the exercise they need. Our experienced walkers will take your dogs on exciting walks around the neighborhood.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">On-Leash Walks</h2>
            <p className="text-lg text-center">Structured walks to keep your dog safe and under control while exploring the outdoors.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Off-Leash Adventures</h2>
            <p className="text-lg text-center">Freedom for your dog to run and play in designated off-leash areas.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Personalized Care</h2>
            <p className="text-lg text-center">Tailored walks to match your dog's energy level, temperament, and preferences.</p>
          </div>
        </div>
        <p className="text-lg mt-8">Pawsitivity Hub's Dog Walking service includes on-leash walks, off-leash adventures, and personalized care to match your dog's energy level and preferences.</p>
      </div>
    </section>
  );
};

export default DogWalking;

