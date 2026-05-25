import mysql from "mysql2/promise"

const db = mysql.createPool({
<<<<<<< HEAD
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || ""
})
=======
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "servidor_local",
});
>>>>>>> dev

export default db 
