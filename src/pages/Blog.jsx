import React from 'react'
import img1 from "../assets/image 18.png"
import img2 from "../assets/image 19.png"
import img3 from "../assets/image 20.png"

import { FaArrowRightLong } from "react-icons/fa6";


const Blog = () => {
    const blog = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", img: img1},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", img: img2},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", img: img3},
    ];
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
            <p className='text-sm text-Grey900 mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>

        {/* all blogs */}

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-between'>
            {
                blog.map(blogs => <div key={blogs.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blogs.img} alt="" className='hover:scale-95 transition-all duration-300' />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-Grey900 font-semibold'>{blogs.title}</h3>
                        <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                    Readmore
                                        <FaArrowRightLong className='inline ml-2' />
                                    </a>
                                </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Blog