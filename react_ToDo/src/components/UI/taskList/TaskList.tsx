import styles from "./taskList.module.css"

import type { task } from "../../../types/types"
import Task from "../task/Task"

interface Props {
    tasks: task[],
}

function TaskList({tasks}:Props){

    return(
        <div className={styles.taskList}>

            {tasks.map((task) => (
               <Task task={task} />
            ))}            

        </div>
    )
    

}

export default TaskList