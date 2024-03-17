import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input className={styles.input} placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>Ziad.</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>REGISTER</div>
          <div className={styles.menuItem}>SIGN IN</div>
          <div className={styles.menuItem}>
            <div className={styles.topbarIconContainer}>
              <ShoppingCartOutlinedIcon />
              <span className={styles.topIconBadge}>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
