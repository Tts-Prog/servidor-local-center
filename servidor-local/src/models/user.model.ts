import type { userTypeDB } from "../utils/types.js";
import db from "../lib/db.js";
import { generateUUID } from "../utils/uuid.js";
import { formatDateDDMMYYY } from "../utils/date.js";
import { hashPassword } from "../utils/password.js";

export const UserModel = {
    async create(newUser: userTypeDB) {
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
                1,
                new Date(),
                new Date()
            ];

            const [rows] = await db.execute(query, values)

            return rows
        } catch (error) {
            console.log(error)
        }
    },

    async getAll() {
        try {
            const query = "SELECT * FROM tbl_Useres";

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string) {
        try {
            const query = 'SELECT * FROM tbl_Useres WHERE id = ?'

            const [rows] = await db.execute(query, [id])

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? (rows as any[])[0] : null
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async getByEmail(email: string): Promise<userTypeDB | null> {
        try {
            const [rows] = await db.execute(
                `SELECT * FROM tbl_Useres
                WHERE tbl_Useres.email = ?`,
                [email]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as userTypeDB : null
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async update(id: string, updateUser: userTypeDB) {
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
    },


    async delete(id: string) {
        try {
            const query = 'DELETE FROM tbl_Useres WHERE id = ?'

            const value = [id]

            const [rows]: any = await db.execute(query, value)

            return rows[0]?.affectedRows === 0 ? null : rows
        } catch (error) {
            console.log(error)
            return null
        }
    }
};
