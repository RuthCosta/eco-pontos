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
├── README.md
├── Docs/
│   ├── requisitos/
│   │   └── requisitos.md
│   ├── arquitetura/
│   │   └── arquitetura.md
│   ├── prototipo/
│       ├── mobile/
│       │   └── [arquivos de imagem]
│       └── web/
│           └── [arquivos de imagem]
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
│       ├── insomnia_export.json
│       ├── api.test.js
│       └── unit.test.js              
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
| 3. Arquitetura técnica e preparação do backend | Definição da arquitetura (cliente, servidor, base de dados, APIs); escolha de tecnologia (linguagens, frameworks, infra, cloud ou servidor próprio); configuração de ambiente de desenvolvimento; plano de segurança; modelagem de dados; definição de integrações externas. | 2 semanas        | Documentação de arquitetura; APIs definidas; ambiente de dev preparado; banco de dados modelado; segurança considerada. |
| 4. Desenvolvimento – Primeira versão (MVP)     | Desenvolvimento das funcionalidades essenciais; implementação no cliente mobile; integração com backend; testes unitários/parciais.                                                                                                                                                                                   | 4–5 semanas      | Versão MVP funcional; funcionalidades chave implementadas; integração backend-cliente; testes unitários feitos.         |
| 5. Testes internos & correções                 | Testes de integração, testes de interface, usabilidade, correção de bugs; refinamento de usabilidade; validações de desempenho; compatibilidade com diferentes dispositivos; melhoria de UI/UX com base em feedback.                                                                                                  | 2 semanas        | Versão alfa ou interna com bugs críticos corrigidos; feedback de usuários internos; lista de ajustes definidos.         |
| 6. Teste Beta / Piloto                         | Lançamento restrito para usuários selecionados; monitoramento de uso real; coleta de feedback; correção de falhas encontradas em ambiente real; ajustes de desempenho, usabilidade, escalabilidade                                                                                                                    | 2 semanas        | Versão beta rodando com usuários reais; ajustes incorporados; métricas de uso levantadas; aceitação do público piloto.  |
| 7. Lançamento                                  | Submissão às lojas; resolução de eventuais problemas de aprovação; monitoramento inicial de métricas (downloads, crashes, feedbacks); correção de bugs emergentes.                                                                                                                                                    | ~1 semana        | App publicado; monitoramento ativo; correções iniciais se necessário.                                                   |
| 8. Pós-lançamento & manutenção                 | Monitoramento contínuo de métricas, correção de bugs, atualizações de funcionalidade, melhorias com base no uso real; suporte aos usuários; otimizações de performance; ajustes legais/regulatórios.                                                                                                                  | Contínuo         | First update; roadmap das próximas versões; tickets de suporte; melhorias regulares.                                    |

## Contribuição
| Aluno | Matrícula | Contribuição |
|-------| --------- | ------------ |
| Ruth de Fátima da Costa Silva | 2222906 | Código |
| Maria de Fátima dos Santos Mourão | 2323870 | Código |
| Thaís Sousa da Silva | 2319193 | Testes |
| Júlio Costa Moraes Neto | 2327091 | Documentação |
| Francisco Willame de Oliveira Silva | 2326290 | Documentação |






