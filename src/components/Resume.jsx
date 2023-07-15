import React from "react";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import ReactImg from "../Assets/react.png";
import Node from "../Assets/node.png";


import Tailwind from "../Assets/tailwind.png";
import Mongo from "../Assets/mongo.png";
import Express from "../Assets/express.svg";
import { HiArrowNarrowRight } from 'react-icons/hi'


const Skills = () => {
    return (
        <div
            name="resume"
            className="w-full min-h-screen bg-teal-2 text-gray-800 px-10 py-20 md:p-12 md:py-10 sm:py-10 lg:px-10 lg:py-10 m-auto pb-20 border-gray-800 border-b-4"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-800 ">
                        Resume
                    </p>
                    <p className="py-4">
                        // These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="HTML icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={JavaScript}
                            alt="HTML icon"
                        />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={ReactImg}
                            alt="HTML icon"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Express}
                            alt="HTML icon"
                        />
                        <p className="my-4">Express</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="HTML icon"
                        />
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Mongo}
                            alt="HTML icon"
                        />
                        <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Tailwind}
                            alt="HTML icon"
                        />
                        <p className="my-4">TAILWIND</p>
                    </div>
                    <div>
                <button className='text-gray-800 font-bold group border-4 px-6 py-3 my-2 flex items-center bg-yellow-1 border-black hover:bg-yellow-1 hover:border-yellow-1 transition focus:outline-none focus:ring shadow-[6px_6px_0_0_#000000 gap-2 hover:shadow-[6px_6px_0_0_#000] hover:scale-110'>View Resume
                  <span className='group-hover:rotate-90 duration:300'>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
