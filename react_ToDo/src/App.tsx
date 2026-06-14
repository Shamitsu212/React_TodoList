import { useEffect, useState } from 'react'

import type { project, task,} from './types/types'

import { AppContext } from "./context/AppContext";
import { routes } from './routes/routes';

import { Routes, Route } from 'react-router-dom'


function App() {

  const [projects, setProjects] = useState<project[]>([])
  const [tasks, setTasks] = useState<task[]>([])

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

  const toggleTaskStatus = (projectId: number, taskId: number) => {

    setProjects(prev => prev.map(pr => pr.id === projectId ? {
      ...pr,
      tasks: pr.tasks.map(task => task.id === taskId ? 
        {
          ...task,
          status: task.status === "todo" ? "done" : "todo"
        }
        : 
        task
      )
    }
    : pr
  ));

};

  return (

    <AppContext.Provider value={{projects, setProjects, tasks, setTasks, time, toggleTaskStatus }}>

      <Routes>

        {routes.map((route) =>(
          <Route key={route.path} path={route.path} element={<route.Component/>} />
        ))}

      </Routes>

    </AppContext.Provider>

  )
}

export default App
