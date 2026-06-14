import type { task } from "../types/types";

export const getTaskTime = (task: task) => {
    const [d, m, y] = task.date.split(".").map(Number);
    const [h, min] = task.time.split(":").map(Number);

    return new Date(y, m - 1, d, h, min).getTime();
};