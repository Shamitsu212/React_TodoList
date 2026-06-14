import styles from "./Task.module.css"

import type { task } from "../../../types/types"

import { Clock } from "lucide-react"
import { Calendar } from "lucide-react"

interface Props {
    task: task,
}

function Task( { task } :Props){

    return(
        <article className={styles.Task}>

            <input type="radio" className={styles.Task__radio}/>

            <div className={styles.Task__Content}>

                <p className={styles.Content__name}>
                    
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