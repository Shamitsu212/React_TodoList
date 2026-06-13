
import styles from './App.module.css'
import AddTask from './components/layout/addTask/addTask'
import Aside from './components/layout/aside/aside'
import AddProject from './components/layout/addProject/addProject'
import Task from './components/UI/task/Task'
import TaskList from './components/UI/taskList/TaskList'
import ProjectView from './components/layout/ProjectsView/ProjectView'
import Today from './components/layout/Today/Today'
import All from './components/layout/All/All'
import { useEffect, useState } from 'react'
import type { project, task } from './types/types'


function App() {

  const [projects, setProjects] = useState<project[]>([])
  const [task, setTasks] = useState<task[]>([])

  useEffect(() => {

    const allTask = projects.flatMap((p) => p.tasks)
    setTasks(allTask)

  }, [projects])

  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {

    const interval = setInterval(() =>{
      setTime(new Date())
    }, 1000)

    return clearInterval(interval);
  }, []);

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>
        <Aside projects={projects} />
      </div>

      <AddTask projects={projects} set={setProjects}/>

    </div>
  )
}

export default App
