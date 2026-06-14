import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { project, task} from "../types/types"

export type AppContextType = {
    
    projects: project[]
    setProjects: Dispatch<SetStateAction<project[]>>;

    tasks: task[];
    setTasks: Dispatch<SetStateAction<task[]>>;

    time: Date

    toggleTaskStatus: (projectId: number, taskId: number) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {

    const context = useContext(AppContext)

    if(!context){
        throw new Error("Ошибка")
    }

    return context
}