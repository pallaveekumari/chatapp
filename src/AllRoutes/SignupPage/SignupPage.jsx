import React from "react";
import styles from "./SignupPage.module.css";
const Signup = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Chat App</span>
        <span className={styles.title}>Register</span>
        <form className={styles.formui}>
          <input
            className={styles.inputui}
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className={styles.inputui}
            type="email"
            placeholder="Email Email"
          />
          <input
            className={styles.inputui}
            type="password"
            placeholder="Enter Password"
          />
          <input className={styles.inputui} type="file" id="file" />
          <label htmlFor="file">
            Add an avatar 
          </label>
          <button>Sign up</button>
        </form>
        <p>You Do Have An Account ? Login</p>
      </div>
    </div>
  );
};

export default Signup;
