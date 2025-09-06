const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const setupSwagger = require("./swagger");

const app = express();
app.use(cors());
app.use(bodyParser.json());

setupSwagger(app);

// Arquivo padrão de dados
let DATA_FILE = path.join(__dirname, "pontos.json");

// Funções de leitura/escrita (exportadas para testes unitários)
function lerPontos() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

function salvarPontos(pontos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(pontos, null, 2));
}

// POST /pontos
app.post("/pontos", (req, res) => {
  const { nome, endereco, bairro, cep } = req.body;
  if (!nome || !endereco || !bairro || !cep) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  const pontos = lerPontos();
  const novoPonto = { id: Date.now(), nome, endereco, bairro, cep };
  pontos.push(novoPonto);
  salvarPontos(pontos);
  res.status(201).json({ ponto: novoPonto });
});

// GET /pontos
app.get("/pontos", (req, res) => {
  const { bairro, nome } = req.query;
  let pontos = lerPontos();
  if (bairro) pontos = pontos.filter(p => p.bairro.toLowerCase().includes(bairro.toLowerCase()));
  if (nome) pontos = pontos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
  res.json(pontos);
});

// DELETE /pontos/:id
app.delete("/pontos/:id", (req, res) => {
  const { id } = req.params;
  const pontos = lerPontos();
  const index = pontos.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ error: "Ponto não encontrado" });
  const removido = pontos.splice(index, 1)[0];
  salvarPontos(pontos);
  res.json({ message: "Ponto removido com sucesso", ponto: removido });
});

// Exporta app e funções para testes
module.exports = { app, lerPontos, salvarPontos, setDataFile: file => { DATA_FILE = file } };

// Roda servidor só se executado diretamente
if (require.main === module) {
  app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Ponto:
 *       type: object
 *       required:
 *         - nome
 *         - endereco
 *         - bairro
 *         - cep
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do ecoponto
 *         endereco:
 *           type: string
 *           description: Endereço do ecoponto
 *         bairro:
 *           type: string
 *           description: Bairro onde está localizado
 *         cep:
 *           type: string
 *           description: CEP do ecoponto
 *       example:
 *         id: 1
 *         nome: Ecoponto Centro
 *         endereco: Rua A, 123
 *         bairro: Centro
 *         cep: 60000-000
 */

/**
 * @swagger
 * /pontos:
 *   get:
 *     summary: Lista todos os pontos de coleta ou filtra por bairro/nome
 *     tags: [Pontos]
 *     parameters:
 *       - in: query
 *         name: bairro
 *         schema:
 *           type: string
 *         description: Bairro para filtrar
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Nome do ecoponto para filtrar
 *     responses:
 *       200:
 *         description: Lista de pontos de coleta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ponto'
 *
 *   post:
 *     summary: Cadastra um novo ponto de coleta
 *     tags: [Pontos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ponto'
 *     responses:
 *       201:
 *         description: Ponto criado com sucesso
 *
 * /pontos/{id}:
 *   delete:
 *     summary: Remove um ponto de coleta pelo ID
 *     tags: [Pontos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do ponto a ser deletado
 *     responses:
 *       200:
 *         description: Ponto removido com sucesso
 *       404:
 *         description: Ponto não encontrado
 */
