import styles from './Icon_Link.module.css'

import { Link, type To } from 'react-router-dom'

import type { LucideIcon } from 'lucide-react'

interface Props {
  text: string,
  Icon: LucideIcon,
  to: To
}

function Icon_Link( {text, Icon, to} :Props) {

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

export default Icon_Link
