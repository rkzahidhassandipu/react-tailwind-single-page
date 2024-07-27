import React from 'react'
import pana from "../assets/pana.png";
import member from "../assets/member.png"
import club from "../assets/club.png"
import event from "../assets/event.png"
import payment from "../assets/Payments.png"

import company1 from "../assets/conpmay1.png";
import company2 from "../assets/conpmay2.png";
import company3 from "../assets/conpmay3.png";
import company4 from "../assets/conpmay4.png";
import company5 from "../assets/conpmay5.png";
import company6 from "../assets/conpmay6.png";
import company7 from "../assets/conpmay7.png";
import tasla from "../assets/image99.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  return (
    <div>
        {/* about Section start here */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className=''>
                    <img className='w-[500px]' src={pana} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/4 text-sm text-Grey900 mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='bg-brandPrimary text-white font-bold py-2 px-4 rounded btn-primary'>Learn More</button>
                </div>
            </div>
        </div>

        {/* company starts */}

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
                <div className='md:w-1/3'>
                    <img src={tasla} alt="" />
                </div>

                {/* starts */}

                <div className='md:w-1/2 mx-auto'>
                    <div className=''>
                        <p className='md:w-4/5 text-sm text-Grey900 mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-base text-neutralDGrey mb-8'>British Dragon Boat Racing Association</p>

                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src={company1} alt="" className='cursor-pointer' />
                                <img src={company2} alt="" className='cursor-pointer' />
                                <img src={company3} alt="" className='cursor-pointer' />
                                <img src={company4} alt="" className='cursor-pointer' />
                                <img src={company5} alt="" className='cursor-pointer' />
                                <img src={company6} alt="" className='cursor-pointer' />
                                <img src={company7} alt="" className='cursor-pointer' />
                                <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                        Meet all customers
                                        <FaArrowRightLong className='inline ml-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products