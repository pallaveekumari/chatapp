import React from "react";
import styles from "./Messages.module.scss";
const Messages = () => {
  return (
    <div className={`${styles.message} ${styles.owner}`}>
      <div className={styles.messageInfo}>
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={styles.messageContent}>
        <p>hello</p>
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Messages;
