import { Pool } from "pg";

const db = new Pool({
    host: process.env.Hostname || "localhost",
    user: process.env.Username || "postgres",
    password: process.env.Password || "sua_senha",
    database: process.env.Database || "servidor_local",
    port: Number(process.env.Port) || 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
db.connect()
    .then(() => console.log("Conexão com o banco de dados PostgreSQL estabelecida com sucesso!"))
    .catch((error) => console.error("Erro ao conectar ao banco de dados PostgreSQL:", error.stack));

export default db