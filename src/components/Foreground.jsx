import React from 'react'
import Header from './Header'
import Tasks from './Tasks'

function Foreground() {
    
  return (
    <div className='fg absolute flex justify-center items-center flex-col justify-center gap-10 z-2 w-full h-full bg-[var(--clr4)]'>
            <Header/>
            <Tasks/>
        </div>
  )
}

export default Foreground
