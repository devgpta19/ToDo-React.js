"use client"
import React, { useRef, useState, useEffect } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import Link from 'next/link'
import MoreCards from '@/app/Listcards/page';
import { motion } from "framer-motion"



const getLocalItems = () =>{
    let list = localStorage.getItem('todo-list')

    if(list){
        return JSON.parse(list);
    }
    else{
        return []
    }
}


function Foreground() {

    const inputRef = useRef(null);

    const [task, setTask] = useState("")
    const [maintask, setMaintask] = useState(getLocalItems());

    const fun = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault() // stop form from submit the form

        setMaintask([...maintask, [task]]);
        setTask("");
    }

    let copyarray = [...maintask]

    let renderTask = maintask.map((item, index) => (
        <MoreCards ind={index} ite={item} copy={copyarray} setmain={setMaintask} reference={inputRef} > </MoreCards>
    ))


    useEffect(() => {
      return () => {
        localStorage.setItem('todo-list',JSON.stringify(maintask))
      }
    }, [maintask])
    
    console.log(maintask);


    return (
        <div className='w-full h-screen '>
            <div ref={inputRef} className='fixed p-5 top-0 left-0 z-[2] w-full h-full '>
                <div>
                    <div className='relative overflow-hidden mt-5 z-[3] flex justify-center'>
                        <form onSubmit={submitHandler}>
                            <div className='rounded-[20px] flex gap-5'>
                                <input type="text" placeholder='Enter your task' value={task} onChange={fun} className='placeholder:text-sky-900 p-2 bg-slate-300 rounded w-52 flex justify-center text-center text-zinc-950'/>
                                <button className='bg-sky-600 text-slate-100 px-5 py-2 rounded-2xl'>ADD</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {renderTask}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foreground