import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p>Hi, my name is</p>
            <h1>Jeff Zenko</h1>
            <h2>I'm a Full Stack Developer.</h2>
            <p>I'm a full-stack developer specializing in building functional products. Currently, I'm focused on building an app that will change the way we think of gardening</p>
            <div>
                <button>View Work <HiArrowNarrowRight /></button>
            </div>
        </div>

    </div>
  )
}

export default Home
