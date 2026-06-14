export type task = {
    id: number;
    name: string;
    time: string;
    date: string;
    projectId: number;
    status: "done" | "todo"
}

export type project = {
    id: number;
    name: string;
    color: string;
    tasks: task[];
}