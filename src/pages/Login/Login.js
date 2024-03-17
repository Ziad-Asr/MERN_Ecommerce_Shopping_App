import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="username" />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
          />
          <button className={styles.button}>LOGIN</button>
          <a href="/" className={styles.link}>
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a href="/" className={styles.link}>
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
