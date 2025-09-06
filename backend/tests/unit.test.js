const fs = require("fs");
const path = require("path");
const { lerPontos, salvarPontos, setDataFile } = require("../index");

const TEST_FILE = path.join(__dirname, "pontos_teste.json");

describe("Funções unitárias - Ecopontos", () => {
  beforeAll(() => {
    // Define arquivo de teste
    setDataFile(TEST_FILE);
  });

  beforeEach(() => {
    // Limpa arquivo antes de cada teste
    if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
  });

  it("Deve salvar e ler pontos corretamente", () => {
    const pontos = [{ id: 1, nome: "Teste", endereco: "Rua A", bairro: "Centro", cep: "60000-000" }];
    salvarPontos(pontos);
    expect(lerPontos()).toEqual(pontos);
  });

  it("Deve retornar array vazio se arquivo não existir", () => {
    expect(lerPontos()).toEqual([]);
  });
});
