import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../public/img/rupsojjacosmetics.jpg'
import img2 from '../../../../public/img/infonexusimg.jpg'
import img3 from '../../../../public/img/bdcollegeimg.jpg'
import img4 from '../../../../public/img/project4.jpg'

const Project = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const projectsData = [
    {
      img: img2,
      title: "INFO NEXUS",
      description: "This Is Research and analytics platform with communication Site",
      role: "I Am Working To Create Front-end UI Design ,Authentication,Database And Back-end Code",
      features: "Research and analytics platform with communication. Visitors can Purchase Service, Chat With Admin, See Weather Update.",
      technologies: ["NextJS", "Tailwind", "Mongoose", "Firebase", "Stripe"],
      githubLink: 'https://github.com/itsrazib1/infonexus',
      liveSiteLink: 'https://infonexus.netlify.app/',
    },
    {
      img: img4,
      title: "STUDY WITH SHEPONSIR",
      description: "This Is Based on Studying Student management",
      role: "I create Front-end UI design, Redux and Back End, Firebase, and React Router.",
      features: "It is my project and based on Studying student management. Todo-related website User can Add His details And Management There Task And Attendance.",
      technologies: ["ReactJS", "Tailwind", "Redux", "Node.js", "Express.js", "MongoDB", "Firebase", "Daisy Ui"],
      clientCodeLink: 'https://github.com/itsrazib1/stady-with-shiponsir',
      serverCodeLink: 'https://github.com/itsrazib1/stady-with-shiponsir-server',
      liveSiteLink: 'https://stady-with-shiponsir.netlify.app/',
    },
    {
      img: img1,
      title: "RUPSOJJA COSMATIC",
      description: "This Is A Cosmetics Shop",
      role: "I create Front-end UI design and Back end, Firebase, and React router.",
      features: "It is my project and based on cosmetic shop. This project is an e-commerce-related website User can Purchase Product By Payment.",
      technologies: ["ReactJS", "Tailwind", "Daisy Ui", "Node.js", "Express.js", "MongoDB", "Firebase"],
      clientCodeLink: 'https://github.com/itsrazib1/Rupsojja-Cosmetics',
      serverCodeLink: 'https://github.com/itsrazib1/BdCollege-server',
      liveSiteLink: 'https://rupsojja-cosmatic.web.app/',
    },
    {
      img: img3,
      title: "BDCollege",
      description: "This Is A College Related Site",
      role: "I was working to create Front-end UI design and Back end, Firebase, and React router.",
      features: "It is my project and based on College-related website. This project is an e-commerce-related website user wants to log in and will be enrolled classes.",
      technologies: ["ReactJS", "Tailwind", "Daisy Ui", "Node.js", "Express.js", "MongoDB", "Firebase"],
      clientCodeLink: 'https://github.com/itsrazib1/BdCollege',
      serverCodeLink: 'https://github.com/itsrazib1/BdCollege-server',
      liveSiteLink: 'https://bd-college-book.web.app/',
    },
  ];

  const visibleProjects = showAllCards ? projectsData : projectsData.slice(0, 3);

  return (
    <div id='project'>
      <h2 className="text-5xl text-center font-bold bg-white text-black bg-opacity-50 sm:mx-0 md:mx-96 py-10">My Project</h2>
      <div className="grid text-white md:grid-cols-3 py-10 gap-4 sm:grid-cols-1 pt-20 md:px-36 sm:mx-0  ">

        {visibleProjects.map((project, index) => (
          <div key={index} className="card w-auto border border-white bg-gradient-to-t from-black to-sky-700  shadow-xl">
            <figure>
              <img
                src={project.img}
                alt={project.title}
                className='h-[300px] mt-5 rounded-lg'
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.title}
              </h2>
              <p>{project.description}</p>
              <p>
                My Role: {project.role} <br />
                Features: {project.features} <br />
                Technology Used:
                <div className='grid grid-cols-3 gap-2 text-center pt-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className='border-2 border-blue-600 rounded-xl'>{tech}</div>
                  ))}
                </div>
              </p>
              <div className="card-actions justify-end pt-3">
                <div className="badge badge-outline hover:text-green-500 "><Link to={project.clientCodeLink}>Client Code</Link></div>
                {project.serverCodeLink && <div className="badge badge-outline hover:text-red-500 "><Link to={project.serverCodeLink}>Server Code</Link></div>}
                <div className="badge badge-outline hover:text-blue-500 "><Link to={project.liveSiteLink}>Live Site</Link></div>
              </div>
            </div>
          </div>
        ))}

        

      </div>
      {!showAllCards && (
          <div className="flex justify-center mt-5">
            <button
              className=""
              onClick={() => setShowAllCards(true)}
            >
              
              <a className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">See More</span>
            </a>
            </button>
          </div>
        )}
        {showAllCards && (
          <div className="flex justify-center mt-5">
            <button
              className=""
              onClick={() => setShowAllCards(false)}
            >
              
              <a className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Show Less</span>
            </a>
            </button>
          </div>
        )}
    </div>
  );
};

export default Project;
