import styles from "./Aside.module.css"

import type { project } from "../../../types/types"

import { ClipboardListIcon } from "lucide-react"
import { Calendar } from "lucide-react"
import { Link } from "react-router-dom"

import Add_Link from "../../UI/Add_Link/Add_Link"
import Icon_Link from "../../UI/Icon_Link/Icon_Link"
import Project_Link from "../../UI/Project_Link/Project"

interface Props {
    projects: project[]
}

function Aside( { projects } :Props){

    return(

        <aside className={styles.aside}>

            <Link className={styles.aside__Logo} to="/">
                ToDo list
            </Link>

            <div className={styles.aside__element}>

                <Add_Link to={"/addProject"}/>

            </div>

            <div className={styles.aside__element}>

                <Icon_Link text="Все" Icon={ClipboardListIcon} to={"/all"}/>

                <Icon_Link text="Сегодня" Icon={Calendar} to={"/today"}/>

            </div>

            <div className={styles.aside__element}>

                <h4 className={styles.element__h}>
                    Мои проекты
                </h4>

                {projects.map((pr) => (
                    <Project_Link
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