
import type { LucideIcon } from 'lucide-react'
import styles from './iconButton.module.css'

interface Props {
    text: string,
    Icon: LucideIcon,
    onClick?: () => void,
}

function IconButton({text, Icon, onClick}:Props) {

  return (
    <button
        className={styles.button}
        onClick={onClick}
    >
        
        <Icon size={12} />
        
        {text}

    </button>
  )
}

export default IconButton
