import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-white border-gray-800 border-b-4 left-0 top-0 z-20 py-4 sm:px-10 px-6 backdrop-blur-md text-gray-800 text-2xl font-semibold">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-4xl font-semibold whitespace-nowrap header_font ">JZ</span>
        </a>

      {/*Menu*/}

        <ul className='md:flex hidden'>
          <li handleClick='home'>Home</li>
          <li >About</li>
          <li >Work</li>
          <li >Resume</li>
          <li >Contact</li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile Menu */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-teal-3 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>




      </div>
    </div>
  )
}

export default Navbar
