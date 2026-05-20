import type { RowDataPacket } from "mysql2";
<<<<<<< HEAD
=======
import type { CompanyType } from "../utils/types.js";
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
import db from "../lib/db.js";
import type { EmpresaDBType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";

<<<<<<< HEAD
export const EmpresaModel = {
    async create(empresa: EmpresaDBType): Promise<EmpresaDBType | null> {
        try {
            const [rows] = await db.execute<EmpresaDBType & RowDataPacket[]>(
                `INSERT INTO tbl_empresa
                (id, designacao, descricao, localizacao, nif, icone, id_utilizador, enabled, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    generateUUID(),
                    empresa.designacao,
                    empresa.descricao,
                    empresa.localizacao,
                    empresa.nif,
                    empresa.icone,
                    empresa.id_utilizador,
                    empresa.enabled,
                    new Date(),
                    new Date(),
                ]
            );
            return rows as EmpresaDBType;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getAll(): Promise<EmpresaDBType[] | null> {
        try {
            const [rows] = await db.execute<EmpresaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_empresa`
            );
            return rows as EmpresaDBType[];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string): Promise<EmpresaDBType | null> {
        try {
            const [rows] = await db.execute<EmpresaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_empresa WHERE id = ?`,
                [id]
            );

            if (Array.isArray(rows) && rows.length === 0) return null;
            return Array.isArray(rows) ? rows[0] as EmpresaDBType : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async update(id: string, empresa: EmpresaDBType): Promise<EmpresaDBType | null> {
        try {
            const [rows] = await db.execute<EmpresaDBType & RowDataPacket[]>(
                `UPDATE tbl_empresa
                SET designacao = ?, descricao = ?, localizacao = ?, nif = ?, icone = ?, id_utilizador = ?, enabled = ?, updated_at = ?
                WHERE id = ?`,
                [
                    empresa.designacao,
                    empresa.descricao,
                    empresa.localizacao,
                    empresa.nif,
                    empresa.icone,
                    empresa.id_utilizador,
                    empresa.enabled,
                    new Date(),
                    id,
                ]
            );
            return rows as EmpresaDBType;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async delete(id: string): Promise<EmpresaDBType | null> {
        try {
            const rows: any = await db.execute(
                `DELETE FROM tbl_empresa WHERE id = ?`,
                [id]
            );

            return rows[0]?.affectedRows === 0 ? null : rows[0] as EmpresaDBType;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
};
=======


export const CompanyModel = {
    async create(newcompany: CompanyType): Promise<CompanyType | null> {
        try {
            const query = "INSERT INTO tbl_empresa (id, designacao, descricao, nif, icone, id_utilizador, localizacao, enabled, created_at, updated_at) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?)"
            const value = [
                null,
                newcompany.designacao,
                newcompany.descricao,
                newcompany.nif,
                newcompany.icone,
                newcompany.id_utilizador,
                newcompany.localizacao,
                newcompany.enabled,
                new Date(),
                new Date()
            ]
            const [result] = await db.execute <CompanyType & RowDataPacket[]>(query, value);
            return result as CompanyType;
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async getAll(): Promise<CompanyType[] | null> {
        try {
            const query = "SELECT * FROM tbl_empresa"
            const rows = await db.execute<CompanyType[] & RowDataPacket[]>(query)
            return Array.isArray(rows) && rows.length > 0 ? rows[0] as CompanyType[] : []
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async get(id: string): Promise<CompanyType | null> {
        try {
            const query = `
            SELECT DISTINCT
                e.*,
                u.id as owner
            FROM tbl_empresa e
            INNER JOIN tbl_utilizadores u ON e.id_utilizador = u.id
            WHERE e.id = ?
            `
            const value = [id]
            const [rows] = await db.execute<CompanyType & RowDataPacket[]>(query, value)
            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as CompanyType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async update(id: string, newcompany: CompanyType): Promise<CompanyType | null> {
        try {
            const query = "UPDATE tbl_empresa SET designacao=?, descricao=?, nif=?, icone=?, id_utilizador=?, localizacao=?, enabled=?, updated_at=? WHERE id=?"
            const value = [
                newcompany.designacao,
                newcompany.descricao,
                newcompany.nif,
                newcompany.icone,
                newcompany.id_utilizador,
                newcompany.localizacao,
                newcompany.enabled,
                new Date(),
                id
            ]
            const [result] = await db.execute<CompanyType & RowDataPacket[]>(query, value);
            return result as CompanyType;
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async delete(id: string): Promise<CompanyType | null> {
        try {
            const query = "DELETE FROM tbl_empresa WHERE id=?"
            const value = [id]
            const [rows] = await db.execute(query, value)
            if (Array.isArray(rows) && rows.length === 0) return null
            return (Array.isArray(rows) ? rows[0] : rows) as CompanyType
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
