import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center bg-white border-gray-800 border-b-4 left-0 top-0 z-20 py-4 sm:px-10 px-6 backdrop-blur-md text-gray-800 text-2xl font-semibold">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap header_font ">
                        JZ
                    </span>
                </a>

                {/*Menu*/}

                <ul className="md:flex hidden">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="work"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="resume"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute top-0 left-0 w-full h-screen bg-teal-3 flex flex-col justify-center items-center"
                    }
                >
                    <li className="py-6 text-4xl">
                        <Link
                            to="home"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            onClick={() => setNav(false)}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="py-6 text-4xl">
                        <Link
                            to="about"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            onClick={() => setNav(false)}
                        >
                            About
                        </Link>
                    </li>

                    <li className="py-6 text-4xl">
                        <Link
                            to="work"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            onClick={() => setNav(false)}
                        >
                            Work
                        </Link>
                    </li>

                    <li className="py-6 text-4xl">
                        <Link
                            to="resume"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            onClick={() => setNav(false)}
                        >
                            Resume
                        </Link>
                    </li>

                    <li className="py-6 text-4xl">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={300}
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            onClick={() => setNav(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
