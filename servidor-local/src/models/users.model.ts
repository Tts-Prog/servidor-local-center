<<<<<<< HEAD
import db from "../lib/db.js";
import { formatDateDDMMYYYY } from "../utils/data.js";
import { hashPassword } from "../utils/password.js";
import { generateUUID } from "../utils/uuid.js";
import type { UserDBType, userType } from "../utils/types.js";
import type { RowDataPacket } from "mysql2";

export const UsersModel = {

    async create(User: userType): Promise<UserDBType | null> {
       console.log({User})
       console.log( User.nome,
                    User.numero_identidade,
                    formatDateDDMMYYYY(User.data_nascimento),
                    User.email,
                    await hashPassword(User.password),
                    User.telefone,
                    User.pais,
                    User.localidade,
                    User.role || "cliente",
                    User.enebled ?? true,
                    new Date(),
                    new Date())
        try {

            const [rows] = await db.execute<UserDBType & RowDataPacket[]>(`
            INSERT INTO tbl_utilizadores
            (id, nome, numero_identidade, data_nascimento, email, password, telefone, pais, localidade, role, enebled, created_at, update_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    generateUUID(),
                    User.nome,
                    User.numero_identidade,
                    formatDateDDMMYYYY(User.data_nascimento),
                    User.email,
                    await hashPassword(User.password),
                    User.telefone,
                    User.pais,
                    User.localidade,
                    User.role || "cliente",
                    User.enebled ?? true,
                    new Date(),
                    new Date()
                ]
            )
            return rows as UserDBType;

        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getAll() {
        try {

            const query = `SELECT * FROM tbl_utilizadores`;

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];

        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string): Promise<UserDBType | null> {
        try {

            const query = `SELECT * FROM tbl_utilizadores WHERE id = ?`;

            const values = [id];

            const rows: any = await db.execute(query, values);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getById(id: string): Promise<UserDBType | null> {
        try {
            const [rows] = await db.execute<UserDBType & RowDataPacket[]>(
                `SELECT * FROM tbl_utilizadores WHERE tbl_utilizadores.id = ?`, [id]

            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as UserDBType : null
=======
<<<<<<< HEAD
import type { get } from "node:http";
import db from "../lib/db.js";
import { formatDataDDMMYY } from "../utils/data.js";
import { hashPasseword } from "../utils/passeword.js";
import type { UserType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";


export const UserModel = {
    async create(newUser: UserType): Promise<UserType | null> {
        try {
            const query = "INSERT INTO tbl_utilizadores VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
            const value =[
                generateUUID(),
                newUser.nome,
                newUser.numero,
                formatDataDDMMYY(newUser.data_nascimento),
                newUser.email,
                newUser.telefone,
                newUser.pais,
                newUser.localidade,
                await hashPasseword(newUser.password),
                newUser.enabled,
                new Date(),
                new Date(),
                newUser.role
            ]
            console.log(value)
            const [user] = await db.execute(query, value)
            return (Array.isArray(user) ? user[0] : user) as UserType
        } catch (err) {
            console.error("Erro ao inserir utilizador:", err);
            return null;
        }
    },
    async getAll(): Promise<UserType[] | null> {
        try {
            const [rows] = await db.execute("SELECT * FROM tbl_utilizadores")
            return rows as UserType[]
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        } catch (err) {
            console.log(err)
            return null
        }
    },
<<<<<<< HEAD

    async getByEmail(email: string): Promise<UserDBType | null> {
        try {
            const [rows] = await db.execute
                (`SELECT * FROM tbl_utilizadores 
                WHERE email = ?`, [email]);
            if (Array.isArray(rows) && rows.length === 0) return null;
            return Array.isArray(rows) ? rows[0] as UserDBType : null;
        } catch (error) {
            console.log(error);
=======
    async get(id: string): Promise<UserType | null> {
        try {
            const query = "SELECT * FROM tbl_utilizadores WHERE tbl_utilizadores.id = ?"
            const value = [id]
            const [rows] = await db.execute(query, value)
=======
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
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
            return null;
        }
    },


<<<<<<< HEAD



    // trabalho final..................................................
    //(ADICIONAR)

    async updatePassword(id: string, newPassword: string) {
        try {
            const query = `
        UPDATE tbl_utilizadores
        SET password = ?, update_at = ?
        WHERE id = ?
        `;
            const hasPassword = await hashPassword(newPassword);
            const values = [
                hasPassword,
                new Date(),
                id
            ];

            const rows: any = await db.execute(query, values);

            return rows[0]?.affectedRows === 0 ? null : rows;

        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async resetPassword(id: string, newPassword: string): Promise<UserDBType | null> {
        try {
            const query = "tbl_utilizadores SET password=?, updated_at=? WHERE id=?";

            const hasPassword = await hashPassword(newPassword)
            const value = [hasPassword, new Date(), id]

            //User se existe
            const [rows] = await db.execute<UserDBType[] & RowDataPacket[]>(query, value);
            return rows[0] as UserDBType;
        } catch (error) {
            return null
        }
    },

    async update(id: string, updatedUser: userType):Promise<UserDBType | null> {
        try {

            const query = `
            UPDATE tbl_utilizadores
            SET
                nome = ?,
                numero_identidade = ?,
                data_nascimento = ?,
                email = ?,
                password = ?,
                telefone = ?,
                pais = ?,
                localidade = ?,
                enebled = ?,
                update_at = ?
            WHERE id = ?
            `;

            const values = [
                updatedUser.nome,
                updatedUser.numero_identidade,
                formatDateDDMMYYYY(updatedUser.data_nascimento),
                updatedUser.email,
                await hashPassword(updatedUser.password),
                updatedUser.telefone,
                updatedUser.pais,
                updatedUser.localidade,
                updatedUser.enebled,
                new Date(),
                id
            ];

            const [rows] = await db.execute<UserDBType & RowDataPacket[]>(query, values);

            return  rows as UserDBType;

        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async delete(id: string) {
        try {

            const query = `DELETE FROM tbl_utilizadores WHERE id = ?`;

            const values = [id];

            const rows: any = await db.execute(query, values);

            return rows[0]?.affectedRows === 0 ? null : rows;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
};
=======
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

>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as UserType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },
<<<<<<< HEAD
    async getByEmail(email: string): Promise<UserType | null> {
        try {
            const query = "SELECT * FROM tbl_utilizadores WHERE tbl_utilizadores.email = ?"
            const value = [email]
            const [rows] = await db.execute(query, value)
=======

    async getByEmail(email: string): Promise<UserType | null> {
        try {
            const [rows] = await db.execute(
                `SELECT * FROM table_utilizadores 
                WHERE table_utilizadores.email = ?`,
                [email]
            )

>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as UserType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },
<<<<<<< HEAD
    async update(id: string, newUser: UserType): Promise<UserType | null> {
        try {
            const query = "UPDATE tbl_utilizadores SET nome=?, numero=?, data_nascimento=?, email=?, telefone=?, pais=?, localidade=?, password=?, enabled=?, updated_at=? WHERE id=?"
            const value =[
                newUser.nome,
                newUser.numero,
                formatDataDDMMYY(newUser.data_nascimento),
                newUser.email,
                newUser.telefone,
                newUser.pais,
                newUser.localidade,
                newUser.password,
                newUser.enabled,
                new Date(),
                id
            ]
            const [updatedUser] = await db.execute(query, value)
            return (Array.isArray(updatedUser) ? updatedUser[0] : updatedUser) as UserType
=======

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
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
        } catch (err) {
            console.log(err)
            return null
        }
    },
<<<<<<< HEAD
    async updatePassword(id: string, password: string): Promise<UserType | null> {
        try {
            const query ="UPDATE tbl_utilizadores SET password=?, updated_at=? WHERE id=?"
            const value =[
                await hashPasseword(password),
                new Date(),
                id
            ]
            const [updatedUser] = await db.execute(query, value)
            return (Array.isArray(updatedUser) ? updatedUser[0] : updatedUser) as UserType
=======

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
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
        } catch (err) {
            console.log(err)
            return null
        }
    },
<<<<<<< HEAD
    async delete(id: string): Promise<UserType | null> {
        try {
            const query = "DELETE FROM tbl_utilizadores WHERE id=?"
            const value = [id]
            const [rows] = await db.execute(query, value)
            if (Array.isArray(rows) && rows.length === 0) return null
            return (Array.isArray(rows) ? rows[0] : rows) as UserType
=======

    async delete(id: string) {
        try {
            const rows: any = await db.execute(
                `DELETE FROM table_utilizadores 
                WHERE table_utilizadores.id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0]
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
        } catch (err) {
            console.log(err)
            return null
        }
    }
<<<<<<< HEAD
}
=======
} 
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
