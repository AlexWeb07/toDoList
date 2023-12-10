import React from 'react'
import Header from './Header'
import Tasks from './Tasks'

function Foreground() {
    
  return (
    <div className='absolute flex justify-center items-center z-2 w-full h-full'>
        <div className='w-full h-full bg-[var(--clr3)] backdrop-blur-sm flex flex-col justify-center items-center gap-10'>
            <Header/>
            <Tasks/>
        </div>
      </div>
  )
}

export default Foreground
