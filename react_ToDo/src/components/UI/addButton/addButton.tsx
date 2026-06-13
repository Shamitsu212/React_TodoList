import styles from "./addButton.module.css"
import { CirclePlusIcon } from "lucide-react";

interface Props {
    onClick?: () => void;
}

function AddButton({onClick}:Props){

    return(
        <button 
        className={styles.button}
        onClick={onClick}
        >

        <CirclePlusIcon size={35} />

        Добавить проект

        </button>
    )

}

export default AddButton