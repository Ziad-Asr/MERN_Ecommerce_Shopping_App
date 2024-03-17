import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.img} alt={item.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
