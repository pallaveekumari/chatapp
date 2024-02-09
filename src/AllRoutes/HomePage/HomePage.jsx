import React from 'react'
import styles from "./HomePage.module.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default HomePage