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
    <div className='w-[45%] h-40 flex flex-column flex-wrap justify-center items-center'>
        <h1 className='text-3xl font-bold text-indigo-600'>Add your daily task</h1>
        <form className='flex flex-row h-10 w-full justify-center gap-10' onSubmit={handleAdd}>
            <select defaultValue="all" className={`outline-none border-none bg-sky-800 px-2 rounded-md text-sm font-bold text-lime-200`} onChange={handleFilter}>
                <option value="all" >⇶ All</option>
                <option value="true">Completed ✓</option>
                <option value='false'>Not Completed &nbsp;✕</option>
            </select>
            <div className=' flex justify-center items-center h-full'>
                <input type="text" value={task} placeholder='Enter the task' className=' outline-none border-transparent border-2 border-b-sky-500 t pl-3 h-full w-80 bg-transparent' minLength={4} onChange={handleChange}/>
                <button type="submit" className='ml-4 text-blue-600'>Add</button>
            </div>
            
        </form>
    </div>
      
  )
}

export default Header
