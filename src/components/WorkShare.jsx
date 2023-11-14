import React from "react";



const WorkShare = () => {
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
    // const projects = work;

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
                       <img src="src/Assets/pictures/childhood.jpg" alt="childhood"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkShare;
