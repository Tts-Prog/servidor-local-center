
<<<<<<< HEAD
import type { RowDataPacket } from "mysql2/promise"
=======
// import type { RowDataPacket } from "mysql2"
>>>>>>> dev
import db from "../lib/db.js"
import type { PropostaDBType } from "../utils/types.js"
import { generateUUID } from "../utils/uuid.js"


export const PropostaModel = {
    async create(proposta: PropostaDBType): Promise<PropostaDBType | null> {
        try {
<<<<<<< HEAD
            const [rows] = await db.execute(
                `INSERT INTO tbl_proposta
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,

                [
                    null,
=======
            const result = await db.query<PropostaDBType[]>(
                `INSERT INTO tbl_proposta 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,

                [
                    generateUUID(),
>>>>>>> dev
                    proposta.id_prestacao_servico,
                    proposta.preco_hora,
                    proposta.horas_estimadas,
                    proposta.estado,
                    proposta.enabled,
                    new Date(),
                    new Date()
                ]
            )
            return result.rows[0] as PropostaDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

<<<<<<< HEAD
    async getAll() {
        const [rows] = await db.execute("SELECT * FROM tbl_proposta")
=======
    async getAll(): Promise<PropostaDBType[] | null> {
        const result = await db.query("SELECT * FROM tbl_proposta RETURNING *")
>>>>>>> dev

        return result.rows as PropostaDBType[]
    },

    async get(id: string) {
        try {
<<<<<<< HEAD
            const [rows] = await db.execute(
                `SELECT DISTINCT
                    pt.* ,
                    pr.id as owner
                FROM tbl_proposta pt
                INNER JOIN tbl_prestadores pr ON pt.id_prestador = pr.id
                INNER JOIN tbl_Useres u ON pr.id_User = u.id
                WHERE pt.id = ?`,
=======
            const [rows] = await db.query<PropostaDBType[]>(
                `SELECT DISTINCT 
                pt.*,
                pr.id as ownwer
                FROM tbl_proposta pt
                INNER JOIN tbl_prestadores pr ON pt.id_prestador = pr.id
                INNER JOIN tbl_utilizadores u ON pr.id_utilizador = u.id
                WHERE pt.id = $1 RETURNING *`,
>>>>>>> dev

                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
<<<<<<< HEAD
            return Array.isArray(rows) ? rows[0] : null
=======
            return Array.isArray(rows) ? rows[0] as PropostaDBType : null
>>>>>>> dev
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async update(id: string, proposta: PropostaDBType) {
        try {
<<<<<<< HEAD
            const [rows] = await db.execute(
                `UPDATE tbl_proposta 
                SET id_prestacao_servico = ?, 
                preco_hora = ?, 
                horas_estimadas = ?, 
                estado = ?, 
                enabled = ?, 
                updated_at = ?
                WHERE id = ?`,
=======
            const result = await db.query<PropostaDBType[]>(
                `UPDATE tbl_proposta
                SET id_prestacao_servico = $1, 
                preco_hora = $2, 
                horas_estimadas = $3, 
                estado = $4, 
                enabled = $5, 
                updated_at = $6
                WHERE id = $7 RETURNING *`,
>>>>>>> dev

                [
                    proposta.id_prestacao_servico,
                    proposta.preco_hora,
                    proposta.horas_estimadas,
                    proposta.estado,
                    proposta.enabled,
                    new Date(),
                    id
                ]
            )
            return result.rows[0] as PropostaDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

    // trabalho final..................................................

    async aceitarProposta(id: string): Promise<PropostaDBType | null> {
        try {
<<<<<<< HEAD
            const rows: any = await db.execute(
                `DELETE FROM tbl_proposta 
                WHERE id = ?`,
=======

            // 1. marcar proposta como aceite
            await db.query<PropostaDBType[]>(
                `UPDATE tbl_proposta SET estado = 'Aceite' WHERE id = $1 RETURNING *`,
                [id]
            );

            // 2. buscar proposta
            const result = await db.query<PropostaDBType[]>(
                `SELECT * FROM tbl_proposta WHERE id = $1 RETURNING *`,
                [id]
            );

            const proposta = result.rows[0];

            // 3. atualizar prestacao_servico
            await db.query<PropostaDBType[]>(
                `UPDATE tbl_prestacao_servico 
             SET estado = 'Aceite'
             WHERE id = $1 RETURNING *`,
                [proposta.id_prestacao_servico]
            );

            // 4. rejeitar restantes propostas
            await db.query<PropostaDBType[]>(
                `UPDATE tbl_proposta 
             SET estado = 'Rejeitada'
             WHERE id_prestacao_servico = $1 AND id != $2 RETURNING *`,
                [proposta.id_prestacao_servico, id]
            );

            return null;

        } catch (error) {
            console.log(error);
            return null;
        }
    },


    async delete(id: string): Promise<PropostaDBType | null> {
        try {
            const result = await db.query<PropostaDBType[]>(
                `DELETE FROM tbl_proposta 
                WHERE id = $1 RETURNING *`,
>>>>>>> dev

                [id]
            )

            return result.rows[0]
        } catch (err) {
            console.log(err)
            return null
        }
    },

<<<<<<< HEAD
    async getByIdPrestacaoServico(id_prestacao_servico: string): Promise<PropostaDBType[] | null> {
        try {
            const [rows] = await db.execute<PropostaDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_proposta 
                WHERE tbl_proposta.id_prestacao_servico = ?`,
                [id_prestacao_servico]
=======
    // trabalho final..................................................

    async getByPrestacaoServico(idPrestacaoServico: string): Promise<PropostaDBType[] | null> {
        try {
            const result = await db.query<PropostaDBType[]>(
                `SELECT * FROM tbl_proposta 
                    WHERE tbl_proposta.id_prestacao_servico = $1 RETURNING *`,
                [idPrestacaoServico]
>>>>>>> dev
            )
            if (result.rows.length === 0) return null
            return Array.isArray(result.rows) ? result.rows as PropostaDBType[] : null
        } catch (err) {
            console.log(err)
            return null 
        }
<<<<<<< HEAD
    }
}
=======
    },

    async acceptProposal(id: string): Promise<PropostaDBType | null> {
        try {
            const result = await db.query<PropostaDBType[]>(
                `UPDATE tbl_proposta 
                SET estado = 'ACEITE' 
                WHERE id = $1 RETURNING *`,
                [id])
            return result.rows[0] as PropostaDBType
        } catch (err) {
            console.log(err)
            return null
        }

    }
}


>>>>>>> dev
