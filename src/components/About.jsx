import React from 'react'
import headshot from '../assets/headshot.JPG'

function About(){


    return (
        <div className='flex gap-20 h-screen w-full bg-amber-50 items-center justify-center'>
            <div className='flex flex-col gap-20 justify-center items-center'>
                <h1 className='text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4'><b>About Me</b></h1>
                <p className='text-black w-100'>im a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering studentim a computer engineering student</p> 
            </div>
            <img className='w-150 h-max hover:animate-bounce border-5 border-purple-400' src={headshot} alt="" />
        </div>
    )
}

export default About;