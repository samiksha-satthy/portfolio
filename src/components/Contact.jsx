import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {
    return (
        <div className='flex flex-rows justify-center items-center gap-2 h-auto m-4'>
            <a href="https://github.com/samiksha-satthy" target="_blank" className='hover:opacity-35'><FaGithub size={40} className="dark:text-white"/></a>
            <a href="https://www.linkedin.com/in/samikshasatthy/" target="_blank" className='hover:opacity-35'><FaLinkedin size={40} className="dark:text-white"/></a>
            <a href="mailto:ssatthy@uwaterloo.ca" target="_blank" className='hover:opacity-35'><FaEnvelope size={40} className="dark:text-white"/></a>

        </div>
    )

}

export default Contact;