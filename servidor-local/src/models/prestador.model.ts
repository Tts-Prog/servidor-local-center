<<<<<<< HEAD
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
=======
// import type { RowDataPacket } from "mysql2";
import db from "../lib/db.js";
import type { PrestadorDBType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";

export const PrestadorModel = {
    async create(prestador: PrestadorDBType): Promise<PrestadorDBType | null> {
        try {
            const query = `INSERT INTO tbl_prestadores 
            (id, taxa_urgencia, percentagem_desconto, minimo_desconto, nif, profissao, enable, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
            const values = [
                generateUUID(),
                prestador.taxa_urgencia,
                prestador.percentagem_desconto,
                prestador.minimo_desconto,
                prestador.nif,
                prestador.profissao,
                prestador.enable ?? true,
                new Date(),
                new Date()
            ];

            const result = await db.query<PrestadorDBType[]>(query, values);
            return result.rows[0] as PrestadorDBType;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async getAll(): Promise<PrestadorDBType[] | null> {
        try {
            const result = await db.query<PrestadorDBType[]>("SELECT * FROM tbl_prestadores RETURNING *");
            return result.rows as PrestadorDBType[];
        } catch (err) {
            console.log(err);
>>>>>>> dev
            return null;
        }
    },

    async get(id: string): Promise<PrestadorTypeDB | null> {
        try {
<<<<<<< HEAD
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


=======
            const [rows] = await db.query<PrestadorDBType[]>(
                `SELECT * FROM tbl_prestadores WHERE id = $1 RETURNING *`, [id]
            );

            if (Array.isArray(rows) && rows.length === 0) return null;
            return Array.isArray(rows) ? rows[0] as PrestadorDBType : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async update(id: string, prestador: PrestadorDBType): Promise<PrestadorDBType | null> {
        try {
            const query = `UPDATE tbl_prestadores 
                SET taxa_urgencia = $1, 
                percentagem_desconto = $2, 
                minimo_desconto = $3, 
                nif = $4, 
                profissao = $5, 
                enable = $6, 
                updated_at = $7
                WHERE id = $8 RETURNING *`;
            const values = [
                prestador.taxa_urgencia,
                prestador.percentagem_desconto,
                prestador.minimo_desconto,
                prestador.nif,
                prestador.profissao,
                prestador.enable,
                new Date(),
                id
            ];

            const result = await db.query<PrestadorDBType[]>(query, values);
            return result.rows[0] as PrestadorDBType;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async delete(id: string): Promise<PrestadorDBType | null> {
        try {
            const result = await db.query(`DELETE FROM tbl_prestadores WHERE id = $1 RETURNING *`, [id]);
            return result.rows[0] as PrestadorDBType;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async getPrecoHora(id: string): Promise<any | null> {
        try {
            const query = `SELECT
                                p.percentagem_desconto,
                                p.taxa_urgencia,
                                pr.preco_hora
                            FROM tbl_prestadores p
                            INNER JOIN tbl_proposta pr ON p.id = pr.id_prestador
                            WHERE p.id_utilizador = $1`;
            const value = [id];
            const result = await db.query<any[]>(query, value);
            if (Array.isArray(result.rows) && result.rows.length === 0) return null;
            return Array.isArray(result.rows) ? result.rows[0] : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
};
>>>>>>> dev
