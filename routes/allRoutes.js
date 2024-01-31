const routes = require("express").Router();

routes.use("/api/signup", require("../controllers/SignupController.js"));
routes.use("/api/city", require("../controllers/CityController.js"));
routes.use("/api/category", require("../controllers/CategoryController.js"));
routes.use("/api/product", require("../controllers/ProductController.js"));
routes.use("/api/userauth", require("../controllers/UserAuthController.js"));
routes.use("/api/adminauth", require("../controllers/AdminAuthController.js"));

module.exports = routes;
