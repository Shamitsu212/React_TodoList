import type { task } from "../types/types";

import { getTaskTime } from "./getTaskTime";
import { isTaskOverdue } from "./Overdue";

export const getOverdueTasks = (tasks: task[]) =>
    tasks
        .filter(t => t.status === "todo" && isTaskOverdue(t))
        .sort((a, b) => getTaskTime(a) - getTaskTime(b));

export const getUpcomingTasks = (tasks: task[]) =>
    tasks
        .filter(t => t.status === "todo" && !isTaskOverdue(t))
        .sort((a, b) => getTaskTime(a) - getTaskTime(b));

export const getDoneTasks = (tasks: task[]) =>
    tasks
        .filter(t => t.status === "done")
        .sort((a, b) => getTaskTime(a) - getTaskTime(b));

export const getTodayTasks = (tasks: task[]) => {
    const today = new Date().toLocaleDateString("ru-RU");

    return tasks
        .filter(task => task.date === today)
        .sort((a, b) => {
            const [ah, am] = a.time.split(":").map(Number);
            const [bh, bm] = b.time.split(":").map(Number);

            return (ah * 60 + am) - (bh * 60 + bm);
        });
};