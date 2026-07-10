import { Pool } from "pg";

const db = new Pool({
    host: process.env.HOSTNAME || "localhost",
    user: process.env.USERNAME || "postgres",
    password: process.env.PASSWORD || "sua_senha",
    database: process.env.DATABASE || "servidor_local",
    port: Number(process.env.PORT) || 5432,
    ssl: process.env.DB_PG_SSL ? {
        rejectUnauthorized: false
    }
});
db.connect()
    .then(() => console.log("Conexão com o banco de dados PostgreSQL estabelecida com sucesso!"))
    .catch((error) => console.error("Erro ao conectar ao banco de dados PostgreSQL:", error.stack));

export default db 
