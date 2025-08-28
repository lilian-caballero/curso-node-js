const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando")
});

app.get("/", (req, res) => {
    res.send("Mensagem de resposta.");
});