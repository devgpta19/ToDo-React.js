"use client"
import React from 'react'
import { motion } from "framer-motion"


const MoreCards = ({ ind, ite, copy, setmain, reference }) => {
    const deleteHandler = (ind) => {
        let copyArray = [...copy]
        copyArray.splice(ind, 1)
        setmain(copyArray)
    }

    return (
        <motion.div drag dragConstraints={reference} key={ind} className='text-zinc-100 bg-zinc-900/50 p-10 text-sm w-60 rounded-[70px] mt-5 '>
            <h2 className='text-xs font-bold flex justify-center mb-5 '>
                TASK:{ind + 1}
            </h2>
            <p>{ite}</p>
            <button onClick={() => {
                deleteHandler(ind)
            }} className='p-5 rounded-[50px] bg-green-500/40 w-full mt-10'>
                END Task
            </button>
        </motion.div>
    )
}

export default MoreCards

// drag dragConstraints={reference}