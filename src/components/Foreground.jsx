import React from 'react'
import Header from './Header'
import Tasks from './Tasks'

function Foreground() {
    
  return (
    <div className='absolute flex justify-center items-center z-2 w-full h-full'>
        <div className='w-full h-full rounded-3xl bg-cyan-200/30 backdrop-blur-sm flex flex-col items-center gap-10'>
            <Header/>
            <Tasks/>
        </div>
      </div>
  )
}

export default Foreground
