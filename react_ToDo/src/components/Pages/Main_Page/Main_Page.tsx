import styles from '../Page.module.css'

import Aside from '../../layout/Aside/Aside'

import { useAppContext } from '../../../context/AppContext'


function Main_Page() {

  const {projects} = useAppContext()

  return (
    <div className={styles.Content}>

      <div className={styles.Container1}>

        <Aside projects={projects} />

      </div>

      <div className={styles.Main}>

        <h1 className={styles.Main__h}>React ToDo List</h1>

        <p className={styles.Main__p}>
            Пет проект по разработке простого todo листа. В функционал входит создание проекта, создание таски в определенный проект, 
            отслеживание её выполнения, возможность пометить таску как выполненную. Проект сделан без использования Redux, на useState и useContext.
        </p>

      </div>

    </div>
  )
}

export default Main_Page
