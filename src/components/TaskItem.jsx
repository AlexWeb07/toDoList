import React, { useContext } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TaskContext from './context/tasks/TaskContext';

function TaskItem(props) {
    const context=useContext(TaskContext)
    const {handleDelete,handleChange} = context;
    const {task,id}=props;
    
  return (
        <div className='flex shrink-0 group/task flex-row justify-start items-center w-full h-[max-content] border-transparent border-b-zinc-900/50 border-2 transition'>
            <div className="w-[10%] h-full flex items-start justify-start pl-5 py-2">
                <input type="checkbox" className='w-[20px] h-[20px] accent-[var(--clr4)]' checked={task.checked} onChange={()=>{handleChange(id)}}/>
            </div>
            <div className='w-[92%] h-full flex flex-col relative'>
                <p id="ttext" className={`text-md h-[100%] w-[100%] overflow-scroll py-1 capitalize ${task.checked && "line-through text-[var(--clr4)]"}`}>{task.name}</p>
                <span className='absolute bottom-0 right-0 bg-white/100 rounded-md flex flex-row items-center justify-center invisible group-hover/task:visible text-lg w-[5rem]] h-[2rem]'>
                    <MdDelete className='text-pink-500 hover:text-pink-800 text-2xl' onClick={()=>handleDelete(id)}/>
                </span>
            </div>
        </div>
  )
}

export default TaskItem
