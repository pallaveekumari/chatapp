import React from 'react'
import styles from "./LoginPage.module.css"
const Login = () => {
  return (
    <div className={styles.formContainer}>
    <div className={styles.formWrapper}>
      <span className={styles.logo}>Chat App</span>
      <span className={styles.title}>Login</span>
      <form className={styles.formui}>
       
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
       
        <button>Sign In</button>
      </form>
      <p>You Don't Have An Account ? Register</p>
    </div>
  </div>

  )
}

export default Login