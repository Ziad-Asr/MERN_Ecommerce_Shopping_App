import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

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
              <Link to="/cart">
                <ShoppingCartOutlinedIcon />
              </Link>
              <span className={styles.topIconBadge}>{quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
