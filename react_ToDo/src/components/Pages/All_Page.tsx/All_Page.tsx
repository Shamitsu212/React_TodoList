import styles from '../Page.module.css'

import Aside from '../../layout/aside/Aside'
import All from '../../layout/All/All'
import { useAppContext } from '../../../context/AppContext'

function All_Page({}) {

  const {projects, setProjects} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>
        <Aside projects={projects} />
      </div>

      <All projects={projects} />

    </div>
  )
}

export default All_Page
