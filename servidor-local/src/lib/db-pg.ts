import { Pool } from "pg";

const db = new Pool({
    host: process.env.DB_PG_HOST || "localhost",
    user: process.env.DB_PG_USER || "postgres",
    password: process.env.DB_PG_PASSWORD || "sua_senha",
    database: process.env.DB_PG_DATABASE || process.env.DB_PG_NAME || "servidor_local",
    port: Number(process.env.DB_PG_PORT) || 5432,
    ssl: process.env.DB_PG_SSL === "true" ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 10000,
    max: 10,
});

db.on("error", (error) => {
    console.error("Erro inesperado no pool PostgreSQL:", error.message);
});

export async function checkDatabaseConnection(): Promise<boolean> {
    try {
        await db.query("SELECT 1");
        return true;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Base de dados indisponivel:", message);
        return false;
    }
}

export default db;
