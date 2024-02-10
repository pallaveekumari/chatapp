import React from 'react'
import styles from "./Messages.module.css"
import AllMessages from '../AllMessages/AllMessages'
const Messages = () => {
  return (
    <div className={styles.messages}>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/>
      <AllMessages/> 
      <AllMessages/>
      <AllMessages/>
    </div>
  )
}

export default Messages