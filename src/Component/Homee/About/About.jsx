import about from '../../../../public/img/about.jpg'

const About = () => {
    return (
        <div>
            <div id='about' className="hero   md:pt-28 md:px-80 sm:px-0">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <img src={about} className="max-w-sm md:h-[320px] sm:h-[300px] w-[300px] rounded-lg shadow-2xl" />
    <div className=' bg-white text-black bg-opacity-50 p-4 rounded-lg'>
      <h1 className="text-5xl font-bold">ABOUT ME</h1>
      <h3 className="py-6 text-3xl">A dedicated Front-end Developer <br />
based in Belgrade, Serbia </h3>
      <p>MERN Stack Developer with expertise in creating dynamic and responsive web applications. Proficient in JavaScript, React, Node.js, and MongoDB. Strong problem-solving skills and a passion for delivering high-quality code. Dedicated to continuous learning and staying updated with the latest industry trends.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;