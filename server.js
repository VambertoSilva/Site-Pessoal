const express = require("express");
const path = require("path");

const app = express();

// Define a pasta de build do React como uma pasta estática
app.use(express.static(path.join(__dirname, "build")));

// Rota que serve o index.html do React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Inicia o servidor na porta desejada
const port = process.env.PORT || "8080"; // ou qualquer outra porta que você preferir
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
