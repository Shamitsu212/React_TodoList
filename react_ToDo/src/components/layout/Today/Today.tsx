import styles from "./Today.module.css"

import type { project } from "../../../types/types";
import { PlusIcon } from "lucide-react";
import { Calendar } from "lucide-react";
import { HashIcon } from "lucide-react";
import TaskList from "../../UI/taskList/TaskList";

interface Props {
    projects: project[]
}

function Today({projects}:Props){

    return(
        <div className={styles.view}>

                <h1 className={styles.view__h}>
                    <Calendar size={42} />   
                    Сегодня
                </h1>

                {projects.map((pr) => (

                    <div>

                        <h2 className={styles.view__h2}>
                            <HashIcon color={pr.color} size={34} />
                            {pr.name}
                        </h2>

                        <div className={styles.view__list}>
                            <TaskList tasks={pr.tasks} />
                        </div>

                        <button className={styles.viev__button}>
                            <PlusIcon color="#E34432" size={32}/>Добавить задачу
                        </button>

                    </div>

                ))}
                

        </div>
    )
}

export default Today