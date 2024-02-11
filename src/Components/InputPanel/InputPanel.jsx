import React from 'react'
import styles from "./InputPanel.module.css"
const InputPanel = () => {
  return (
    <div className={styles.inputPanel}>
      <input type="text" placeholder='Type something...'/>
      <div className={styles.send}>
        <img className={styles.imageInput} src="" alt="" />
        <input  type="file" style={{'display':'none'}} id="uploadFile"/>
        <label htmlFor="uploadFile">
          <img  className={styles.imageInput} src="" alt="" />
        </label>
        <button className={styles.inputButton}>Send</button>
      </div>
    </div>
  )
}

export default InputPanel