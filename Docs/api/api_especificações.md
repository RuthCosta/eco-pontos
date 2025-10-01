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