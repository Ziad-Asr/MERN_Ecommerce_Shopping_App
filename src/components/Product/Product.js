import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import styles from "./Product.module.scss";

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <img className={styles.image} src={item.img} alt="Product" />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <SearchOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
