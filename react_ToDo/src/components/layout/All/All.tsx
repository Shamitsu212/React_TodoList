import styles from "./All.module.css"

import type { project } from "../../../types/types";

import { PlusIcon } from "lucide-react";
import { Calendar } from "lucide-react";
import { HashIcon } from "lucide-react";

import { Link } from "react-router-dom";

import TaskList from "../../UI/Task_List/Task_List";

interface Props {
    projects: project[]
}

function All( {projects} :Props){

    return(
        <div className={styles.view}>

                <h1 className={styles.view__h}>

                    <Calendar size={42} />   

                    Все

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

                        <Link className={styles.viev__button} to={"/addTask"}>

                            <PlusIcon color="#E34432" size={32}/>Добавить задачу

                        </Link>

                    </div>

                ))}
        </div>
    )
}

export default All