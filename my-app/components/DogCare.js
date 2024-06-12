import React from 'react';
import Image from 'next/image';
import DayCareImg from '../public/img/services/daycare.png';

const DayCare = () => {
  return (
    <section className="p-10 bg-white text-[#062d3e]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Day Care</h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image src={DayCareImg} layout="fill" objectFit="cover" alt="Day Care" className="rounded-lg" />
        </div>
        <p className="mb-8">Our Day Care service ensures that your pets are in good hands while you're away. We provide a fun and safe environment for your furry friends to play, rest, and socialize.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Group Play Sessions</h2>
            <p className="text-lg text-center">Pets get to interact and play with other pets in a supervised group setting.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Individual Attention</h2>
            <p className="text-lg text-center">Every pet receives individual care and attention from our trained staff.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-[#F79D5C] rounded-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Plenty of Exercise</h2>
            <p className="text-lg text-center">Pets are given ample opportunity to exercise and stay active throughout the day.</p>
          </div>
        </div>
        <p className="text-lg mt-8">At Pawsitivity Hub, our Day Care program includes a variety of activities such as group play sessions, individual attention, and plenty of exercise to keep your pets happy and healthy.</p>
      </div>
    </section>
  );
};

export default DayCare;






