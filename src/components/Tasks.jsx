import React, { useContext} from 'react'
import TaskItem from './TaskItem'
import TaskContext from './context/tasks/TaskContext'

function Tasks() {
    const context = useContext(TaskContext)
    const {allTask,filter}=context
    let flag=0;
  return (
    <div className='tasks flex flex-col items-start w-[45%] h-[65%] bg-white/30 p-2 overflow-y-scroll cursor-pointer'>
        {allTask.length!==0 ?
            (allTask.map((value,index)=>{
                  if(filter===null)
                    return <TaskItem key={index} id={index} task={value} />               
                  else {
                    flag++;
                    return (value.checked===filter && <TaskItem key={index} id={index} task={value} />)
                  }
            })) 
            : <div className='flex w-full h-full text-2xl text-yellow-700 items-center justify-center'>No task to do..</div>}
          
    </div>
  )
}

export default Tasks
