# EcoPontos
Atualmente, Fortaleza possui centenas de pontos de descarte irregular de lixo. Esse problema acarreta na obstrução de calçadas e pistas, levando à riscos na saúde pública, transporte e infraestrutura que afetam toda a população, principalmente aqueles em estado de vulnerabilidade social. A falta de manutenção e fiscalização só agravam os perigos, embora a Prefeitura ofereça um serviço de coleta regular e ecopontos para o descarte adequado do lixo.

Neste cenário, desenvolvemos um projeto que tem por objetivo entregar endereços de ecopontos em Fortaleza baseado na busca pelos seus nomes ou bairros em que estão localizados, realizando também o cadastro de novos pontos de coleta que ainda não foram salvos na base de dados do sistema.

[![status do projeto](http://img.shields.io/badge/Status-Em%20Desenvolvimento-green)](https://github.com/seu-usuario/seu-projeto)

## Funcionalidades

1. Pesquisar por nome ou por bairro pontos de coleta de lixo em Fortaleza;
2. Mostrar a localização dos ecopontos pesquisados no mapa interativo;
3. Cadastrar novos pontos de coleta através do front-end;
4. Permitir que o desenvolvedor exclua ecopontos cadastrados.

## Pré-requisitos

1. Node.js superior a versão 18
2. Git
3. Docker

## Estrutura do projeto
```bash
eco-pontos/
│
├── backend/                          # Código do servidor (API)
│   ├── index.js                      # Ponto de entrada da aplicação Express
│   ├── swagger.js                    # Configuração do Swagger
│   ├── pontos.json                   # "Banco de dados" em JSON (persistência local)
│   ├── package.json                  # Dependências do Node.js
│   ├── package-lock.json
│   ├── docker-compose.yml            # Orquestração do container (backend e futuro db se quiser)
│   ├── Dockerfile                    # Imagem Docker para rodar o backend
│   └── tests/                        # Testes automatizados
│       ├── api.test.js
│       └── unit.test.js              # Testes unitários com Jest
│
├── frontend/                         # Página web de interação com a API
└── ├── index.html                    # Página principal (pesquisa e mapa)
 
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

## Cronograma para Implementação
| Fase                                           | Atividades principais                                                                                                                                                                                                                                                                                                 | Duração estimada | Marcos / entregas                                                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1. Planejamento & descoberta                   | Levantamento de requisitos, definição do escopo, personas, personas de usuários, regras de negócio, análise de stakeholders, estudo de mercado, definição de plataformas (iOS / Android / híbrido), viabilidade técnica, orçamentária e legal                                                                         | 2 semanas        | Documento de requisitos aprovado; Escopo definido; MVP definido; Estimativa de custos e recursos.                       |
| 2. Design & Prototipagem                       | UX: wireframes, jornadas do usuário; UI: mockups visuais; protótipo interativo; revisões com usuários ou stakeholders; ajustes finais do visual; definição de estilo visual, identidade.                                                                                                                              | 2-3 semanas      | Protótipos UX aprovados; mockups de telas principais; guia de estilo (cores, tipografia, ícones etc.).                  |
| 3. Arquitetura técnica e preparação do backend | Definição da arquitetura (cliente, servidor, base de dados, APIs); escolha de tecnologia (linguagens, frameworks, infra, cloud ou servidor próprio); configuração de ambiente de desenvolvimento; plano de segurança; modelagem de dados; definição de integrações externas (ex: mapas, sensores, escanear QR, etc.). | 2 semanas        | Documentação de arquitetura; APIs definidas; ambiente de dev preparado; banco de dados modelado; segurança considerada. |
| 4. Desenvolvimento – Primeira versão (MVP)     | Desenvolvimento das funcionalidades essenciais; implementação no cliente mobile; integração com backend; testes unitários/parciais.                                                                                                                                                                                   | 4–5 semanas      | Versão MVP funcional; funcionalidades chave implementadas; integração backend-cliente; testes unitários feitos.         |
| 5. Testes internos & correções                 | Testes de integração, testes de interface, usabilidade, correção de bugs; refinamento de usabilidade; validações de desempenho; compatibilidade com diferentes dispositivos; melhoria de UI/UX com base em feedback.                                                                                                  | 2 semanas        | Versão alfa ou interna com bugs críticos corrigidos; feedback de usuários internos; lista de ajustes definidos.         |
| 6. Teste Beta / Piloto                         | Lançamento restrito para usuários selecionados; monitoramento de uso real; coleta de feedback; correção de falhas encontradas em ambiente real; ajustes de desempenho, usabilidade, escalabilidade                                                                                                                    | 2 semanas        | Versão beta rodando com usuários reais; ajustes incorporados; métricas de uso levantadas; aceitação do público piloto.  |
| 7. Lançamento                                  | Submissão às lojas; resolução de eventuais problemas de aprovação; monitoramento inicial de métricas (downloads, crashes, feedbacks); correção de bugs emergentes.                                                                                                                                                    | ~1 semana        | App publicado; monitoramento ativo; correções iniciais se necessário.                                                   |
| 8. Pós-lançamento & manutenção                 | Monitoramento contínuo de métricas, correção de bugs, atualizações de funcionalidade, melhorias com base no uso real; suporte aos usuários; otimizações de performance; ajustes legais/regulatórios.                                                                                                                  | Contínuo         | First update; roadmap das próximas versões; tickets de suporte; melhorias regulares.                                    |

## Telas de Protótipo
### Web
<img width=450px height=450px alt="Captura de tela de 2025-09-28 19-52-32" src="https://github.com/user-attachments/assets/bccd3499-be42-4049-9ab6-6ea5ff86e9bc" /> <img width=450px height=450px alt="Captura de tela de 2025-09-28 19-53-02" src="https://github.com/user-attachments/assets/5c889dcb-7793-4026-bf3e-eeb2151d75cd" />

### Mobile

<img width=150px height=300px alt="Captura de tela de 2025-09-15 17-32-41" src="https://github.com/user-attachments/assets/2de59451-da48-486d-8e9c-6c6e4c273a0f" />

## Contribuição
| Aluno | Matrícula | Contribuição |
|-------| --------- | ------------ |
| Ruth de Fátima da Costa Silva | 2222906 | Código |
| Maria de Fátima dos Santos Mourão | 2323870 | Código |
| Thaís Sousa da Silva | 2319193 | Testes |
| Júlio Costa Moraes Neto | 2327091 | Documentação |
| Francisco Willame de Oliveira Silva | 2326290 | Documentação |






