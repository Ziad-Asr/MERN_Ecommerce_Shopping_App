import { useLocation } from "react-router";
import { useState } from "react";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <h1 className={styles.title}>{category}</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}>Filter Products:</span>
          <select
            className={styles.select}
            name="color"
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            className={styles.select}
            name="size"
            onChange={handleFilters}
          >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}>Sort Products:</span>
          <select
            className={styles.select}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
