import styles from '../Page.module.css'

import Aside from '../../layout/Aside/Aside'
import AddTask from '../../layout/AddTask/AddTask'

import { useAppContext } from '../../../context/AppContext'

function AddTask_Page({}) {

  const {projects, setProjects} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>

        <Aside projects={projects} />

      </div>

      <AddTask projects={projects} set={setProjects}/>

    </div>
  )
}

export default AddTask_Page
