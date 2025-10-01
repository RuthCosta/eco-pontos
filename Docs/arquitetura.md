# 5. DESIGN DA ARQUITETURA

## 5.1 Definição da Arquitetura do Sistema

## 5.2 Camadas da Arquitetura do Sistema

### 5.2.1 Camada de Apresentação
- Interface para usuários realizarem operações como cadastro do usuário.
- Pode ser uma aplicação web ou desktop.
- Responsável por validar dados.

### 5.2.2 Camada de Aplicação
- Contém as regras de negócio.
- Processa os dados recebidos da interface e prepara para envio ao sistema externo.
- Gera logs de operação e controla o fluxo de integração.

### 5.2.3 Camada de Integração
- Implementada via Web Services (REST).
- Responsável por enviar e receber dados entre sistemas.
- Trata autenticação, criptografia e validação de mensagens.

### 5.2.4 Camada de Persistência
Banco de dados relacional para armazenar:
- Dados de usuários
- Histórico de integrações
- Logs de envio e resposta

Garante consistência e rastreabilidade das operações.

### 5.2.5 Camada de Sistemas Externos
- Sistemas destino que recebem os dados integrados.
- Podem ser ERPs, sistemas legados ou plataformas web.

## 5.3 Padrões Arquiteturais

- Frontend e Backend independentes
- Comunicação via API REST
- Fácil escalabilidade e manutenção  

## 5.4 ESPECIFICAÇÃO TECNOLÓGICA COMPLETA

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

Diagrama de componentes

