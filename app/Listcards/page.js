"use client"
import React from 'react'
import { motion } from "framer-motion"
// import {  } from "../app/";


const MoreCards = ({ ind, ite, copy, setmain, reference }) => {

    const deleteHandler = (ind) => {
        console.log(ind);
        let copyArray = [...copy]
        copyArray.splice(ind, 1)
        console.log(copyArray);
        setmain(copyArray)
    }

    return (
        <motion.div drag dragConstraints={reference} key={ind} className='text-zinc-100 bg-zinc-900/50 p-10 text-sm w-60 rounded-[70px] mt-5 '>
            <h2 className='text-xs font-bold text-green-600 flex justify-center mb-5 '>
                TASK:{ind + 1}
            </h2>
            <p className='font-semibold flex justify-center'>{ite}</p>
            <button onClick={() => {
                deleteHandler(ind)
            }} className='p-5 rounded-[50px] buttom-10 bg-green-500/40 w-full mt-[3vw]'>
                END Task
            </button>
        </motion.div>
    )
}

export default MoreCards

// drag dragConstraints={reference}