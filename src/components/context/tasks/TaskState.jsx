import React, { useState } from 'react'
import TaskContext from './TaskContext'

function TaskState(props) {
    let initialTask= [ ]
    const [allTask,setAllTask]=useState(initialTask)
    
    const handleChange=(id)=>{
        setAllTask(allTask.filter((value,index)=>{
                if(index===id){
                    value.checked = !value.checked;
                }
                return value;
        }))
    }
    const handleDelete=(id)=>{
       setAllTask(allTask.filter((value, index) => {
            if (index != id) {
                return value
            }
        }))
        console.log(allTask);
    }

    const [filter,setFilter]=useState(null)
    const handleFilter=(e)=>{
        if(e.target.value==="true")
        setFilter(true)
        else if(e.target.value==="false")
        setFilter(false)
        else
        setFilter(null)
    }
  return (
    <TaskContext.Provider value={{handleChange, handleDelete, allTask, handleFilter, filter, setAllTask}}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
