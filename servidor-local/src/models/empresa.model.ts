
import type { RowDataPacket } from "mysql2";
import db from "../lib/db.js";
import type { EmpresaDBType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";

export const EmpresaModel = {
    async create(empresa: EmpresaDBType): Promise<EmpresaDBType | null> {
        try {
            const result = await db.query<EmpresaDBType & RowDataPacket[]>(
                `INSERT INTO tbl_empresa
                (id, designacao, descricao, localizacao, nif, icone, id_utilizador, enabled, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) Returning *`,
                [
                    generateUUID(),
                    empresa.designacao,
                    empresa.descricao,
                    empresa.localizacao,
                    empresa.nif,
                    empresa.icone,
                    empresa.id_utilizador,
                    empresa.enabled ?? true,
                    new Date(),
                    new Date(),
                ]
            );
            return result[0] as EmpresaDBType;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getAll(): Promise<EmpresaDBType[] | null> {
        try {
            const result = await db.query<EmpresaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_empresa`
            );
            return result[0] as EmpresaDBType[];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string): Promise<EmpresaDBType | null> {
        try {
            const result = await db.query<EmpresaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_empresa WHERE id = $1`,
                [id]
            );

            if (Array.isArray(result[0]) && result[0].length === 0) return null;
            return Array.isArray(result[0]) ? result[0][0] as EmpresaDBType : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async update(id: string, empresa: EmpresaDBType): Promise<EmpresaDBType | null> {
        try {
            const result = await db.query<EmpresaDBType & RowDataPacket[]>(
                `UPDATE tbl_empresa
                SET designacao = $1, descricao = $2, localizacao = $3, nif = $4, icone = $5, id_utilizador = $6, enabled = $7, updated_at = $8
                WHERE id = $9 Returning *`,
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
            return result[0] || null;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async delete(id: string): Promise<EmpresaDBType | null> {
        try {
            const [result] = await db.query(
                `DELETE FROM tbl_empresa WHERE id = $1 Returning *`,
                [id]
            );

            return result.rowCount === 0 ? null : result.rows[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    },
};
