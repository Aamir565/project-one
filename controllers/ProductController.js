const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

routes.post("/", async (req, res) => {
  await Product.create(req.body);
  res.send({ success: true });
});

module.exports = routes;
