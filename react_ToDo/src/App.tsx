
import styles from './App.module.css'
import AddTask from './components/layout/addTask/addTask'
import Aside from './components/layout/aside/aside'
import AddProject from './components/layout/addProject/addProject'


function App() {

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>
        <Aside />
      </div>

      <div className={styles.Container2}>
        <AddProject />
      </div>

    </div>
  )
}

export default App
