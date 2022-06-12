import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <div name='contact' className="contact w-full h-screen bg-black flex justify-center items-center p-4">
      <form method='POST' action="https://getform.io/f/c752447b-bad0-4251-96fb-699ef977beb6" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-gray-300">CONTACT</p>
          <p className='text-gray-300 py-4'>Please submit the form below or shoot me an email - louis.sw.cho@gmail.com</p>
        </div>
        <input className= 'my-4 p-2 bg-[white]' type="text" placeholder="Name" name='name' />
        <input className= 'my-4 p-2 bg-[white]' type="email" placeholder="Email" name='email' />
        <textarea className= 'bg-[white] p-2' name="message" rows="10" placeholder="Message"></textarea>
        <button className= 'text-white border-2 hover:bg-white hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate!</button>
      </form>
    </div>
  )
}

export default Contact 
