import styles from './InputTask.module.css'
import { PlusCircle } from 'phosphor-react'

export function InputTask(){
  return (
    <div className={styles.div}>
      <input 
        placeholder='Adicione uma nova tarefa'
        type='text'
        className={styles.input}
      />
      <button className={styles.button}>Criar <PlusCircle size={20} weight='bold'/></button>
    </div>
  )
}