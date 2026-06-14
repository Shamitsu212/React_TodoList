import styles from "./ProjectView.module.css";

import type { project } from "../../../types/types";

import { HashIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

import Task_List from "../../UI/Task_List/Task_List";

import {
    getOverdueTasks,
    getUpcomingTasks,
    getDoneTasks
} from "../../../utils/filtres";

interface Props {
    project: project;
}

function ProjectView({ project }: Props) {

    const overdueTasks = getOverdueTasks(project.tasks);
    const upcomingTasks = getUpcomingTasks(project.tasks);
    const doneTasks = getDoneTasks(project.tasks);

    return (
        <div className={styles.view}>

            <h1 className={styles.view__h}>
                <HashIcon size={42} color={project.color} />
                {project.name}
            </h1>

            <div className={styles.view__list}>
                <h3 className={styles.list__h}>Просроченные</h3>
                <Task_List tasks={overdueTasks} />
            </div>

            <div className={styles.view__list}>
                <h3 className={styles.list__h}>Предстоящие</h3>
                <Task_List tasks={upcomingTasks} />
            </div>

            <div className={styles.view__list}>
                <h3 className={styles.list__h}>Выполненные</h3>
                <Task_List tasks={doneTasks} />
            </div>

            <Link className={styles.viev__button} to={"/addTask"}>
                <PlusIcon color="#E34432" size={32} />
                Добавить задачу
            </Link>

        </div>
    );
}

export default ProjectView;