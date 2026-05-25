<<<<<<< HEAD
# especifica versao de sistema operativo
=======
>>>>>>> dev
FROM node:20-alpine

# Defimir a pasta onde o codigo vai ser executado
WORKDIR /app

<<<<<<< HEAD
# Copia os arquivos package.jon e package-lock.json para a pasta /app
COPY package*.json ./

# Instalara as dependencias
RUN npm install
=======
RUN corepack enable
dfsf
COPY package.json ./
RUN pnpm install
>>>>>>> dev

# Copia o codigo fonte para a pasta /app
COPY . .

# Informar a porta que a aplicacao vai usar
EXPOSE 3000

<<<<<<< HEAD
# Comando para executar aplicacao em modo desenvolvimento
CMD [ "npm", "run", "dev" ]
=======
CMD ["pnpm", "run", "dev"]
>>>>>>> dev
