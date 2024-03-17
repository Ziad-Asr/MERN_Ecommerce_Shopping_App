import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Ziad.</h1>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={styles.socialContainer}>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#3B5999" }}
          >
            <FacebookIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#E4405F" }}
          >
            <InstagramIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#55ACEE" }}
          >
            <TwitterIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#E60023" }}
          >
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Useful Links</h3>
        <ul className={styles.list}>
          <div className={styles.listItemRow}>
            <li>Home</li>
            <li>Cart</li>
            <li>Man Fashion</li>
            <li>childs Fashion</li>
            <li>Accessories</li>
          </div>
          <div className={styles.listItemRow}>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Terms</li>
          </div>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contactItem}>
          <RoomIcon style={{ marginRight: "10px" }} /> 28 Helwan, Cairo, Egypt
        </div>
        <div className={styles.contactItem}>
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutlineOutlinedIcon style={{ marginRight: "10px" }} />{" "}
          contact@ziad.dev
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment"
          className={styles.payment}
        />
      </div>
    </div>
  );
};

export default Footer;
