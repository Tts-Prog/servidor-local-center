    # expecifica versao  de sestema operacional base
FROM node:22-alpine

# define a pasta onde o codigo vai ser executado
WORKDIR /app

# copia os arquivos package.json e package-lock.json para a pasta / app
COPY package*.json ./

# instala as dependencias
RUN yarn install

# copia o codigo-fonte para a pasta / app
COPY . .

#informar parta que a aplicacao vai rodar
EXPOSE 3000

# comando para iniciar a aplicacao
CMD ["npm", "run", "dev"]