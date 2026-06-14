import styles from '../Page.module.css'

import Aside from '../../layout/aside/Aside'
import Today from '../../layout/Today/Today'

import { useAppContext } from '../../../context/AppContext'


function Today_Page() {

  const {projects, setProjects} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>
        <Aside projects={projects} />
      </div>

      <Today projects={projects} />

    </div>
  )
}

export default Today_Page
