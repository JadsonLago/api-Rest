import express, { json } from "express";
const app = express();
app.use(express.json());

// Mock
const selecoes = [
{id: 1, selecao: "Brasil", grupo: "G"},
{id: 2, selecao: "Suica", grupo: "G"},
{id: 3, selecao: "Sérvia", grupo: "G"},
{id: 5, selecao: "Camarões", grupo: "G"}
]

//funcao auxiliar para filtrar por id, o retorno sera um obj
function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

//funcao auxiliar para buscar o indice do id, o retorno sera um indice
function buscarIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

// Rota GET padrão
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/curso", (req, res) => {
  res.send("Este é o curso de NodeJs!");
});

// Rota GET listar selecoes
app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

// Rota GET busca por id
app.get("/selecoes/:id", (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id));
});

// Rota POST padrão - Insercao de dados
app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Seleção cadastrada com sucesso");

});

// Rota DELETE busca por id
app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index,1)

  res.send(`Seleção com id ${req.params.id} excluída com sucesso`);
});


export default app;
