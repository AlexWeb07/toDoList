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
    <div className='header h-[8rem] flex flex-col justify-evenly'>
        <h1 className='flex justify-center header-h1 text-5xl font-bold text-[var(--clr1)] w-full'>TO-DO List</h1>
        <form className='header-form flex flex-row items-center w-[100%] h-[2.5rem] justify-evenly' onSubmit={handleAdd}>

            {/* for small screen */}
            <div className="small-sc hidden">
                <select defaultValue="all" className={`header-sel h-[2.5rem] w-[10rem] outline-none border-none bg-[var(--clr4)] px-2 rounded-md text-sm mr-2 font-bold text-[var(--clr2)]`} onChange={handleFilter}>
                    <option value="all" >⇶ All</option>
                    <option value="true">Completed ✓</option>
                    <option value='false'>Not Completed &nbsp;✕</option>
                </select>
                <button type="submit" className='header-add ml-4 bg-[var(--clr1)] w-[5rem] h-[2.5rem] rounded-3xl text-[var(--clr4)] outline-[var(--clr3)] border-transparent hover:bg-[var(--clr2)] hover:text-[var(--clr4)]'>Add</button>
            </div>


            <select defaultValue="all" className={`lg w-[30%] h-[2.5rem] w-[10rem] outline-none border-none bg-[var(--clr4)] px-2 rounded-md text-sm mr-2 font-bold text-[var(--clr2)]`} onChange={handleFilter}>
                    <option value="all" >⇶ All</option>
                    <option value="true">Completed ✓</option>
                    <option value='false'>Not Completed &nbsp;✕</option>
            </select>
            <div className='header-action flex flex-row justify-center items-center h-full'>
                <input type="text" value={task} placeholder='Enter the task' className='header-input outline-none text-md border-2 rounded-sm pl-2 border-[var(--clr4)] h-full w-80  bg-[var(--clr4)] caret-[var(--clr2)] text-[var(--clr2)]' minLength={4} onChange={handleChange}/>
                <button type="submit" className='lg header-add ml-4 bg-[var(--clr1)] w-[5rem] h-[2.5rem] rounded-3xl text-[var(--clr4)] outline-[var(--clr3)] border-transparent hover:bg-[var(--clr2)] hover:text-[var(--clr4)]'>Add</button>
            </div>
            
        </form>
    </div>
      
  )
}

export default Header
