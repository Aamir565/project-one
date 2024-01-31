const routes = require("express").Router();
const Category = require("../models/Category");

routes.get("/", async (req, res) => {
  let data = await Category.find();
  res.send(data);
});
routes.post("/", async (req, res) => {
  await Category.create(req.body);
  res.send({ success: true });
});

module.exports = routes;
