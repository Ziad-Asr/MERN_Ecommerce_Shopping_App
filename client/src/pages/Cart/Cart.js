import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setStripeResponse, setSuccessPageCarts } from "../../redux/cartRedux";

import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import "./Cart.scss";

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPE;

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success");
        dispatch(setStripeResponse(res));
        dispatch(setSuccessPageCarts(cart));

        // history.push("/success", {
        //   stripeData: res.data,
        //   products: cart,
        // });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate, dispatch]);

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
            {cart.products.map((product) => (
              <div className="product">
                <div className="productDetail">
                  <img className="image" src={product.img} alt="product" />
                  <div className="details">
                    <span className="productName">
                      <b>Product:</b> {product.title}
                    </span>
                    <span className="productId">
                      <b>ID:</b> {product._id}
                    </span>
                    <div
                      className="productColor"
                      style={{ backgroundColor: "black" }}
                    ></div>
                    <span className="productSize">
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="priceDetail">
                  <div className="productAmountContainer">
                    <AddIcon />
                    <div className="productAmount">{product.quantity}</div>
                    <RemoveIcon />
                  </div>
                  <div className="productPrice">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <hr className="hr" />
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$ {cart.total}</span>
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
              <span className="summaryItemPrice">$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
