const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/allRoutes");
const port = process.env.PORT || 8000;

const root = require("path").join(__dirname, "build");
app.use(express.static(root));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
