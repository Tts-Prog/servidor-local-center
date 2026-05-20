import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: `${process.env.DATABASE_PASSWORD}`,
    database: "servidor_local"
});

export default db;