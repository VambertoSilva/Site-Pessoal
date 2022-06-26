const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/op", (req, res) => {
  res.json({
    msg: "funcionando",
  });
});
app.listen(port, () => {
  console.log(`usando a porta ${port}`);
});
