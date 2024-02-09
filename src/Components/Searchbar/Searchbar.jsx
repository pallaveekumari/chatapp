import React from 'react'
import styles from "./Searchbar.module.css"
const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchForm}>
        <input className={styles.inputtext} type="text" placeholder='Find a user'/>
      </div>
      <div className={styles.userchat}>
        <img className={styles.userImg} src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      <div className={styles.userchatInfo}>
        <span>Jane</span>
      </div>
      </div>
    </div>
  )
}

export default Searchbar