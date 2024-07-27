import React from 'react';
import company1 from "../assets/conpmay1.png";
import company2 from "../assets/conpmay2.png";
import company3 from "../assets/conpmay3.png";
import company4 from "../assets/conpmay4.png";
import company5 from "../assets/conpmay5.png";
import company6 from "../assets/conpmay6.png";
import company7 from "../assets/conpmay7.png";
import membershipImg from "../assets/membership.png";
import nationalImg from "../assets/National.png";
import clubsImg from "../assets/Clubs.png";

const Services = () => {
    const services = [
        {id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: membershipImg},
        {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: nationalImg},
        {id: 3, title: "Clubs and Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: clubsImg},
    ];

    return (
        <div className='md:px-14 px-4 py-6 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-Grey900'>We have been working with some Fortune 500+ clients</p>

                {/* Company logos */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src={company1} alt="Company 1" />
                    <img src={company2} alt="Company 2" />
                    <img src={company3} alt="Company 3" />
                    <img src={company4} alt="Company 4" />
                    <img src={company5} alt="Company 5" />
                    <img src={company6} alt="Company 6" />
                    <img src={company7} alt="Company 7" />
                </div>
            </div>

            {/* Services card */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
                <p className='text-Grey900'>Who is Nextcent suitable for?</p>
            </div>

            {/* Card section */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto'>
                {
                    services.map(service => (
                        <div key={service.id}
                            className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
                        >
                            <div>
                                <div className='bg-[#e8f5e9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl mb-4'>
                                    <img className='w-48' src={service.image} alt={service.title} />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-Grey900'>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
