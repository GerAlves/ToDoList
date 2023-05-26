import './global.css'
import styles from './App.module.css'
import toDoLogo from './assets/ToDo-logo.svg'
import { InputTask } from './InputTask'
import { TaskList } from './TaskList'

function App() {
  

  return (
    <body>
      <div className={styles.header}>
        <header><img src={toDoLogo} alt="logomarca"/></header>
      </div>
      
      <div className={styles.tasks}>
        <InputTask />
        <TaskList />
      </div>
    </body>
  )
}

export default App
