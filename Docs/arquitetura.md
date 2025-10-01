# DESIGN DA ARQUITETURA

## Definição da Arquitetura do Sistema

## Camadas da Arquitetura do Sistema

### Camada de Apresentação
- Interface para usuários realizarem operações como cadastro do usuário.
- Pode ser uma aplicação web ou desktop.
- Responsável por validar dados.

### Camada de Aplicação
- Contém as regras de negócio.
- Processa os dados recebidos da interface e prepara para envio ao sistema externo.
- Gera logs de operação e controla o fluxo de integração.

### Camada de Integração
- Implementada via Web Services (REST).
- Responsável por enviar e receber dados entre sistemas.
- Trata autenticação, criptografia e validação de mensagens.

### Camada de Persistência
Banco de dados relacional para armazenar:
- Dados de usuários
- Histórico de integrações
- Logs de envio e resposta

Garante consistência e rastreabilidade das operações.

### Camada de Sistemas Externos
- Sistemas destino que recebem os dados integrados.
- Podem ser ERPs, sistemas legados ou plataformas web.

## Padrões Arquiteturais

- Frontend e Backend independentes
- Comunicação via API REST
- Fácil escalabilidade e manutenção  

## ESPECIFICAÇÃO TECNOLÓGICA COMPLETA

Camada de Apresentação (Frontend)

| Componente Tecnologia | TECNOLOGIA                     | Justificativa                               |
|-----------------------|--------------------------------|---------------------------------------------| 
| Interface Web         | HTML5 + CSS3 + JavaScript ES6+ | HTML5 + CSS3 + JavaScript ES6+              |
| mapas interativos     | Leaflet.js + OpenStreetMap     | Leve, open-source,ideal para geolocalização |
| Requisições HTTP      | Fetch api                      | Nativo do navegador, moderno                |
| Build Tool            | vite                           | moderno, zero-config                        |

Camada de Aplicação (Backend)

| Componente   | Tecnologia                | Justificativa                          |
|--------------|---------------------------|----------------------------------------|
| Servidor Web | Node.js + Express.js      | JavaScript full-stack, alto desempenho |
| Api REST     | RESTful principles        | Padrão consolidado, fácil consumo      |
| Autenticação | JWT (JSON Web Tokens      | Stateless, seguro, padrão industry     |
| Validação    | Joi ou Express-validator  | Validação robusta dados                |

Camada de Dados

| COMPONENTE       | TECNOLOGIA       | JUSTIFICATIVA                       |
|------------------|------------------|-------------------------------------|
| Banco de Dados   | MongoDB Atlas    | JSON-native,escalável,cloud-ready   |
| ODM              | Mongoose         | Schema validation,middlewares       |
| CACHE            | Redis (opcional) | Performance em consultas frequentes |

Camada de Serviços Externos

| COMPONENTE     | TECNOLOGIA                    | JUSTIFICATIVA                       |
|----------------|-------------------------------|-------------------------------------|
| GEOCODIFICAÇÃO | Nominatim (OpenStreetMap)     | Gratuito, dados abertos             | 
| Deploy         | (Frontend) + Railway(Backend) | Gratuito para projetos acadêmicos   |
| MAPAS          | OpenStreetMap Tiles           | Alternativa gratuita ao Google Maps |

## Modelagem

Diagrama de Fluxo de Componentes
<img width="499" height="825" alt="Captura de tela de 2025-09-30 22-48-32" src="https://github.com/user-attachments/assets/89ff09b3-cd60-4633-93ee-dcdc86452e4d" />

Diagrama de componentes

<img width="583" height="325" alt="Captura de tela de 2025-09-30 21-45-21" src="https://github.com/user-attachments/assets/ae8c84b8-a1f1-4cf7-8983-207244b3128f" />

