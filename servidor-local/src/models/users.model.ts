import { compare } from "bcrypt"
import db from "../lib/db.js"
import { formatDateDDMMYYYY } from "../utils/date.js"
import { Compare_Password, Hash_Password } from "../utils/password_hash.js"
import { Role, type PasswordRequestType, type UserType } from "../utils/types.js"
import  generateUUID from "../utils/uuid_generate.js"


export const UserModel = {
    async create(user: UserType) {
        try {

            `const emailRow: any = await db.execute(SELECT email from table_utilizadores
                
            )
            console.log(emailRow.email)

            if(emailRow.email === user.email){
                return "Erro ao criar usuário";
            };`

            const [rows] = await db.execute(
                `INSERT INTO table_utilizadores 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    generateUUID(),
                    user.nome,
                    user.numero_identificacao,
                    formatDateDDMMYYYY(user.data_nascimento),
                    user.email,
                    await Hash_Password(user.password),
                    user.telefone,
                    user.pais,
                    user.localidade,
                    user.enabled,
                    new Date(),
                    new Date(),
                    user.role = Role.CLIENTE,
                ]
            );


            console.log({ rows });
            return rows;
        } catch (err) {
            console.log(err);
            return null;
        }
    },


    async getAll() {
        const [rows] = await db.execute("SELECT * FROM table_utilizadores")

        return rows
    },

    async get(id: string): Promise<UserType | null> {
        try {
            const [rows] = await db.execute(
                `SELECT * FROM table_utilizadores 
                WHERE table_utilizadores.id = ?`,
                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as UserType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async getByEmail(email: string): Promise<UserType | null> {
        try {
            const [rows] = await db.execute(
                `SELECT * FROM table_utilizadores 
                WHERE table_utilizadores.email = ?`,
                [email]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as UserType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async update(id: string, user: UserType) {
        try {
            const [rows] = await db.execute(
                `UPDATE table_utilizadores 
                SET nome = ?, 
                numero_identificacao = ?, 
                data_nascimento = ?, 
                email = ?, 
                telefone = ?, 
                pais = ?, 
                localidade = ?,
                password = ?, 
                enabled = ?, 
                updated_at = ?
                WHERE id = ?`,

                [
                    user.nome,
                    user.numero_identificacao,
                    formatDateDDMMYYYY(user.data_nascimento),
                    user.email,
                    user.telefone,
                    user.pais,
                    user.localidade,
                    await Hash_Password(user.password),
                    user.enabled,
                    new Date(),
                    id
                ]
            )
            console.log({ rows })
            return rows
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async resetPassword(id: string, passwordRequest: PasswordRequestType) {
    
        try {
            const [rows]: any = await db.execute(
                `SELECT * FROM table_utilizadores 
                WHERE table_utilizadores.id = ?`,
                [id]
            )

            Compare_Password(passwordRequest.oldPassword, rows[0] as string).then((passwordComparisonResult) => {
                if(!passwordComparisonResult){
                    throw new Error("Error reseting password")
                }
                
            })
                
            if(passwordRequest.newPassword !== passwordRequest.passwordConfirmed){
                throw new Error("Confirm your password")
            }

            const [new_rows] = await db.execute(
            `UPDATE table_utilizadores 
                SET password = ?,
                updated_at = ?,
                WHERE table_utilizadores.id = ?`,[
                await Hash_Password(passwordRequest.passwordConfirmed),
                new Date(),
                id] 
            )

            console.log()
            return new_rows
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async delete(id: string) {
        try {
            const rows: any = await db.execute(
                `DELETE FROM table_utilizadores 
                WHERE table_utilizadores.id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0]
        } catch (err) {
            console.log(err)
            return null
        }
    }
} 