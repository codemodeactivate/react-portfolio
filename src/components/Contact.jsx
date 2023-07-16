import React from 'react'
import ContactForm from './ContactForm'



const Contact = () => {





  return (
    <div name='contact' className='w-full h-screen bg-purple-2 px-10 py-20 md:p-12 lg:px-10 lg:py-10 m-auto pb-20 border-gray-800 border-b-4'>
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
           <ContactForm />
            </div>
        </div>


  )
}

export default Contact
