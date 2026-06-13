import styles from "./ProjectView.module.css"

import type { project } from "../../../types/types";
import { HashIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";
import TaskList from "../../UI/taskList/TaskList";

interface Props {
    project: project
}

function ProjectView({project}:Props){

    return(
        <div className={styles.view}>

                <h1 className={styles.view__h}>
                    <HashIcon size={42} color={project.color}/>   
                    {project.name}
                </h1>

                <div className={styles.view__list}>
                    <TaskList tasks={project.tasks} />
                </div>

                <button className={styles.viev__button}>
                    <PlusIcon color="#E34432" size={32}/>Добавить задачу
                </button>

        </div>
    )
}

export default ProjectView