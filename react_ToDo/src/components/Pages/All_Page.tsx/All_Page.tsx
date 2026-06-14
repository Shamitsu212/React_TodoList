import styles from '../Page.module.css'

import Aside from '../../layout/Aside/Aside'
import All from '../../layout/All/All'

import { useAppContext } from '../../../context/AppContext'

function All_Page({}) {

  const {projects} = useAppContext()

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
