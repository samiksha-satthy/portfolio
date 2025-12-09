import React from 'react'

function Title() {
    return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-amber-50'>
        <h1>Hello, I'm</h1>
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4"><b>Samiksha Satthy</b></h1>
        <button className='animate-bounce'></button>

    </div>)
}

export default Title;