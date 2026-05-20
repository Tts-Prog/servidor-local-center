# Usamos Node.js versão Alpine por ser extremamente leve
FROM node:20-alpine

# Define a pasta onde o codigo vai ser executado
WORKDIR /app

# Copiamos as dependências primeiro para aproveitar a cache do Docker
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copiamos o código-fonte
COPY . .

# Expomos a porta 3000 (O padrão do nosso frontend nesta UF)
EXPOSE 3000

# Comando para rodar em modo desenvolvimento
CMD ["npm", "run", "dev"]