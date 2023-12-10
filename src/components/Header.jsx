import React, { useContext, useState } from 'react'
import TaskContext from './context/tasks/TaskContext'

function Header() {
    const context=useContext(TaskContext)
    const {handleFilter,setAllTask,allTask}=context


    const [task,setTask]=useState("")
    const handleChange=(e)=>{
        setTask(e.target.value);
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        if(task!="")
        {
            setAllTask(allTask.concat({name:task,checked:false}))
            setTask("")
        }
    }

  return (
    <div className='header w-[45%] h-[8rem] flex flex-col justify-evenly'>
        <h1 className='flex justify-center header-h1 text-3xl font-bold text-shadow-lg text-[var(--clr2)] w-full h-[30%]'>Add your daily task</h1>
        <form className='header-form flex flex-row items-center w-[100%] h-[2.5rem] justify-evenly' onSubmit={handleAdd}>
            <select defaultValue="all" className={`header-sel w-[30%] h-[2.5rem] w-[10rem] outline-none border-none bg-[var(--clr1)] px-2 rounded-md text-sm font-bold text-[var(--clr4)]`} onChange={handleFilter}>
                <option value="all" >⇶ All</option>
                <option value="true">Completed ✓</option>
                <option value='false'>Not Completed &nbsp;✕</option>
            </select>
            <div className='header-input flex flex-row justify-center items-center h-full'>
                <input type="text" value={task} placeholder='Enter the task' className=' outline-none text-md border-2 rounded-lg pl-2 border-[var(--clr1)] h-full w-80 bg-transparent caret-[var(--clr4)] text-[var(--clr4)]' minLength={4} onChange={handleChange}/>
                <button type="submit" className='ml-4 bg-[var(--clr1)] w-[5rem] h-[2.5rem] rounded-3xl text-[var(--clr4)]'>Add</button>
            </div>
            
        </form>
    </div>
      
  )
}

export default Header
