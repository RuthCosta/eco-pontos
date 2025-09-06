const request = require("supertest");
const { app, setDataFile } = require("../index");
const fs = require("fs");
const path = require("path");

const TEST_FILE = path.join(__dirname, "pontos_api_teste.json");

describe("API de Ecopontos - Integração", () => {
  let pontoId;

  beforeAll(() => {
    // Redireciona dados para arquivo de teste
    setDataFile(TEST_FILE);
  });

  beforeEach(() => {
    // Limpa arquivo antes de cada teste
    if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
  });

  it("Deve cadastrar ponto", async () => {
    const res = await request(app).post("/pontos").send({
      nome: "Teste API",
      endereco: "Rua Teste",
      bairro: "Centro",
      cep: "60000-000"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("ponto");
    pontoId = res.body.ponto.id;
  });

  it("Deve buscar ponto", async () => {
    // Primeiro cadastrar
    await request(app).post("/pontos").send({
      nome: "Teste API",
      endereco: "Rua Teste",
      bairro: "Centro",
      cep: "60000-000"
    });
    const res = await request(app).get("/pontos?bairro=Centro");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Deve deletar ponto", async () => {
    // Primeiro cadastrar
    const resCadastro = await request(app).post("/pontos").send({
      nome: "Teste Delete",
      endereco: "Rua X",
      bairro: "Bairro Y",
      cep: "60000-111"
    });
    const id = resCadastro.body.ponto.id;
    const resDelete = await request(app).delete(`/pontos/${id}`);
    expect(resDelete.statusCode).toBe(200);
    expect(resDelete.body).toHaveProperty("message");
  });

  it("Deve retornar 404 ao deletar ponto inexistente", async () => {
    const res = await request(app).delete("/pontos/999999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Ponto não encontrado");
  });
});
