import styles from "./ProjectView.module.css"

import type { project } from "../../../types/types";

import { HashIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

import TaskList from "../../UI/Task_List/Task_List";

interface Props {
    project: project
}

function ProjectView( {project} :Props){

    return(
        <div className={styles.view}>

                <h1 className={styles.view__h}>

                    <HashIcon size={42} color={project.color}/> 

                    {project.name}

                </h1>

                <div className={styles.view__list}>

                    <TaskList tasks={project.tasks} />

                </div>

                <Link className={styles.viev__button} to={"/addTask"}>

                    <PlusIcon color="#E34432" size={32}/>Добавить задачу

                </Link>

        </div>
    )
}

export default ProjectView