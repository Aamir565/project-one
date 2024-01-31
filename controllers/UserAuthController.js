const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res) => {
  let e = req.body.email;
  let p = req.body.password;

  let data = await User.find({ email: e });

  if (data.length > 0) {
    if (data[0].password == sha1(p)) {
      let userdata = { id: data[0]._id };
      let token = jwt.sign(userdata, "raymir");
      res.send({
        success: true,
        token: token,
        name: data[0].fullname,
        email: data[0].email,
      });
    } else {
      res.send({ success: false, type: 2 });
    }
  } else {
    res.send({ success: false, type: 1 });
  }
});

module.exports = routes;
