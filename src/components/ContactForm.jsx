import React from 'react'
import { useState } from 'react';
import styles from './ContactForm.module.css';



export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message
        };

        // Here you can now do something with the form data
        console.log(formData);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };




    return (

<div name='contact' className={`${styles.formArea} w-full h-screen bg-white flex flex-col justify-center items-center p-4`}>

    <h1 className='text-3xl font-bold mb-4 text-gray-800'>Contact Form</h1>
    <form method='POST' action={process.env.REACT_APP_FORM_ENDPOINT} className='flex flex-col max-w-[600px] w-full'>
        <input className={`${styles.formStyle} bg-white p-2`} type="text" placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} />
        <input className={`${styles.formStyle} my-4 p-2 bg-white`} type="email" placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        <textarea className={`${styles.formStyle} my-4 p-2 bg-white`} name="message" rows="10" placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <div className="w-full flex justify-center">
            <button type="submit" className='text-gray-900 w-48 font-bold group border-4 px-6 py-3 my-2 flex items-center bg-yellow-1 border-black hover:bg-yellow-1 hover:border-yellow-1 transition focus:outline-none focus:ring shadow-[6px_6px_0_0_#000000 gap-2 hover:shadow-[6px_6px_0_0_#000] hover:scale-110 justify-center'>Send</button>
        </div>
    </form>
</div>




    );
};

export default ContactForm
