const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    msg: "OK",
  });
});

app.get("/op", (req, res) => {
  res.json({
    msg: "funcionando",
  });
});
app.listen(port, () => {
  console.log(`usando a porta ${port}`);
});
