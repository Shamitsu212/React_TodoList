import { Link, type To } from 'react-router-dom'
import styles from './Icon_Button.module.css'

import type { LucideIcon } from 'lucide-react'

interface Props {
  text: string,
  Icon: LucideIcon,
  to: To
}

function IconButton( {text, Icon, to} :Props) {

  return (
    <Link
        className={styles.button}
        to={to}
    >
        
        <Icon size={24} />
        
        {text}

    </Link>
  )
}

export default IconButton
