import AddButton from "../../UI/addButton/addButton"
import IconButton from "../../UI/iconButton/iconButton"
import Project from "../../UI/project/project"

import { ClipboardListIcon } from "lucide-react"
import { Calendar } from "lucide-react"

import styles from "./aside.module.css"
import type { project } from "../../../types/types"

interface Props {
    projects: project[]
}

function Aside({ projects }:Props){

    return(

        <aside className={styles.aside}>

            <div className={styles.aside__element}>
                <AddButton/>
            </div>

            <div className={styles.aside__element}>
                <IconButton text="Все" Icon={ClipboardListIcon}/>
                <IconButton text="Сегодня" Icon={Calendar}/>
            </div>

            <div className={styles.aside__element}>
                <h4 className={styles.element__h}>Мои проекты</h4>
                {projects.map((pr) => (
                    <Project name={pr.name} color={pr.color} />
                ))}
            </div>


        </aside>

    )
}

export default Aside