import styles from '../Page.module.css'

import Aside from '../../layout/Aside/Aside'
import AddProject from '../../layout/AddProject/AddProject'

import { useAppContext } from '../../../context/AppContext'


function AddProject_Page({}) {

  const {projects, setProjects} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>

        <Aside projects={projects} />

      </div>

      <AddProject  set={setProjects}/>

    </div>
  )
}

export default AddProject_Page
