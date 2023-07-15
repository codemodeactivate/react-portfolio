import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-green-2 px-10 py-20 md:p-12 lg:px-10 lg:py-10 m-auto pb-20'>
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-purple-4 font-semibold text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-purple-4'>Jeff Zenko</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-purple-3'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-800 font-semibold text-lg py-4 max-w-[700px]'>I'm a full-stack developer specializing in building functional products. Currently, I'm focused on building an app that will change the way we think of gardening</p>
            <div>
                <button className='text-gray-800 font-bold group border-4 px-6 py-3 my-2 flex items-center bg-yellow-1 border-black hover:bg-yellow-1 hover:border-yellow-1 transition focus:outline-none focus:ring shadow-[6px_6px_0_0_#000000 gap-2 hover:shadow-[6px_6px_0_0_#000] hover:scale-110'>View Work
                  <span className='group-hover:rotate-90 duration:300'>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
