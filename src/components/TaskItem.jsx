import React, { useContext } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TaskContext from './context/tasks/TaskContext';

function TaskItem(props) {
    const context=useContext(TaskContext)
    const {handleDelete,handleChange} = context;
    const {task,id}=props;
    
  return (
        <div className='flex shrink-0 group/task flex-row justify-start items-center w-full h-[max-content] border-transparent border-b-[var(--clr2)] border-2 transition'>
            <div className="w-[2rem] h-full flex items-start justify-start pl-[0.2rem] py-[0.5rem] mr-[0.2rem]">
                <input type="checkbox" className='w-[1.25rem] h-[1.25rem] accent-[var(--clr2)]' checked={task.checked} onChange={()=>{handleChange(id)}}/>
            </div>
            <div className='w-[92%] h-full flex flex-col relative'>
                <p id="ttext" className={`text-md h-[100%] w-[100%] text-[var(--clr1)] font-semibold overflow-scroll py-1 ${task.checked && "line-through text-[var(--clr2)]"}`}>{task.name}</p>
                <span className=' bg-[var(--clr1)] absolute bottom-0 right-0 rounded-md flex flex-row items-center justify-center invisible group-hover/task:visible text-lg w-[5rem]] h-[2rem]'>
                    <MdDelete className='text-[var(--clr4)] hover:text-[var(--clr3)] text-2xl ]' onClick={()=>handleDelete(id)}/>
                </span>
            </div>
        </div>
  )
}

export default TaskItem
