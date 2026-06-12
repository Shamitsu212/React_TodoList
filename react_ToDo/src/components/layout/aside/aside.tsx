import AddButton from "../../UI/addButton/addButton"
import IconButton from "../../UI/iconButton/iconButton"
import Project from "../../UI/project/project"

import { Search } from "lucide-react"
import { Calendar } from "lucide-react"
import { Funnel } from "lucide-react"

import styles from "./aside.module.css"

interface Props {
    
}

function Aside({}:Props){

    return(

        <aside className={styles.aside}>

            <div className={styles.aside__element}>
                <AddButton/>
            </div>

            <div className={styles.aside__element}>
                <IconButton text="Поиск" Icon={Search}/>
                <IconButton text="Сегодня" Icon={Calendar}/>
                <IconButton text="Фильтры и метки" Icon={Funnel}/>
            </div>

            <div className={styles.aside__element}>
                <h4 className={styles.element__h}>Мои проекты</h4>
                <Project color="red" name="Покупки"/>
                <Project color="yellow" name="Занятия" />
                <Project color="pink" name="Встречи"/>
            </div>


        </aside>

    )
}

export default Aside