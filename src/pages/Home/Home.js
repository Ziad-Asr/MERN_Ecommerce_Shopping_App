import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
// import ProductList from "./../ProductList/ProductList";
// import Product from "../../pages/Product/Product";
// import Login from "../Login/Login";
// import Register from "./../Register/Register";
// import Cart from "../Cart/Cart";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />

      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
