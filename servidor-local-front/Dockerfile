<<<<<<< HEAD
#verifica o sistema operacional base
=======
<<<<<<< HEAD
FROM node:24.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
=======
# especifica versao de sistema operacional base

>>>>>>> refs/remotes/origin/dev
FROM node:20-alpine

#cria a pasta /app
WORKDIR /app

#copia os arquivos de configuração package.json e package-lock.json para a pasta /app
COPY package.json .

#instala as dependências
RUN npm install

#copia o resto dos arquivos do projeto para a pasta /app
COPY . .

#expõe a porta 3000
EXPOSE 3000


# Comando para executar a aplicacao em modo de desenvolvimento 
CMD ["npm", "run", "dev"]

