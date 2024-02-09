import React from 'react'
import styles from "./AllChats.module.css"
const AllChats = () => {
  return (
    <div className={styles.chat}>
    <div className={styles.userchat}>
      <img className={styles.userImg} src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
    <div className={styles.userchatInfo}>
      <span className={styles.userchatName}>Jane</span>
      <p className={styles.latestMessage}>Hello</p>
    </div>
    </div>
  </div>
  )
}

export default AllChats