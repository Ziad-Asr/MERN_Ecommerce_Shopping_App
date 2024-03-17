import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import productImage from "../../assets/images/productImage.jpg";

import styles from "./Product.module.scss";

const Product = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            className={styles.image}
            src={productImage}
            alt="Denim Jumpsuit"
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Denim Jumpsuit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className={styles.price}>$ 20</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select className={styles.filterSize}>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <RemoveIcon className={styles.icon} />
              <span className={styles.amount}>1</span>
              <AddIcon className={styles.icon} />
            </div>
            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
