const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "CRUD time" });
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/marq.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});