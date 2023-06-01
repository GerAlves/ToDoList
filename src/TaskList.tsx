import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'
import { taskProps } from './App';
import { useState } from 'react'

interface TaskListProps {
  currentTasks: taskProps[];
  setCurrentTasks : React.Dispatch<React.SetStateAction<taskProps[]>>
}

export function TaskList(props : TaskListProps) {

  const [concludedTasks, setConcludedTasks] = useState(0);

  function checkmarkTask(id: number) {
    props.currentTasks.map(task => {
      if(task.id === id){
        task.checked = !task.checked
      if(task.checked === true){
        setConcludedTasks(concludedTasks + 1)
      } else {
        setConcludedTasks(concludedTasks - 1)
      }
      }
    })
  }

  function removeTask( id: number) {
    const updatedTasks = props.currentTasks.filter(task => task.id !== id)
    console.log(updatedTasks)
    props.setCurrentTasks(updatedTasks)
  }

  return(
    <div>
      <div className={styles.tasksInfo}>
        <span>
          Tarefas criadas
          <span className={styles.tasksInfoSpan}>{props.currentTasks.length ? props.currentTasks.length : 0}</span>
        </span>
        <span className={styles.tasksInfoSpan2}>
          Concluídas
          <span className={styles.tasksInfoSpan}>{concludedTasks} de {props.currentTasks.length ? props.currentTasks.length : 0}</span>
          </span>
      </div>
      <div className={styles.tasks}>
        <div className={styles.taskBox}>
          {props.currentTasks?.map((task) =>
            <div>
            <input key={task.id} type='checkbox' className={styles.customCheckbox} defaultChecked={task.checked} onClick={() => checkmarkTask(task.id)}/>
            <p>{task.content}</p> 
            <button onClick={() => removeTask(task.id)}><Trash /></button>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}