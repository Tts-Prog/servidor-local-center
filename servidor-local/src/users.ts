<<<<<<< HEAD
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
=======
import db from "./lib/db.js";
import { formatDateDDMMYYYY } from "./utils/data.js";
import { hashPassword } from "./utils/password.js";
import type { userType } from "./utils/types.js";
import { generateUUID } from "./utils/uuid.js";

export async function getUsers() {
    const [rows] = await db.execute("SELECT * FROM tbl_utilizadores")
    return rows;
}

export async function getUserById(id: string) {
    const [rows] = await db.execute(
        "SELECT * FROM tbl_utilizadores WHERE id = ? ", [id]);
    if (Array.isArray(rows) && rows.length === 0) return null
    return Array.isArray(rows) ? rows[0] : null;
}

export async function createUser(
    id: string,
    nome: string,
    numero_identidade: string,
    data_nascimento: string,
    email: string,
    password: string,
    telefone: string,
    pais: string,
    localidade: string,
    enebled: boolean,
    created_at: string,
    update_at: string

) {
    try {

        const [rows] = await db.execute(
            `INSERT INTO tbl_utilizadores
        (id, nome, numero_identidade, data_nascimento, email, password, telefone, pais, localidade, enebled, created_at, update_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                generateUUID(),
                nome,
                numero_identidade,
                formatDateDDMMYYYY(data_nascimento),
                email,
                await hashPassword (password),
                telefone,
                pais,
                localidade,
                enebled,
                new Date(),
                new Date()
            ]
        );

        console.log({ rows })
        return rows
    } catch (error) {
        console.log(error);
        return null;
>>>>>>> dev
    }
}


<<<<<<< HEAD
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
=======
export async function updateUser(id: string, updatedUser: userType) {
    try {
        const query = `
        UPDATE tbl_utilizadores
        SET
    nome: = ?,
    numero_identidade: = ?,
    data_nascimento: = ?,
    email: = ?,
    password: = ?,
    telefone: = ?,
    pais: = ?,
    localidade: = ?,
    enebled: = ?,
    update_at: = ?
        WHERE
        id=?
        `;

        const values = [
            updatedUser.nome,
            updatedUser.numero_identidade,
            updatedUser.data_nascimento,
            updatedUser.email,
            updatedUser.password,
            updatedUser.telefone,
            updatedUser.pais,
            updatedUser.localidade,
            updatedUser.enebled,
            new Date(),
            id
        ]
        const rows = await db.execute(query, values)

        return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

    } catch (error) {
        console.log(error);
>>>>>>> dev
        return null
    }
}

<<<<<<< HEAD

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
=======
export async function deleteUser(id: string) {
    try {

        const query = `DELETE  FROM tbl_utilizadores WHERE id = ?`

        const values = [id]

        const rows: any = await db.execute(query, values)

        return rows[0]?.affectedRows === 0 ? null : rows

    } catch (error) {
        console.log(error);
        return null
    }
}

>>>>>>> dev
