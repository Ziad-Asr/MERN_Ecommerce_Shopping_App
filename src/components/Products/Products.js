import Product from "../Product/Product";
import { popularProducts } from "../../assets/data";

import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
