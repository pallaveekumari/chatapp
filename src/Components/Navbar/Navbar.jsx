import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <span className={styles.logo}>Chat App</span>
      <div className={styles.user}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar