# especifica versao de sistema operativo
FROM node:20-alpine

# Defimir a pasta onde o codigo vai ser executado
WORKDIR /app

# Copia os arquivos package.jon e package-lock.json para a pasta /app
COPY package*.json ./

# Instalara as dependencias
RUN npm install

# Copia o codigo fonte para a pasta /app
COPY . .

# Informar a porta que a aplicacao vai usar
EXPOSE 3000

# Comando para executar aplicacao em modo desenvolvimento
CMD [ "npm", "run", "dev" ]