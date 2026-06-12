import styles from "./addProject.module.css"
import Button from "../../UI/Button/Button"

interface Props {

}

function addProject({}:Props) {

    return(

        <form className={styles.form}>

            <h1 className={styles.form__h}>
                Создать проект
            </h1>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Напишите название
                </label>

                <input type="text" className={styles.Container__textInput}/>

            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Выбирите цвет
                </label>

                <input type="color" className={styles.Container__textInput}/>

            </div>

            <div style={{width: "120px"}}>
                <Button text="Добавить" />
            </div>

        </form>

    )

}

export default addProject