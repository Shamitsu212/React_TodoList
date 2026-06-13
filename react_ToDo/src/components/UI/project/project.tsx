import styles from "./project.module.css"
import { HashIcon } from "lucide-react"

interface Props {
    name:string,
    color: string,
    to?:string,
}

function Project({ name, color, to }: Props) {

    return (
        <button className={styles.button}>
            
            <HashIcon size={24} color={color} />

            {name}

        </button>
    );
}

export default Project