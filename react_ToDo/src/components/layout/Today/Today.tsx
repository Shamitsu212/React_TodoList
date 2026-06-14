import styles from "./Today.module.css";

import type { task } from "../../../types/types";

import { PlusIcon, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import Task_List from "../../UI/Task_List/Task_List";

import {
    getOverdueTasks,
    getUpcomingTasks,
    getDoneTasks
} from "../../../utils/filtres";
import { useAppContext } from "../../../context/AppContext";

interface Props {
    tasks: task[];
}

function Today({ tasks }: Props) {

    const {projects} = useAppContext()

    const today = new Date().toLocaleDateString("ru-RU");

    const todayTasks = tasks.filter(t => t.date === today);

    const overdue = getOverdueTasks(todayTasks);
    const todo = getUpcomingTasks(todayTasks);
    const done = getDoneTasks(todayTasks);

    return (
        <div className={styles.view}>

            <h1 className={styles.view__h}>
                <Calendar size={42} />
                Сегодня
            </h1>

            <div>
                <div className={styles.view__list}>
                    <h3 className={styles.list__h}>Просроченные</h3>
                    <Task_List tasks={overdue} />
                </div>

                <div className={styles.view__list}>
                    <h3 className={styles.list__h}>В работе</h3>
                    <Task_List tasks={todo} />
                </div>

                <div className={styles.view__list}>
                    <h3 className={styles.list__h}>Выполненные</h3>
                    <Task_List tasks={done} />
                </div>

                <Link className={styles.viev__button} to={projects.length > 0 ? "/addTask" : "/addProject"}>
                    <PlusIcon color="#E34432" size={32} />
                    Добавить задачу
                </Link>

            </div>

        </div>
    );
}

export default Today;