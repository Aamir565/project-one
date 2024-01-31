const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res) => {
  let u = req.body.username;
  let p = req.body.password;
  let data = await Admin.find({ username: u });

  if (data.length > 0) {
    if (data[0].password == sha1(p)) {
      let userdata = { id: data[0]._id };
      let token = jwt.sign(userdata, "raymir");
      res.send({ success: true, token: token });
    } else {
      res.send({ success: false, type: 2 });
    }
  } else {
    res.send({ success: false, type: 1 });
  }
});

module.exports = routes;
