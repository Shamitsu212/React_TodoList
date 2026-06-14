import type { task } from "../types/types";

export const isTaskOverdue = (task: task) => {

    const [day, month, year] = task.date.split(".").map(Number);
    const [hours, minutes] = task.time.split(":").map(Number);

    const taskDateTime = new Date(year, month - 1, day, hours, minutes);

    return taskDateTime.getTime() < Date.now();
};