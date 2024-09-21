import React from 'react'
import Foreground from './Foreground/page'
import Background from './Background/page'


function page(props) {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />

      
      
    </div>
  )
}

export default page
