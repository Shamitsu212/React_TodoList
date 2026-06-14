import styles from "./All.module.css";

import type { project } from "../../../types/types";

import { PlusIcon, Calendar, HashIcon } from "lucide-react";
import { Link } from "react-router-dom";

import Task_List from "../../UI/Task_List/Task_List";

import {
    getOverdueTasks,
    getUpcomingTasks,
    getDoneTasks
} from "../../../utils/filtres"

interface Props {
    projects: project[];
}

function All({ projects }: Props) {

    return (

        <div className={styles.view}>

            <h1 className={styles.view__h}>
                <Calendar size={42} />
                Все
            </h1>

            {projects.map((pr) => {
                const overdueTasks = getOverdueTasks(pr.tasks);
                const upcomingTasks = getUpcomingTasks(pr.tasks);
                const doneTasks = getDoneTasks(pr.tasks);

                return (
                    <div key={pr.id}>

                        <h2 className={styles.view__h2}>
                            <HashIcon color={pr.color} size={34} />
                            {pr.name}
                        </h2>

                        <div className={styles.view__list}>
                            <h3 className={styles.list__h}>
                                Просроченные
                            </h3>
                            <Task_List tasks={overdueTasks} />
                        </div>

                        <div className={styles.view__list}>
                            <h3 className={styles.list__h}>
                                Предстоящие
                            </h3>
                            <Task_List tasks={upcomingTasks} />
                        </div>

                        <div className={styles.view__list}>
                            <h3 className={styles.list__h}>
                                Выполненные
                            </h3>
                            <Task_List tasks={doneTasks} />
                        </div>

                        <Link className={styles.viev__button} to={"/addTask"}>
                            <PlusIcon color="#E34432" size={32} />
                            Добавить задачу
                        </Link>

                    </div>
                );
            })}

        </div>
    );
}

export default All;