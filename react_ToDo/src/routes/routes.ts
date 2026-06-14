import AddProject_Page from "../components/Pages/AddProject_Page/AddProject_Page";
import AddTask_Page from "../components/Pages/AddTask_Page/AddTask_Page";
import All_Page from "../components/Pages/All_Page.tsx/All_Page";
import Today_Page from "../components/Pages/Today_Page/Today_Page";
import ProjectView_Page from "../components/Pages/ProjectView_Page/ProjectView_Page";
import Main_Page from "../components/Pages/Main_Page/Main_Page";

export const routes = [
    {
        path: "/addProject",
        Component: AddProject_Page,
    },
    {
        path: "/addTask",
        Component: AddTask_Page,
    },
    {
        path: "/all",
        Component: All_Page,
    },
    {
        path: "/today",
        Component: Today_Page,
    },
    {
        path: "project/:id",
        Component: ProjectView_Page
    },
    {
        path: "/",
        Component: Main_Page
    }
]