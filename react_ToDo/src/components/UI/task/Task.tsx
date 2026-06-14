import styles from "./Task.module.css"

import type { task } from "../../../types/types"

import { Clock } from "lucide-react"
import { Calendar } from "lucide-react"

import { isTaskOverdue } from "../../../utils/Overdue"

import { useAppContext } from "../../../context/AppContext"

interface Props {
    task: task,
}

function Task( { task } :Props){

    const { toggleTaskStatus } = useAppContext()

    const isOverdue = isTaskOverdue(task)
    

    return(
        <article className={styles.Task}>

            <input type="checkbox" className={styles.Task__radio} onChange={() => toggleTaskStatus(task.projectId, task.id)}/>

            <div className={styles.Task__Content}>

                <p className={styles.Content__name} style={{color: task.status === "done" ? "green" : isOverdue ? "red" : "black"}}>
                    
                    {task.name}

                </p>

                <div className={styles.Content__timeContainer}>

                    <time className={styles.timeContainer__time}>

                        <Clock size={14} />

                        {task.time}

                    </time>

                    <time className={styles.timeContainer__date}>

                        <Calendar size={14} />

                        {task.date}

                    </time>

                </div>

            </div>
                
        </article>
    )
}

export default Task