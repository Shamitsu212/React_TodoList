import styles from "./Task_List.module.css"

import type { task } from "../../../types/types"

import Task from "../Task/Task"

interface Props {
    tasks: task[],
}

function TaskList( {tasks} :Props){

    return(
        <div className={styles.taskList}>

            {tasks.map((task) => (
               <Task task={task} key={task.id}/>
            ))}            

        </div>
    )
    
}

export default TaskList