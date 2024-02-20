import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import razib from '../assets/Profile.png';
import { FaGithub, FaFacebook, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import '../../src/mycss.css'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    
    const googleDriveResumeLink = 'https://drive.google.com/file/d/1ZR9p6CqVBmUDocjjUdi6V-MXX4nMkpBa/view?usp=sharing';

    return (
        <div className='min-h-[55vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 font-secondary lg:text-left'>
                        <h2
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='text-[55px] font-bold leading-[.8] lg:text-[50px] uppercase'
                        >
                            Khayrul Kober<span>Razib</span>
                        </h2>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='mb-6 my-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-1'
                        >
                            <span className='text-white mr-4'>I'm A </span>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Web Designer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                ]}
                                speed={50}
                                className='text-accent'
                                repeat={Infinity}
                                wrapper='span'
                            ></TypeAnimation>
                        </div>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className='mb-8 max-w-lg lg:mx-0 mx-auto'
                        >
                            I am dedicated . I have a strong problem_solving-mindset, , Great Teamwork Abilities, A love for learning, keen attention to Detail, And A Strong Commitment To My Work..
                        </p>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='600'
                            className='flex items-center max-w-max gap-x-6 mb-8 mx-auto lg:mx-0'
                        >
                           
                            <a href="#contact" className='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn border-0 '>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Contact me</span>
                            </a>
                            <Link to={googleDriveResumeLink} className='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn  border-0 btn-link no-underline  ' target='_blank' rel='noopener noreferrer'>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white"><FaDownload className='inline mr-2 text-white'></FaDownload>Download Resume</span>
                                
                            </Link>
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='700'
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
                        >
                            <a href='https://github.com/itsrazib1'>
                                <FaGithub></FaGithub>
                            </a>
                            <a href='https://www.linkedin.com/in/itsrazib1/'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </a>
                            <a href='https://www.facebook.com/khayrul.kober.razib'>
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-0">
                        <img
                            src={razib}
                            alt="Profile"
                            className=" xdiv md:w-[400px] rounded-xl  "
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
