const routes = require("express").Router();
const City = require("../models/City");

routes.get("/getcity/:a", async (req, res) => {
  let data = await City.find({ state: req.params.a });
  res.send(data);
});

routes.get("/state", async (req, res) => {
  let data = await City.distinct("state");
  res.send(data);
});

module.exports = routes;
