import { Pool } from "pg";

const db = new Pool({
    host: process.env.DB_PG_HOST || "localhost",
    user: process.env.DB_PG_USER || "postgres",
    password: process.env.DB_PG_PASSWORD || "sua_senha",
    database: process.env.DB_PG_NAME || process.env.DB_PG_DATABASE || "servidor_local",
    port: Number(process.env.DB_PG_PORT) || 5432,
    ssl: process.env.DB_PG_SSL === "true" ? { rejectUnauthorized: false } : undefined

});

db.on("error", (err, client) => {
    console.error(
        "⚠️ Erro de fundo no Pool do PostgreSQL. Tentando recuperar...",
        err.message,
    );
    // Não fazemos process.exit(-1) para a API continuar viva!
});

export default db
