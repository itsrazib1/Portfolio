import linkdin from "../../../../public/img/640px-LinkedIn_logo_initials.png";
import github from "../../../../public/img/github.png";
import html5 from "../../../../public/img/html5.png";
import css3 from "../../../../public/img/css3.png";
import javascript from "../../../../public/img/javascript.png";
import react from "../../../../public/img/react.png";
import tailwind from "../../../../public/img/tailwind.png";
import firebase from "../../../../public/img/firebase.png";
import bootstrap from "../../../../public/img/bootstrap.jpg";
import MongoDB from "../../../../public/img/mongodb.jpg";
import razib from "../../../../public/img/razib.jpg";
import About from "../About/About";
import Project from "../Project/Project";
import Contract from "../Contract/Contract";
import { FaDownload } from "react-icons/fa";
import Typewriter from "../About/Typewriter";
import pdf from "/resume.pdf";

const Banner = () => {
 
   const texts = ["WEB DEVELOPER", "MERN-STACK DEVELOPER", "REACT DEVELOPER"];
   
  return (
    
    <>
      <div className="pt-20">
        <div className="grid  grid-cols-1 md:grid-cols-2 justify-evenly md:px-8 md:py-20 sm:px-4 sm:py-8">
          <div className="flex bg-white ps-10 text-black bg-opacity-50  rounded-lg flex-col md:ms-48 justify-center md:justify-start sm:p-5 md:p-10 pb-5">
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold mt-10">
            <div style={{ textAlign: 'center' }}>
        <Typewriter texts={texts} />
      </div>
            </h1>
            <p className="mt-4 md:mt-8 text-xl">
              Hi, I am KHAYRUL KOBER RAZIB. <br />I am a MERN-STACK DEVELOPER .
            </p>
            <div className="flex mt-8 sm:mt-10 gap-5">
              <a href="https://www.linkedin.com/in/kkoberrazib/">
                <img
                  className="w-7 rounded-full sm:w-10"
                  src={linkdin}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/itsrazib1">
                <img
                  className="w-8 sm:w-10 rounded-full"
                  src={github}
                  alt="GitHub"
                />
              </a>
              <a href={pdf} target="_blank" rel="noreferrer"  className="bg-orange-400 px-5 py-1 rounded-lg" ><FaDownload className="inline-block  text-white bg-cyan-600"></FaDownload>{" "}
                Download Resume</a>
             
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <img
              src={razib}
              alt="Profile"
              className=" md:w-[400px] rounded-xl  "
            />
          </div>
        </div>
        <div className="mx-4 md:mx-8">
          <div className="md:flex items-center sm:flex-col">
            <div className="font-bold text-center mt-4 mb-4 text-2xl md:text-7xl bg-gradient-to-br from-[#68ceabe7] to-transparent px-2 md:px-7">
              Tech Stack
            </div>
            <div className="flex flex-wrap items-center mx-16 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10 gap-4 mt-2 sm:mt-4 md:mt-0">
              <img className="h-8 sm:h-12 md:h-16" src={html5} alt="HTML5" />
              <img className="h-8 sm:h-12 md:h-16" src={css3} alt="CSS3" />
              <img
                className="h-8 sm:h-12 md:h-16"
                src={javascript}
                alt="JavaScript"
              />
              <img className="h-8 sm:h-12 md:h-16" src={react} alt="React" />
              <img
                className="h-8 sm:h-12 md:h-16"
                src={tailwind}
                alt="Tailwind CSS"
              />
              <img
                className="h-8 sm:h-12 md:h-16"
                src={firebase}
                alt="Firebase"
              />
              <img
                className="h-8 sm:h-12 md:h-16"
                src={bootstrap}
                alt="Firebase"
              />
              <img
                className=" h-8 sm:h-12 md:h-16"
                src={MongoDB}
                alt="Firebase"
              />
            </div>
          </div>
        </div>
      </div>

      <About></About>
      <Project></Project>
      <Contract></Contract>
    </>
  );
};

export default Banner;
