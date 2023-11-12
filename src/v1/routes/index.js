const express = require("express");
const router = express.Router();

const UserRoutes = require("./user/user");
const ProductRoutes = require('./product/product');

router.use("/users", UserRoutes);
router.use('/products', ProductRoutes)

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;