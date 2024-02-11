import React from 'react'
import Messages from '../Messages/Messages'
import styles from "./AllMessages.module.css"
const AllMessages = () => {
  return (
    <div className={styles.messages}>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
    </div>
  )
}

export default AllMessages