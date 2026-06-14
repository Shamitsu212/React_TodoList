import styles from "./Project_Link.module.css"

import { Link, type To } from "react-router-dom";

import { HashIcon } from "lucide-react"

interface Props {
    name:string,
    color: string,
    to:To,
}

function Project_Link( { name, color, to } :Props) {

    return (
        <Link className={styles.button} to={to}>

            <HashIcon size={24} color={color} />  

            {name}  

        </Link>
    );
}

export default Project_Link