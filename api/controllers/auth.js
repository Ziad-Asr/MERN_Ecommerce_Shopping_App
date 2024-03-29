const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
// REGISTER USER
exports.register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_CRYPTOJS_SECRET
      ).toString(),
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// LOGIN USER
exports.login = async (req, res) => {
  try {
    // Find user by username
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(401).json("Wrong User Name");

    // Check password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_CRYPTOJS_SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword && res.status(401).json("Wrong Password");

    // Generate token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // Send user info =>  1) with JWT token 2) without password
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
