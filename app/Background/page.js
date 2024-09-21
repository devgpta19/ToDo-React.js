import React from 'react'

function Background() {
    return (
        <>
            <div className=' fixed z-[2] flex justify-center items-center w-full h-screen bg-zinc-800'>
                <div className=''>
                    <h1 className='text-[13vw] text-center font-semibold text-zinc-900 leading-none tracking-tighter'>todo.</h1>
                    <h2 className='text-center text-zinc-300/40 mb-10' >Try to <span className='text-green-500' >DRAG</span> your <span className='text-green-500' >TASKS</span>.</h2>
                </div>
            </div>

        </>
    )
}

export default Background