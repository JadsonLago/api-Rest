import express from "express";
const app = express();

// Mock
const selecoes = [
{id: 1, selecao: "Brasil", grupo: "G"},
{id: 2, selecao: "Suica", grupo: "G"},
{id: 3, selecao: "Sérvia", grupo: "G"},
{id: 5, selecao: "Camarões", grupo: "G"}
]

// Rota GET padrão
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/curso", (req, res) => {
  res.send("Este é o curso de NodeJs!");
});

app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

export default app;
