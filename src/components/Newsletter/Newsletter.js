import SendIcon from "@mui/icons-material/Send";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>
        Get timely updates from your favorite products.
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="email" placeholder="Your email" />
        <button className={styles.button}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
