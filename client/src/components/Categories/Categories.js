import { categories } from "../../assets/data";
import CategoryItem from "./../CategoryItem/CategoryItem";

import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
