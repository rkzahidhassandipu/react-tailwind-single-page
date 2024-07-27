import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                Pellentesque suscipit <br /> fringilla libero eu.
                </h2>
                <div>
                <button className='bg-brandPrimary text-white font-bold py-2 px-4 rounded btn-primary'>Get a Demo 
                    <FaArrowRightLong className='inline-block ml-2' />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter