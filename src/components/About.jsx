import React from "react";
import avatar from "../Assets/avatar.jpg";
const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-pink-2 text-gray-800 px-10 py-20 md:p-12 md:py-10 sm:py-10 lg:px-10 lg:py-10 m-auto pb-20 border-gray-800 border-b-4"
        >
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right py-8 sm:py-4">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-800">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow:hidden border-4 border-black sm:h-full lg:order-last lg:h-full md:block hidden">
    <img
        src={avatar}
        alt="avatar"
        className="h-full w-full object-cover"
    />
</div>


                    <div className="sm:text-right text-4xl font-bold text-gray-800">
                        <p>
                            I am passionate about building excellent software
                            that improves the lives of those around me. I
                            specialize in creating software for clients ranging
                            from individuals and small-businesses all the way to
                            large enterprise corporations. What would you do if
                            you had a software expert available at your
                            fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
