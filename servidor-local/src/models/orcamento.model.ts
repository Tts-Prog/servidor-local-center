import type { RowDataPacket } from "mysql2";
import db from "../lib/db.js";
import type { OrcamentoDBType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";

export const OrcamentoModel = {
    async create(orcamento: OrcamentoDBType): Promise<OrcamentoDBType | null> {
        try {
            const query = `INSERT INTO tbl_orcamento (id, total, id_utilizadores, enabled, created_at, updated_at) 
            VALUES ($1, $2, $3, $4, $5, $6) Returning *`;
            const values = [
                generateUUID(),
                orcamento.total,
                orcamento.id_utilizadores,
                orcamento.enabled ?? true,
                new Date(),
                new Date()
            ];
            
            const result  = await db.query<OrcamentoDBType & RowDataPacket[]>(query, values);
            
            

            return result[0] as OrcamentoDBType;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async getAll(): Promise<OrcamentoDBType[] | null> {
        try {
            const result = await db.query<OrcamentoDBType[] & RowDataPacket[]>("SELECT * FROM tbl_orcamento");
            return result[0] as OrcamentoDBType[];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string): Promise<OrcamentoDBType | null> {
        try {
            const result = await db.query<OrcamentoDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_orcamento WHERE id = $1`,
                [id]
            );

            if (Array.isArray(result[0]) && result[0].length === 0) return null;
            return Array.isArray(result[0]) ? result[0][0] as OrcamentoDBType : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async update(id: string, orcamento: Partial<OrcamentoDBType>): Promise<OrcamentoDBType | null> {
        try {
            const query = `UPDATE tbl_orcamento SET total = $1, id_utilizadores = $2, enabled = $3, updated_at = $4 WHERE id = $5`;
            const queryValues = [
                orcamento.total ?? 0,
                orcamento.id_utilizadores ?? "",
                orcamento.enabled ?? true,
                new Date(),
                id
            ];
                
            const result = await db.execute<OrcamentoDBType & RowDataPacket[]>(query, queryValues);
            return result[0] as OrcamentoDBType;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async delete(id: string): Promise<OrcamentoDBType[] | null> {
        try {
            const result = await db.execute(`DELETE FROM tbl_orcamento WHERE id = $1`, [id]);
            return result[0] as OrcamentoDBType[];
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async updateBudget(id: string, total: number): Promise<OrcamentoDBType | null> {
        try {
            const result = await db.query<OrcamentoDBType & RowDataPacket[]>(
                `UPDATE tbl_orcamento SET total = $1, updated_at = $2 WHERE id = $3 RETURNING *`,
                [total, new Date(), id]
            );
            return result[0] as OrcamentoDBType;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
};
