# verifica versao do sistema operacional base 
FROM node:20-alpine

# define a pasta onde o projeto vai ser executado 
WORKDIR /app

# copia os arquivos de configuracao package.json e package-lock.json para a pasta /app
COPY package.json . 

# instala as dependências
RUN npm install

# copia o resto dos arquivos do projeto para a pasta /app
COPY . .

# expoe a porta 8080
EXPOSE 8080


# comando que vai ser executado quando o container for iniciado
CMD ["npm", "run", "dev"]