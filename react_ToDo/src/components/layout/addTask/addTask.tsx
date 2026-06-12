import Button from "../../UI/Button/Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./addTask.module.css"

interface Props {

}

function AddTask({}:Props) {

    const [date, setDate] = useState<Date | null>(new Date());

    return(
   
        <form className={styles.form}>

            <h1 className={styles.form__h}>
                Создать задачу
            </h1>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Напишите текст
                </label>

                <input type="text" className={styles.Container__textInput}/>

            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Укажите дату
                </label>

                <DatePicker
                    selected={date}
                    onChange={(d: Date | null) => setDate(d)}
                    dateFormat="dd.MM.yyyy"
                    className={styles.Container__dateInput}
                    withPortal
                />

            </div>
            
            <div className={styles.form__Container}>
                <label className={styles.Container__label}>
                    Укажите время
                </label>

                <DatePicker
                    selected={date}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Время"
                    dateFormat="HH:mm"
                    className={styles.Container__timeInput}
                    withPortal
                />
            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Выбирите проект
                </label>

                <select style={{width: "120px"}}>
                    <option>Проект 1</option>
                </select>

            </div>

            <div style={{width: "120px"}}>
                <Button text="Добавить" />
            </div>
            
            
            

        </form>

    );
}

export default AddTask