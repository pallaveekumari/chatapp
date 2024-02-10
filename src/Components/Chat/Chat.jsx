import React from 'react'
import styles from "./Chat.module.css"
import AllMessages from '../AllMessages/AllMessages'
import Messages from '../Messages/Messages'
import InputPanel from '../InputPanel/InputPanel'
const Chat = () => {
  return (
   <div className={styles.chat}>
    <div className={styles.chatInfo}>
      <span>Jane</span>
      <div className={styles.chatIcons}>
        <img  className={styles.chatIconsImg}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ILmc2ZD8npM259WdaVF1eqUMQ95yvhwX7g&usqp=CAU" alt="" />
        <img  className={styles.chatIconsImg} src="https://static.vecteezy.com/system/resources/previews/020/936/584/non_2x/add-friend-icon-for-your-website-design-logo-app-ui-free-vector.jpg" alt="" />
        <img  className={styles.chatIconsImg} src="" alt="" />
      </div>
    </div>
      <Messages/>
      <InputPanel/>
   </div>
  )
}

export default Chat