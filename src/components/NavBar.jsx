import React from 'react'

function NavLink(props){
    return (
        <div>
            <h1 className='black'>{props.title}</h1>
        </div>
    )

}

function NavBar(){
    return (<div className='fixed top-0 bg-white w-5/6 inline-flex justify-center '>
        <NavLink title="hello"/>
    </div>)
}

export default NavBar;