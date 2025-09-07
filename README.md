# EcoPontos
Atualmente, Fortaleza possui centenas de pontos de descarte irregular de lixo.  Esse problema acarreta na obstrução de calçadas e pistas, levando à riscos na saúde pública, transporte e infraestrutura que afetam toda a população, principalmente, aqueles em estado de vulnerabilidade social. A falta de manutenção e fiscalização só agravam a situação, embora a Prefeitura ofereça um serviço de coleta regular e ecopontos para o descarte correto do lixo.

Neste cenário, desenvolvemos um projeto que tem por objetivo entregar endereços de ecopontos em Fortaleza baseado na busca pelo nome ou pelo bairro em que está localizado, bem como realizar o cadastro de novos pontos de coleta que ainda não foram salvos na base de dados.

[![status do projeto](http://img.shields.io/badge/Status-Em%20Desenvolvimento-green)](https://github.com/seu-usuario/seu-projeto)

## Funcionalidades

1. Pesquisar por nome ou por bairro pontos de coleta de lixo em Fortaleza;
2. Monstrar a localização dos ecopontos pesquisados no mapa interativo;
3. Cadastrar novos pontos de coleta através do front-end;
4. Permitir que o desenvolvedor exclua ecopontos cadastrados.

## Pré-requisitos

1. Node.js superior a versão 18
2. npm
3. Git
4. Docker

## Estrutura do projeto
```bash
eco-pontos/
│
├── backend/
│   ├── index.js        # Código principal da API
│   ├── swagger.js      # Configuração Swagger
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│
├── docker-compose.yml
```

## Como Executar

1. **Clone o repositório**
```bash
git clone https://github.com/RuthCosta/eco-pontos.git
```

2. **Entre no diretório**
```bash
cd eco-pontos
```

3. **Instale as dependências**
```bash
//instalar node
sudo apt update
sudo apt install nodejs npm -y

//instalar na pasta backend
npm install express body-parser swagger-jsdoc swagger-ui-express

//intalar docker no Linux (Ubuntu/Debian)
sudo apt update

sudo apt upgrade -y

sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io -y

sudo systemctl enable docker
sudo systemctl start docker
docker --version
```

4. **Execute a aplicação**
```bash
//Local
cd backend
npm install
node index.js

//Docker
docker-compose up --build
```

## Tecnologias Utilizadas
### Backend
- Node.js
- Express.js
- Body-Parser
- File System
### Documentação
- Swagger
### Testes
- Jest
### Integração e Deploy
- Insomnia
- Docker
- Docker Compose
### Versionamento
- Git
- GitHub
### Frontend
- HTML + CSS + JavaScript
- Leaflet.js  
### Protocolos de comunicação
- HTTP
- REST
- JSON
- CORS
- Nominatim

## API
### Diagrama de Arquitetura
<img width="1198" height="757" alt="Captura de tela de 2025-09-06 13-23-49" src="https://github.com/user-attachments/assets/d06bcc76-e6b2-40aa-a0e3-83eac929684d" />

### Endpoints
#### POST /pontos:
- Cadastra um novo ecoponto
- Campos obrigatórios: nome, endereço, bairro, cep
- id gerado automaticamente
- Requisição JSON
```bash
{
  "nome": "Ecoponto Centro",
  "endereco": "Rua A, 123",
  "bairro": "Centro",
  "cep": "60000-000"
}
```
- Código de sucesso 201
```bash
{
  "message": "Ponto de coleta cadastrado com sucesso!",
  "ponto": {
    "id": 1690000000000,
    "nome": "Ecoponto Centro",
    "endereco": "Rua A, 123",
    "bairro": "Centro",
    "cep": "60000-000"
  }
}
```
#### GET /pontos
- Pesquisa ecopontos já cadastrados por bairro ou nome
- bairro - retorna ecopontos de um bairro específico / nome - retorna ecopontos com nome informado (ambos podem ser usados juntos)
- Requisição:
```bash
GET http://localhost:3000/pontos?bairro=Centro&nome=Ecoponto
```
- Código de sucesso (200)
```bash
[
  {
    "id": 1690000000000,
    "nome": "Ecoponto Centro",
    "endereco": "Rua A, 123",
    "bairro": "Centro",
    "cep": "60000-000"
  }
]
```
#### DELETE /pontos/:id
- Excluir ponto de coleta já cadastrado
- Requisição:
```bash
DELETE http://localhost:3000/pontos/1690000000000
```
Código de sucesso (200)
```bash
{
  "message": "Ponto de coleta removido com sucesso!",
  "ponto": {
    "id": 1690000000000,
    "nome": "Ecoponto Centro",
    "endereco": "Rua A, 123",
    "bairro": "Centro",
    "cep": "60000-000"
  }
}
```
### Como rodar a API
```bash
cd backend
node index.js
```
### Documentação no Swagger
Após rodar a API, abra no navegador:
```bash
http://localhost:3000/api-docs
```
## Testes
### jest
1. Após iniciar o backend:
```bash
// Instala dependências
npm install jest supertest

// Rodar todos os testes
npm test

// Rodar apenas os testes unitários
npx jest tests/unit.test.js

//Rodar apenas o teste de integração
npx jest tests/api.test.js
```
### Insomnia
1. Após iniciar o backend
2. Abra o Insomnia e importe o arquivo insomnia_export.json do diretório 

## Contribuição
| Aluno | Matrícula | Contribuição |
|-------| --------- | ------------ |
| Ruth de Fátima da Costa Silva | 2222906 | Código |
| Maria de Fátima dos Santos Mourão | 2323870 | Código |
| Thaís Sousa da Silva | 2319193 | Testes |
| Júlio Costa Moraes Neto | 2327091 | Documentação |
| Francisco Willame de Oliveira Silva | 2326290 | Documentação |






