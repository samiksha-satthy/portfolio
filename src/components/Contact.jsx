import React from 'react'
import linkedin from '../assets/img/linkedin.jpg'
import email from '../assets/img/email.jpg'
import github from '../assets/img/github.png'

function Icon(props){
    return (
        <a href={props.link} target="__blank"><img className="w-24 h-24" src={props.src} alt="contact icon " /></a>
        
    )
    
}


function Contact(){
    return(
        <div className='flex flex-col justify-center items-center gap-15 h-auto'>
        <h1 className='text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4'><b>Contact Me</b></h1>
        <div className='flex gap-20 mb-20'>
            <Icon src={linkedin} link="https://www.linkedin.com/in/samikshasatthy/"/>
            <Icon src={email} link="mailto:ssatthy@uwaterloo.ca"/>
            <Icon src={github} link="https://github.com/samiksha-satthy"/>
        </div>
    </div>
    )

}

export default Contact;