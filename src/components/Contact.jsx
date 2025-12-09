import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Icon(props) {
    return (
        <a href={props.link} target="__blank"><img className="w-24 h-24" src={props.src} alt="contact icon " /></a>

    )

}


function Contact() {
    return (
        <div className='flex flex-rows justify-center items-center gap-2 h-auto m-4'>
            <a href="https://github.com/samiksha-satthy" target="_blank"><FaGithub size={40} /></a>
            <a href="https://www.linkedin.com/in/samikshasatthy/" target="_blank"><FaLinkedin size={40} /></a>
            <a href="mailto:ssatthy@uwaterloo.ca" target="_blank"><FaEnvelope size={40} /></a>

        </div>
    )

}

export default Contact;