import React, { useContext } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TaskContext from './context/tasks/TaskContext';

function TaskItem(props) {
    const context=useContext(TaskContext)
    const {handleDelete,handleChange} = context;
    const {task,id}=props;
    
  return (
        <div className='flex shrink-0 group/task flex-row justify-start items-center w-full h-[15%] border-transparent border-b-zinc-900/50 border-2 transition'>
            <div className="w-[10%] h-full flex items-center justify-start pl-5">
                <input type="checkbox" className='w-[20px] h-[20px] bg-transparent' checked={task.checked} onChange={()=>{handleChange(id)}}/>
            </div>
            <div className='w-[92%] h-full flex flex-col relative'>
                <p id="ttext" className={`text-md h-[100%] w-[100%] text-blue-800 overflow-scroll py-2 mb-2 ${task.checked && "line-through text-blue-500"}`}>{task.name}</p>
                <span className='absolute bottom-0 right-0 bg-white/100 rounded-md flex gap-4 flex-row items-center justify-center invisible group-hover/task:visible text-lg w-[7%] h-[45%]'>
                    <MdDelete className='text-red-600 hover:text-red-800 text-2xl' onClick={()=>handleDelete(id)}/>
                </span>
            </div>
        </div>
  )
}

export default TaskItem
