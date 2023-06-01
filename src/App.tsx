import './global.css'
import styles from './App.module.css'
import toDoLogo from './assets/ToDo-logo.svg'
import { InputTask } from './InputTask'
import { TaskList } from './TaskList'
import { useState } from 'react'

export interface taskProps {
  id: number,
  content: string,
  checked : boolean,
}

function App() {

  const [currentTasks, setCurrentTasks] = useState<taskProps[]>([]);
  
  function handleNewTask(newTask: string) {
    const taskId = currentTasks.length ? currentTasks.length : 0
    const handleTaskCreation : taskProps = {
      id: taskId,
      content: newTask,
      checked: false,
    }
    const updatedTasks = [handleTaskCreation, ...currentTasks];
    setCurrentTasks(updatedTasks);
  }


  return (
    <main>
      <div className={styles.header}>
        <header><img src={toDoLogo} alt="logomarca"/></header>
      </div>
      
      <div className={styles.tasks}>
        <InputTask handleNewTask={handleNewTask}/>
        <TaskList currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      </div>
    </main>
  )
}

export default App
