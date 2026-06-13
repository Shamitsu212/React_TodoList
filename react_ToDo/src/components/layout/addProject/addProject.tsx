import styles from "./addProject.module.css"
import Button from "../../UI/Button/Button"
import type { project } from "../../../types/types"
import { useState } from "react"

interface Props {
    set: React.Dispatch<React.SetStateAction<project[]>>
}

function addProject({set}:Props) {

    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("")

    const handleAdd = () => {

        if(name.length < 1){
            return;
        }

        const newProject = {id: Date.now() , name: name, color: color, tasks: []}

        set(prev => [...prev, newProject])

        setColor("")
        setName("")
    }
    


    return(

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

            <h1 className={styles.form__h}>
                Создать проект
            </h1>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Напишите название
                </label>

                <input type="text" className={styles.Container__textInput} onChange={e => setName(e.target.value)} value={name} minLength={4}/>

            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Выберите цвет
                </label>

                <input type="color" className={styles.Container__textInput} onChange={e => setColor(e.target.value)} value={color}/>

            </div>

            <div style={{width: "220px", marginTop: "50px"}}>
                <Button text="Добавить" onClick={handleAdd}/>
            </div>

        </form>

    )

}

export default addProject