const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const categories = require("./categories.json");

const news = require("./news.json");

app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World! is so beautiful!");
});

app.get("/categories", (req, res) => {
   res.send(categories);
});

app.get("/categories/:id", (req, res) => {
   const id = req.params.id;
   if (id == 0) {
      res.send(news);
   } else {
      const categoryNews = news.filter((n) => n.category_id === id);
      res.send(categoryNews);
   }
});

app.get("/news", (req, res) => {
   res.send(news);
});

app.get("/news/:id", (req, res) => {
   const id = req.params.id;
   const newsId = news.find((n) => n._id === id);
   console.log(id);
   res.send(newsId);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
