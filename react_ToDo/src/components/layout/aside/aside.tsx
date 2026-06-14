import styles from "./Aside.module.css"

import type { project } from "../../../types/types"

import { ClipboardListIcon } from "lucide-react"
import { Calendar } from "lucide-react"

import AddButton from "../../UI/Add_Button/Add_Button"
import IconButton from "../../UI/Icon_Button/Icon_Button"
import Project from "../../UI/Project/Project"

interface Props {
    projects: project[]
}

function Aside( { projects } :Props){

    return(

        <aside className={styles.aside}>

            <div className={styles.aside__element}>

                <AddButton to={"/addProject"}/>

            </div>

            <div className={styles.aside__element}>

                <IconButton text="Все" Icon={ClipboardListIcon} to={"/all"}/>

                <IconButton text="Сегодня" Icon={Calendar} to={"/"}/>

            </div>

            <div className={styles.aside__element}>

                <h4 className={styles.element__h}>
                    Мои проекты
                </h4>

                {projects.map((pr) => (
                    <Project 
                        key={pr.id}
                        name={pr.name} 
                        color={pr.color} 
                        to={`/project/${pr.id}`}
                    />
                ))}

            </div>


        </aside>

    )
}

export default Aside