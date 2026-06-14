import styles from '../Page.module.css'

import Aside from '../../layout/Aside/Aside'
import Today from '../../layout/Today/Today'

import { useAppContext } from '../../../context/AppContext'


function Today_Page() {

  const {projects, tasks} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>

        <Aside projects={projects} />

      </div>

      <Today tasks={tasks} />

    </div>
  )
}

export default Today_Page
