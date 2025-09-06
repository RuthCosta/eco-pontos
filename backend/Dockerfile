# Usar Node.js oficial
FROM node:20

# Criar diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta
EXPOSE 3000

# Rodar a API
CMD ["node", "index.js"]
