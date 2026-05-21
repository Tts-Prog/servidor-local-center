import db from "../lib/db.js";
import { formatDateDDMMYYYY } from "../utils/date.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateUUID } from "../utils/uuid.js";
export const UsersModel = {
    async create(user) {
        try {
            const query = `
            INSERT INTO tbl_utilizadores
            (id, nome, numero_identidade, data_nascimento, email, password, telefone, pais, localidade, role, enebled, created_at, update_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                generateUUID(),
                user.nome,
                user.numero_identidade,
                formatDateDDMMYYYY(user.data_nascimento),
                user.email,
                await hashPassword(user.password),
                user.telefone,
                user.pais,
                user.localidade,
                user.role || "CLIENTE",
                user.enebled ?? true,
                new Date(),
                new Date()
            ];
            const [rows] = await db.execute(query, values);
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getAll() {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_utilizadores`);
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async get(id) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_utilizadores WHERE id = ?`, [id]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getByEmail(email) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_utilizadores WHERE email = ?`, [email]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async update(id, updatedUser) {
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
                role = ?,
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
                updatedUser.role || "CLIENTE",
                updatedUser.enebled ?? true,
                new Date(),
                id
            ];
            const [rows] = await db.execute(query, values);
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async updatePassword(id, newPassword) {
        try {
            const query = `
            UPDATE tbl_utilizadores
            SET password = ?, update_at = ?
            WHERE id = ?
            `;
            const hashedPassword = await hashPassword(newPassword);
            const values = [hashedPassword, new Date(), id];
            const rows = await db.execute(query, values);
            return rows[0]?.affectedRows === 0 ? null : rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async resetPassword(id, passwordRequest) {
        try {
            const user = await this.get(id);
            if (!user)
                throw new Error("Utilizador nao encontrado");
            const isMatch = await comparePassword(passwordRequest.oldPassword, user.password);
            if (!isMatch)
                throw new Error("A senha antiga esta incorreta");
            if (passwordRequest.newPassword !== passwordRequest.passwordConfirmed) {
                throw new Error("As senhas nao coincidem");
            }
            return await this.updatePassword(id, passwordRequest.newPassword);
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async delete(id) {
        try {
            const query = `DELETE FROM tbl_utilizadores WHERE id = ?`;
            const values = [id];
            const rows = await db.execute(query, values);
            return rows[0]?.affectedRows === 0 ? null : rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
};
//# sourceMappingURL=users.model.js.map