import type { To } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Add_Button.module.css"

import { CirclePlusIcon } from "lucide-react";

interface Props {
    to: To,
}

function AddButton( {to} :Props){

    return(
        <Link 
            className={styles.button}
            to={to}
        >

            <CirclePlusIcon size={35} />

            Добавить проект

        </Link>
    )

}

export default AddButton