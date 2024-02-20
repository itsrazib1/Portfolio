import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { content } from './Content';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitile';

const Work = () => {
    const { projects } = content;
    const [displayedProjects, setDisplayedProjects] = useState(3); 

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    const showAllProjects = () => {
        setDisplayedProjects(projects.length);
    };

    return (
        <>
            <section className='section' id='work'>
                <div className='container mx-auto py-0'>
                    <div className=''>
                        <div className='mb-10 lg:mb-0'>
                            <SectionTitle title={"My Latest"} subtitle={"Projects"}></SectionTitle>
                            <p className='max-w-xl mb-6'>
                                I showcase dynamic web applications that seamlessly integrate front-end and back-end technologies.
                                Witness innovation and scalability as we explore the limitless possibilities of MERN technology in transforming the world of web development.
                            </p>
                        </div>
                    </div>
                    {/* Project cards */}
                    <div className='grid md:grid-cols-3 gap-8 md:my-8 '>
                        {projects.slice(0, displayedProjects).map((project, index) => (
                            <div key={index} className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <ProjectCard project={project}></ProjectCard>
                            </div>
                        ))}
                    </div>
                    {/* View All Project Button */}
                    <div className='text-center pt-6 md:pt-0'>
                        {displayedProjects < projects.length && (
                        
                            <button onClick={showAllProjects} href="#contact" className='lg:btn-lg relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn border-0 '>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">View All Projects</span>
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
