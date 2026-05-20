import db from "./lib/db.js"
import mysql from "mysql2/promise"
import type { ServicoTypeDB, userTypeDB } from "./utils/types.js"
import { generateUUID } from "./utils/uuid.js"
import { hashPassword } from "./utils/password.js"
import { formatDate, formatDateDDMMYYY } from "./utils/date.js"

// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados



// adicionar User a base de dados
export async function addUserToDB(newUser: userTypeDB) {
    console.log({ newUser })

    try {
        const query = `INSERT INTO tbl_Useres (
            id, nome, numero_identificacao, data_nascimento, 
            email, password, telefone, pais, localidade, 
            enabled, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const values = [
            generateUUID(),
            newUser.nome,
            newUser.numero_identificacao,
            formatDateDDMMYYY(newUser.data_nascimento),
            newUser.email,
            await hashPassword(newUser.password),
            newUser.telefone,
            newUser.pais,
            newUser.localidade,
            newUser.enabled,
            new Date(),
            new Date()
        ];

        const [rows] = await db.execute(query, values)

        return rows
    } catch (error) {
        console.log(error)
    }
}


// selecionar User por id
export async function getUserById(id: string) {
    try {
        const query = 'SELECT * FROM tbl_Useres WHERE id = ?'

        const value = [id]

        const [rows] = await db.execute(query, value)

        return Array.isArray(rows) && rows.length > 0 ? rows[0] : null
    } catch (error) {
        console.log(error)
    }
}


// selicionar todos os Useres
export async function getAllUsers() {
    try {
        const query = 'SELECT * FROM tbl_Useres'

        const rows = await db.execute(query)

        return Array.isArray(rows) && rows.length > 0 ? rows[0] : []
    } catch (error) {
        console.log(error)
        return null
    }
}


// atualizar dados de Useres
export async function updateUser(id: string, updateUser: userTypeDB) {
    try {
        const query = `UPDATE tbl_Useres
                    SET
                        nome=?,
                        numero_identificacao=?,
                        data_nascimento=?,
                        email=?,
                        password=?,
                        telefone=?,
                        pais=?,
                        localidade=?,
                        enabled=?,
                        updated_at=?
                    WHERE
                        id=?
                    ;`

        const values = [
            updateUser.nome,
            updateUser.numero_identificacao,
            formatDateDDMMYYY(updateUser.data_nascimento),
            updateUser.email,
            await hashPassword(updateUser.password),
            updateUser.telefone,
            updateUser.pais,
            updateUser.localidade,
            updateUser.enabled,
            new Date(),
            id
        ]

        const rows = await db.execute(query, values)

        return rows
    } catch (error) {
        console.log(error)
        return null
    }
}


// apagar User por id
export async function deleteUserById(id: string) {
    const [rows] = await db.execute(
        'DELETE FROM tbl_Useres WHERE id =?',

        [id]
    ) as [mysql.ResultSetHeader, mysql.FieldPacket[]]

    if (rows.affectedRows === 0) {
        return null;
    }

    return { success: true, deletedId: id };
}
