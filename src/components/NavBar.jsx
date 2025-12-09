import React from 'react'
import Contact from './Contact'

function NavLink(props){
    return (
        <div>
            <h2 className='black'>{props.title}</h2>
        </div>
    )

}

function NavBar(){
    return (<div className='flex-row fixed z-50 top-0 bg-transparent w-full inline-flex justify-between'>
        <h2 className='font-lg pl-4 pt-4 font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300'>samiksha satthy</h2>
        <div className='flex flex-row gap-2 border-2 rounded-2xl m-4 justify-center items-center'>
            <NavLink title="About"/>
        </div>
        <Contact/>
    </div>)
}

export default NavBar;