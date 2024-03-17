import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import cartImage1 from "../../assets/images/CartImage1.png";
import cartImage2 from "../../assets/images/CartImage2.png";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <button className="topButton">CONTINUE SHOPPING</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag(2)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div>
          <button className="topButton filled">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img className="image" src={cartImage1} alt="product" />
                <div className="details">
                  <span className="productName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="productId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className="productColor"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <span className="productSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <AddIcon />
                  <div className="productAmount">2</div>
                  <RemoveIcon />
                </div>
                <div className="productPrice">$ 30</div>
              </div>
            </div>
            <hr className="hr" />
            <div className="product">
              <div className="productDetail">
                <img className="image" src={cartImage2} alt="product" />
                <div className="details">
                  <span className="productName">
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className="productId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className="productColor"
                    style={{ backgroundColor: "gray" }}
                  ></div>
                  <span className="productSize">
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <AddIcon />
                  <div className="productAmount">1</div>
                  <RemoveIcon />
                </div>
                <div className="productPrice">$ 20</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$ 80</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">$ 5.90</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">$ -5.90</span>
            </div>
            <div className="summaryItem total">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">$ 80</span>
            </div>
            <button className="button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
