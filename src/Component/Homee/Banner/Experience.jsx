

import html from "../../../../src/assets/html.png";
import css from "../../../../src/assets/css.png";
import javascript from "../../../../src/assets/javascript.png";
import reactImage from "../../../../src/assets/react.png";
import bootstrap from "../../../../src/assets/icons-hero.png";
import node from "../../../../src/assets/nodejs-1-logo-png-transparent.png";
import express from "../../../../src/assets//img.jpg";
import mongo from "../../../../src/assets/mongol.png";
import Firebase from "../../../../src/assets/firebase.png";
import github from "../../../../src/assets/github.png";
import tailwind from "../../../../src/assets/tailwind.png";
import Nextjs from "../../../../src/assets/nextjs.png";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-violet-700",
        },
        {
            id: 4,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },


        {
            id: 7,
            src: node,
            title: "Node.js",
            style: "shadow-green-700",
        },
        {
            id: 8,
            src: express,
            title: "Express.js",
            style: "shadow-yellow-700",
        },
        {
            id: 9,
            src: mongo,
            title: "Mongodb",
            style: "shadow-green-700",
        },
        {
            id: 10,
            src: Firebase,
            title: "Firebase",
            style: "shadow-yellow-700",
        },
        {
            id: 11,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 12,
            src: Nextjs,
            title: "Next JS",
            style: "shadow-gray-400",
        }
    ];

    return (
        <div className="text-center body  h-auto py-12">
            <div
                name="Skills"
                className=""
            >

                <div className="max-w-screen-lg p-4 mx-auto justify-center  h-auto">

                    <div data-aos="flip-left" className="mt-6 text-white">
                        <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
                            My Skills
                        </p>
                        <p className="py-6">Check out some of my skills right here</p>
                    </div>

                    <div data-aos="zoom-in" className="w-full  h-auto grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-6 px-12 sm:px-0">
                        {techs.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`bg-gradient-to-b to-gray-800 from-black shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4 sm:text-base text-xs text-white">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;










