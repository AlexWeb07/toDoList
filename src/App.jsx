import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import TaskState from './components/context/tasks/TaskState'

function App() {
  return (
    <TaskState>
        <Background/>
        <Foreground/>
    </TaskState>
  )
}

export default App
