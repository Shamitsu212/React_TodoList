import styles from '../Page.module.css'

import Aside from '../../layout/aside/Aside'
import ProjectView from '../../layout/ProjectsView/ProjectView'
import { useAppContext } from '../../../context/AppContext'
import { useParams } from 'react-router-dom'




function ProjectView_Page({}) {

  const {id} = useParams()

  const {projects, setProjects} = useAppContext()

  const project = projects.find(p => p.id == Number(id))

  if (!project) {
    return <h1>Проект не найден</h1>;
  }

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>
        <Aside projects={projects} />
      </div>

      <ProjectView project={project}/>

    </div>
  )
}

export default ProjectView_Page
