import React from 'react'
import styles from "./Sidebar.module.css"
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'

import AllChats from '../AllChats/AllChats'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      
      <Navbar/>
     <Searchbar/>
     <AllChats/>
    </div>
  )
}

export default Sidebar