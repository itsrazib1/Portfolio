
import Front from "../../../assets/images.png";
import mern from "../../../assets/Mern.png";
import ui from "../../../assets/ui.jpg";
import team from "../../../assets/Team-work.png";
import clean from "../../../assets/Cleancode.png";
import bugs from "../../../assets/Bug.png";
const MyServices = () => {
    return (
        <div className="text-center px-8 md:px-20  py-16">

            <div >
                <div data-aos="flip-up" className="pb-8 text-white">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
                        My Services
                    </p>
                    <p className="py-6">Check out some of my Services</p>
                </div>

            </div>
            <div className=" gap-16 grid  grid-cols-1 md:grid-cols-3 text-white">
                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl ">

                    <img src={Front} alt="" className="w-20 mx-auto" />



                    <h1 className="text-xl py-4">Front-End Development</h1>
                    <p>I can easily develop your Front-End Web Applactions into code within few time.I will use HTML, CSS, Tailwind CSS, Bootstrap, JavaScript and React.js to Design Your Website.</p>

                </div>
                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl " >
                    <img src={mern} alt="" className="w-20 mx-auto" />
                    <h1 className="text-xl py-4">MERN Stack Web Developer</h1>
                    <p>A perfect website where user can do anything with few easy steps or a website which need to manage data is easily possible with MERN technology.,</p>

                </div>
                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl ">
                    <img src={ui} alt="" className="w-20 mx-auto" />
                    <h1 className="text-xl py-4">UI & UX Design</h1>
                    <p>I am a passionate web developer with a knack for crafting seamless user experiences and visually appealing interfaces</p>


                </div>


                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl ">
                    <img src={team} alt="" className="w-20 mx-auto" />
                    <h1 className="text-xl py-4">Team Working</h1>
                    <p>In work in team Project,I foster open communication, collaboration, and respect. I embrace creativity and innovation, promoting a positive and inclusive environment.</p>
                </div>
                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl ">
                    <img src={clean} alt="" className="w-20 mx-auto" />
                    <h1 className="text-xl py-4">Clean Code</h1>
                    <p>
                        I specialize in writing clean, developer-friendly code. Clean code is efficient, maintainable, and easy to understand. I includes clear comments, meaningful titles, and avoids redundancy. </p>

                </div>
                <div className="hover:bg-blue-500 shadow-blue-500/50  py-6 px-4  shadow-xl ">
                    <img src={bugs} alt="" className="w-20 mx-auto border" />
                    <h1 className="text-xl py-4">Bugs and Problems Solutions</h1>
                    <p> I provide comprehensive solutions for various website problems, including design, functionality,addressing design and technical issues. </p>
                </div>
            </div>

        </div>

    );
};

export default MyServices;