import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'

export function TaskList() {
  return(
    <div>
      <div className={styles.tasksInfo}>
        <span>
          Tarefas criadas
          <span className={styles.tasksInfoSpan}>5</span>
        </span>
        <span className={styles.tasksInfoSpan2}>
          Concluídas
          <span className={styles.tasksInfoSpan}>5 de 10</span>
          </span>
      </div>
      <div className={styles.tasks}>
        <div className={styles.taskBox}>
          <div>
            <input type='checkbox'/>
            <p>task 1</p> 
            <button><Trash /></button>
          </div>
          <div>
            <input type='checkbox' />
            <p>task 2</p> 
            <button><Trash /></button>
          </div>
          <div>
            <input type='checkbox'/>
            <p>task 3</p> 
            <button><Trash /></button>
          </div>
          <div>
            <input type='checkbox'/>
            <p>task 4</p> 
            <button><Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}