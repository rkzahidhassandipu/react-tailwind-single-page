import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"
import { FaXmark, FaBars, FaXmarksLines   } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);

        }
    });
    // navitems array
    const navItems = [
        {title: "Home", path: "/"},
        {title: "Service", path: "service"},
        {title: "About", path: "about"},
        {title: "Testimonial", path: "testimonial"},
        {title: "FAQ", path: "faq"},
    ]

   
  return (

   <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
                    <img className='w-10 inline-block items-center' src={logo} alt="" />
                    <span className='text-[#263238]'>NEXCENT</span>
                </a>
            
                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map((title, index) => (
                            <li key={index}>
                                <a className='block text-base text-gray-900 hover:text-gray-300 first:font-medium' href={title.path}>{title.title}</a>
                            </li>
                        ))
                    }
                    
                </ul>

                {/* btn for large devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a className='hidden lg:flex items-center text-brandPrimary hover:text-Grey900' href="">Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sing up</button>
                </div>

                {/* menu btn for only mobile */}

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark  className='h-6 w-6 text-neutralDGrey' />) : (<FaBars className='h-6 w-6 text-neutralDGrey' />)
                        }
                    </button>
                </div>
            </div>

            <div className={`space-y-4 px-4 py-7 bg-brandPrimar ${isMenuOpen ? "block fixed top-0 right-0 left-0 list-none mt-16 bg-brandPrimary" : "hidden"}`}>
                {
                    navItems.map((title, index) => (
                        <li className='cursor-pointer' key={index}>
                            <a className='block text-base text-gray-900 first:font-medium' href={title.path}>{title.title}</a>
                        </li>
                    ))
                }
            </div>
        </nav>
   </header>
  )
}

export default Navbar