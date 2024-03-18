const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const productRoutes = require("./routes/product");
const stripeRoutes = require("./routes/stripe");
const verifyTokenRoutes = require("./routes/verifyToken");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`DB is connected`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`DB connection failed`);
  });

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product", productRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/verifyToken", verifyTokenRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running!`);
});
