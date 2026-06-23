import styles from "./AddTask.module.css"

import { useState } from "react";

import type { project } from "../../../types/types";
import type { task } from "../../../types/types";

import DatePicker from "react-datepicker";

import Button from "../../UI/Button/Button";

interface Props {
    projects: project[]
    set: React.Dispatch<React.SetStateAction<project[]>>
}

function AddTask({projects, set}:Props) {

    const [date, setDate] = useState<Date | null>(new Date());
    const [time, setTime] = useState<Date | null>(new Date());
    const [id, setId] = useState<number | undefined>( projects[0]?.id)
    const [text, setText] = useState<string>("")

    const handleClick = () => {
        
        if(id == undefined){
            return;
        }
        
        const newTask :task = {
            id: Date.now(),
            name: text,
            date: date ? date.toLocaleDateString("ru-RU"): "",
            time: time ? time.toLocaleTimeString("ru-RU", {hour: "2-digit",minute: "2-digit",}): "",
            projectId: id,
            status: "todo",
        }

        set((prev) => {
            return prev.map((project) => {

                if (project.id === id) {
                    
                    return {
                        ...project, tasks: [...project.tasks, newTask]
                    }

                }

                return project

            })
        })

        setText("")
    }

    return(
   
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

            <h1 className={styles.form__h}>
                Создать задачу
            </h1>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Напишите текст
                </label>

                <input 
                    type="text" 
                    className={styles.Container__textInput} 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                />

            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Укажите дату
                </label>

                <DatePicker
                    selected={date}
                    onChange={(d: Date | null) => setDate(d)}
                    dateFormat="dd.MM.yyyy"
                    locale="ru"
                    className={styles.Container__dateInput}
                    withPortal
                />

            </div>
            
            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Укажите время
                </label>

                <DatePicker
                    onChange={(d: Date | null) => setTime(d)}
                    selected={time}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="HH:mm"
                    timeFormat="HH:mm"
                    locale="ru"
                    className={styles.Container__timeInput}
                    withPortal
                />

            </div>

            <div className={styles.form__Container}>

                <label className={styles.Container__label}>
                    Выберите проект
                </label>

                <select 
                    className={styles.Container__select}
                    onChange={e => setId(Number(e.target.value))}
                    value={id ?? ""}    
                >

                    <option selected disabled value={""}>Выберите проект</option>

                    {projects.map((el) => (

                        <option value={el.id}>
                            {el.name}
                        </option>

                    ))}

                </select>

            </div>

            <div style={{width: "220px", marginTop: "20px"}}>
                <Button text="Добавить" onClick={handleClick} />
            </div>
            
            
            

        </form>

    );
}

export default AddTask