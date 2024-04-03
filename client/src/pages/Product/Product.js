import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import styles from "./Product.module.scss";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            className={styles.image}
            src={product.img}
            alt="Denim Jumpsuit"
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.desc}</p>
          <span className={styles.price}>$ {product.price}</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              <select
                className={styles.filterSize}
                onChange={(e) => setColor(e.target.value)}
              >
                <option disabled>Color </option>
                {product.color?.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select
                className={styles.filterSize}
                onChange={(e) => setSize(e.target.value)}
              >
                <option disabled>Size </option>
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <RemoveIcon
                className={styles.icon}
                onClick={() => handleQuantity("dec")}
              />
              <span className={styles.amount}>{quantity}</span>
              <AddIcon
                className={styles.icon}
                onClick={() => handleQuantity("inc")}
              />
            </div>
            <button className={styles.button} onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
