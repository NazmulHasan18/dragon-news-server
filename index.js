const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const categories = require("./categories.json");

app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World! is so beautiful!");
});

app.get("/categories", (req, res) => {
   res.send(categories);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
