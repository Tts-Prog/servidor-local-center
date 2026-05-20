import mysql from "mysql2/promise"

const db = mysql.createPool({
<<<<<<< HEAD
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
});
=======
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "servidor_local",
})
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

export default db 
