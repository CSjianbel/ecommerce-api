const express = require("express");
const router = express.Router();

const UserRoutes = require("./user/user");

router.use("/users", UserRoutes);

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;