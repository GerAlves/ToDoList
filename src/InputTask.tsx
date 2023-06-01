import { useState } from 'react'
import styles from './InputTask.module.css'
import { PlusCircle } from 'phosphor-react'

interface InputTaskProps {
  handleNewTask : Function
}

export function InputTask(props: InputTaskProps){

  const [newTask, setNewTask] = useState('');

  return (
    <div className={styles.div}>
      <input 
        placeholder='Adicione uma nova tarefa'
        type='text'
        className={styles.input}
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button className={styles.button} 
        disabled={newTask === ''}
        onClick={() => {
          props.handleNewTask(newTask)
          setNewTask('');
        }}
      >
        Criar <PlusCircle size={20} weight='bold'/>
      </button>
    </div>
  )
}