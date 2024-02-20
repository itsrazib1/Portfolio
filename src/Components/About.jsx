import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitile';
import '../../src/mycss.css'
const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        AOS.init();
    }, []);
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabname) => {
        setActiveTab(tabname);
    };
    return (<>
        <section className='section w-full mx-auto lg:w-5/6 lg:my-32' id='about'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <div className='w-full mt-14 bg-about bg-contain bg-no-repeat h-[320px] md:h-[620px] mix-blend-lighten bg-top'></div>
                </div>
                <div
                    ref={ref}
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='md:w-1/2 w-full lg:mt-4 lg:pl-8 md:pl-4'
                >
                    <div className='flex flex-col px-4 py-4 md:py-0 justify-center md:h-[640px]'>
                        <div className='mb-8'>
                            <SectionTitle title={"About"} subtitle={"Me"}></SectionTitle>
                            <div className="about-col-2 -ms-3 bg-slate-900 rounded-lg py-5 px-5">

                                <p>
                                    MERN Stack Developer with expertise in creating dynamic and responsive web applications. Proficient in JavaScript, React, Node.js, and MongoDB. Strong problem-solving skills and a passion for delivering high-quality code. Dedicated to continuous learning and staying updated with the latest industry trends.
                                </p>
                                <div className="tab-titles">
                                    <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>
                                        Skills
                                    </p>
                                    <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>
                                        Experience
                                    </p>
                                    <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>
                                        Education
                                    </p>
                                </div>
                                <div className={`tab-container ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                    <ul>
                                        <li>
                                            <span>Font-end Developer</span>
                                            <br />
                                            Designing Font-end Website Interfaces
                                        </li>
                                        <li>
                                            <span>Web Development</span>
                                            <br />
                                            Web app Development
                                        </li>
                                        <li>
                                            <span>Back-End Developer</span>
                                            <br />
                                            Designing Full-Stack Using MERN Stack.
                                        </li>
                                    </ul>
                                </div>
                                <div className={`tab-container ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                                    <ul>
                                        <li>
                                            <span>2023 August-October</span>
                                            
                                            <br />3 Month Team Project With Github Collaboration .

                                        </li>
                                        <li>
                                            <span>2023 January-July</span>
                                            <br />
                                            Complete Web Development (From Programming Hero )
                                        </li>
                                        <li>
                                            <span>2023 October-December</span>
                                            <br />
                                            NextJS Team Project
                                        </li>

                                    </ul>
                                </div>
                                <div className={`tab-container ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                    <ul>
                                        <li>
                                            <span>2022-2026</span>
                                            <br />
                                            Studying BBA Honors
                                        </li>
                                        <li>
                                            <span>2021</span>
                                            <br />
                                            Completed HSC Degree
                                        </li>
                                        <li>
                                            <span>2019</span>
                                            <br />
                                            Completed SSC Degree
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
        <div className='flex  flex-col md:flex-row md:justify-center text-center'>
                            <div className='mb-6 md:mb-0 md:mr-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={1} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of Experience.
                                </div>
                            </div>
                            <div className='mb-6 md:mb-0 md:mx-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={50} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects Completed.
                                </div>
                            </div>
                            <div className='mb-6 md:mb-0 md:ml-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={3} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied Clients.
                                </div>
                            </div>
                        </div>
</>
    );
};

export default About;
