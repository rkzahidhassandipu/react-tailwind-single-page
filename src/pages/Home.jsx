import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from "../assets/banner.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Home() {
  return (
    <div className='bg-neutralSilver mt-20'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>
          <Swiper
            // pagination={{
            //   dynamicBullets: true,
            // }}
            navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full mx-auto"
          >
            <SwiperSlide className=' my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                
                <div>
                    <img className='w-[400px]' src={banner} alt="" />
                </div>
                {/* here text */}
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                        Learn and Earn Money
                        <span className='text-brandPrimary leading-snug'> in 4 Months</span>
                    </h1>
                    <p className='text-Grey900 text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='bg-brandPrimary text-white font-bold py-2 px-4 rounded btn-primary'>Register</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className=' my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                
                <div>
                    <img className='w-[400px]' src={banner} alt="" />
                </div>
                {/* here text */}
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                        Lessons and insights
                        <span className='text-brandPrimary leading-snug'> from 8 years</span>
                    </h1>
                    <p className='text-Grey900 text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='bg-brandPrimary text-white font-bold py-2 px-4 rounded btn-primary'>Register</button>
                </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
    </div>
  );
}
