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

FROM node:20-alpine

# Define a pasta onde o codigo vai ser executado
WORKDIR /app 

# copia os arquivos package.json e package-lock.json para a pasta /app
COPY package*.json ./

# Instala as dependencias 
RUN npm install

#copia o resto do codigo para a pasta /app
COPY . .

# Informar a porta que vai ser utilizada
EXPOSE 3000

# Comando para executar a aplicacao em modo de desenvolvimento 
CMD ["npm", "run", "dev"]
>>>>>>> 08f640137d5d06341ceea887ff3f672ac3a04d03
