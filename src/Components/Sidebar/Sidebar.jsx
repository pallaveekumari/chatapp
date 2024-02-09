import React from 'react'
import styles from "./Sidebar.module.css"
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import Chat from '../Chat/Chat'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      
      <Navbar/>
     <Searchbar/>
     <Chat/>
    </div>
  )
}

export default Sidebar