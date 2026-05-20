import type { RowDataPacket } from "mysql2";
import db from "../lib/db.js";
import type { PrestacaoServicoDBType, PrestadorTypeDB } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";


export const FreelancerModel = {
    async create(newFreelancer: PrestadorTypeDB): Promise<PrestadorTypeDB | null> {
        try {
            const [rows] = await db.execute<PrestadorTypeDB & RowDataPacket[]>(
                `INSERT INTO tbl_prestadores (
            id, id_user, nif, profissao, 
            taxa_urgencia, minimo_desconto, percentagem_desconto, disponivel, 
            enabled, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    generateUUID(),
                    newFreelancer.id_user,
                    newFreelancer.nif,
                    newFreelancer.profissao,
                    newFreelancer.taxa_urgencia,
                    newFreelancer.minimo_desconto,
                    newFreelancer.percentagem_desconto,
                    newFreelancer.disponivel,
                    newFreelancer.enabled,
                    new Date(),
                    new Date()
                ]
            )

            return rows as PrestadorTypeDB
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async getAll(): Promise<PrestadorTypeDB[] | null> {
        try {
            const query = "SELECT * FROM tbl_prestadores";

            const [rows] = await db.execute<PrestadorTypeDB[] & RowDataPacket[]>(query);

            return rows as PrestadorTypeDB[];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string): Promise<PrestadorTypeDB | null> {
        try {
            const query = 'SELECT * FROM tbl_prestadores WHERE id = ?'

            const value = [id]

            const [rows] = await db.execute<PrestadorTypeDB & RowDataPacket[]>(query, value)

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as PrestadorTypeDB : null
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async update(id: string, updateFreelancer: PrestadorTypeDB) {
        try {
            const query = `UPDATE tbl_prestadores
                    SET
                        id_user=?,
                        nif=?,
                        profissao=?,
                        taxa_urgencia=?,
                        minimo_desconto=?,
                        percentagem_desconto=?,
                        disponivel=?,
                        enabled=?,
                        updated_at=?
                    WHERE
                        id=?
                    ;`

            const values = [
                updateFreelancer.id_user,
                updateFreelancer.nif,
                updateFreelancer.profissao,
                updateFreelancer.taxa_urgencia,
                updateFreelancer.minimo_desconto,
                updateFreelancer.percentagem_desconto,
                updateFreelancer.disponivel,
                updateFreelancer.enabled,
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

    async delete(id: string): Promise<PrestadorTypeDB | null> {
        try {
            const query = 'DELETE FROM tbl_prestadores WHERE id = ?'

            const value = [id]

            const [rows]: any = await db.execute<PrestadorTypeDB & RowDataPacket[]>(query, value)

            return rows[0]?.affectedRows === 0 ? null : rows
        } catch (error) {
            console.log(error)
            return null
        }
    },

};


