const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = "./pontos.json";

function lerPontos() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

function salvarPontos(pontos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(pontos, null, 2));
}

// Cadastro de ponto de coleta
app.post("/pontos", (req, res) => {
  const { nome, endereco, bairro, cep } = req.body;

  // Validar campos obrigatórios
  if (!nome || !endereco || !bairro || !cep) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const pontos = lerPontos();
  const novoPonto = { id: Date.now(), nome, endereco, bairro, cep }; // sem coleta
  pontos.push(novoPonto);
  salvarPontos(pontos);

  res.status(201).json({
    message: "Ponto de coleta cadastrado com sucesso!",
    ponto: novoPonto
  });
});

// Pesquisa por bairro ou nome do ecoponto
app.get("/pontos", (req, res) => {
  const { bairro, nome } = req.query;
  let pontos = lerPontos();

  if (bairro) {
    pontos = pontos.filter(p => p.bairro.toLowerCase() === bairro.toLowerCase());
  }

  if (nome) {
    pontos = pontos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  res.json(pontos);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});