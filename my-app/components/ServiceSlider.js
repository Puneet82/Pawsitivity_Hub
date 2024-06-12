import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import DayCareIcon from '../public/img/services/daycare.png';
import DogWalkingIcon from '../public/img/services/dogwalking.png';
import DogSpaIcon from '../public/img/services/dogspa.png';

// Install Swiper modules
SwiperCore.use([Navigation]);

const services = [
  {
    image: DayCareIcon,
    name: 'Day Care',
    description: 'Our Day Care service provides a safe and fun environment for your pets while you\'re away.',
    btnText: 'Explore',
    link: '/daycare'
  },
  {
    image: DogWalkingIcon,
    name: 'Dog Walking',
    description: 'Our Dog Walking service ensures your furry friend gets the exercise they need.',
    btnText: 'Explore',
    link: '/dogwalking'
  },
  {
    image: DogSpaIcon,
    name: 'Dog Spa',
    description: 'Our Dog Spa service pampers your pet with luxurious grooming treatments.',
    btnText: 'Explore',
    link: '/dogspa'
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      className='serviceSlider min-h-[680px] bg-[#ebe3cc] p-8'
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {services.map((service, index) => (
        <SwiperSlide className='border-primary-20 p-6' key={index}>
          <div className='relative w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full'>
            <Image src={service.image} width={150} height={150} alt={service.name} />
          </div>
          <div className='text-center text-[#062d3e] mt-4 font-bold'>{service.name}</div>
          <div className='text-center text-[#062d3e] mt-2'>{service.description}</div>
          <div>
            <Link href={service.link}>
              <button className='btn bg-[#388697] text-white mt-4 mx-auto lg:mx-0'>{service.btnText}</button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
