import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="name" />
          <input className={styles.input} type="text" placeholder="last name" />
          <input className={styles.input} type="text" placeholder="username" />
          <input className={styles.input} type="email" placeholder="email" />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="confirm password"
          />
          <span className={styles.agreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={styles.button}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
