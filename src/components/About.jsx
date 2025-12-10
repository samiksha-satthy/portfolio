import React from 'react'
import headshot from '../assets/img/headshot.JPG'

function About(){


    return (
        <div className='flex gap-20 h-screen w-full items-center justify-center' id="about">
            <div className='flex flex-col gap-10'>
                <h1 className='text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4'><b>About Me</b></h1>
                <p className='text-white w-100 self-center'>im a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering student</p> 
            </div>
            <img className='w-150 h-max mx-4 group min-h-[400px] bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10 ' src={headshot} alt="" />
        </div>
    )
}

export default About;