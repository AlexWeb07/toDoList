import React, { useContext} from 'react'
import TaskItem from './TaskItem'
import TaskContext from './context/tasks/TaskContext'

function Tasks() {
    const context = useContext(TaskContext)
    const {allTask,filter}=context
    let flag=0;
  return (
    <div className='tasks flex flex-col items-start overflow-hidden w-[35rem] h-[30rem] overflow-y-scroll cursor-pointer bg-[var(--clr4)] p-2'>
        {allTask.length!==0 ?
            (allTask.map((value,index)=>{
                  if(filter===null)
                    return <TaskItem key={index} id={index} task={value} />               
                  else {
                    flag++;
                    return (value.checked===filter && <TaskItem key={index} id={index} task={value} />)
                  }
            })) 
            : <div className='flex w-full h-full text-2xl items-center justify-center text-[var(--clr1)]'>No task to do..</div>}
          
    </div>
  )
}

export default Tasks
