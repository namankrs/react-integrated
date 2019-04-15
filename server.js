const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/hello", (req, res) => {
  res.send({ body: "Welcome" });
});
app.post("/world", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.post}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
