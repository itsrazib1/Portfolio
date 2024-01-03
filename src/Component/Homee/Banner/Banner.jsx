import linkdin from "../../../../public/img/640px-LinkedIn_logo_initials.png";
import razib from "../../../../public/img/profile.png";
import About from "../About/About";
import Project from "../Project/Project";
import Contract from "../Contract/Contract";
import pdf from "../../../../public/resume.pdf";
import './Banner.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import Experience from "./Experience";
import MyServices from "./MyServices";
const Banner = () => {

    //  const texts = ["WEB DEVELOPER", "MERN-STACK DEVELOPER", "REACT DEVELOPER"];

    return (

        <>
            <div className="pt-20">
                <div className="grid  grid-cols-1 md:grid-cols-2 justify-evenly md:px-8 md:py-20 sm:px-4 sm:py-8">
                    <div data-aos="fade-up" className="text-center bg-slate-900 flex flex-col justify-center px-2 lg:px-12">
                        <h5 className="pt-5 text-1xl sm:text-2xl font-bold text-blue-400">
                            <span className='text-2xl sm:text-3xl font-bold text-white'> Hi, I Am <span className="text-green-400">KHAYRUL KOBER RAZIB</span> </span><br />
                            <span className='text-2xl sm:text-3xl text-white '> As a </span>
                            <br />

                            <TypeAnimation className=' text-2xl md:text-3xl'
                                sequence={[
                                    'MERN Stack Developer',
                                    1000,
                                    'Font-end Developer',
                                    1000,
                                    'Web Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                // style={{ fontSize: '2rem', display: 'inline-block' }}
                                repeat={Infinity}
                            />


                        </h5>
                        <p className="text-gray-500 py-4 px-8 sm:text-xl text-sm">
                            I am dedicated . I have a strong problem_solving-mindset, , Great Teamwork Abilities, A love for learning, keen attention to Detail, And A Strong Commitment To My Work..
                        </p>

                        <div className='mx-auto flex py-3 px-4'>
                            <div data-aos="fade-right">
                                <Link
                                    to="contract"
                                    className="group text-xs text-white w-fit px-2 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                                >
                                    Contract Me
                                    <span className="group-hover:rotate-90 duration-300">
                                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                    </span>
                                </Link>
                            </div>
                            <div data-aos="fade-right">

                                <a href={pdf}
                                    className="group text-xs text-white w-fit px-2 py-1 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-6"
                                >
                                    Download Resume
                                    <span className="group-hover:rotate-90 duration-300">
                                        <MdOutlineKeyboardArrowRight size={25} />
                                    </span>
                                </a>
                            </div>
                            <div data-aos="fade-right">
                                <a href="https://www.linkedin.com/in/itsrazib1/">
                                <img
                            src={linkdin}
                            alt="Profile"
                            className=" h-8 mt-2 sm:mt-2 "
                        />
                                </a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-0">
                        <img
                            src={razib}
                            alt="Profile"
                            className=" div md:w-[400px] rounded-xl  "
                        />
                    </div>
                </div>

            </div>
            <Experience></Experience>
            <About></About>
            <MyServices></MyServices>
            <Project></Project>
            <Contract></Contract>
        </>
    );
};

export default Banner;
