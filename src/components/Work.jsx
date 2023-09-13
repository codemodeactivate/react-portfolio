import React from "react";

import { work } from "../work/work";

const Work = () => {
    // const bg = {
    //     //backgroundImage: `url(${PerfectDay})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     height: "250px",
    //     objectFit: "cover",
    // };

    // const bg:hover = {
    //     background-image:
    // }
    const projects = work;

    return (
        <div
            name="work"
            className="w-full min-h-screen bg-orange-1 text-gray-800 px-10 py-20 md:p-12 md:py-10 sm:py-10 lg:px-10 lg:py-10 m-auto pb-20 border-gray-800 border-b-4 mx-auto justify-center"
        >
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-gray-800 ">
                            Work
                        </p>
                        <p className="py-4">// Some of my recent work</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Gird Item */}
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                                className="max-w-sm border-4 border-black group container
              flex justify-center text-center items-center mx-auto content-div hover:scale-110"
                            >
                                {/* Hover effect for images */}
                                <div className="opacity-0 group-hover:opacity-100 ">
                                    <span className="text-2xl font-bold text-gray-800 tracking-wider">
                                        {item.name}
                                    </span>
                                    <div>
                                    <span className="px-1">{item.description}</span>
                                    </div>
                                    <div className="pt-8 text-center ">
                                        {/* Check if the github property is not an empty string */}
                {item.github !== "/" && (
                    <a href={item.github} target="_blank" rel="noreferrer">
                                            <button
                                                className="text-center px-4 py-3 m-2 text-gray-800 font-bold
                                                bg-yellow-1 border-black border-4 hover:bg-yellow-1 hover:border-yellow-1 transition focus:outline-none focus:ring shadow-[6px_6px_0_0_#000000 gap-2 hover:shadow-[6px_6px_0_0_#000] hover:scale-110"
                                            >
                                                Code
                                            </button>
                                        </a>
                                        )}
                                        {/* eslint-disable-next-line */}
                                        {/* <a href={item.live} target="_blank" rel="noreferrer">
                                            <button
                                                className="text-center px-4 py-3 m-2 text-gray-800 font-bold
                                                bg-yellow-1 border-black border-4 hover:bg-yellow-1 hover:border-yellow-1 transition focus:outline-none focus:ring shadow-[6px_6px_0_0_#000000 gap-2 hover:shadow-[6px_6px_0_0_#000] hover:scale-110"
                                            >
                                                Live
                                            </button>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
