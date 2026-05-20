import type { RowDataPacket } from "mysql2"
import db from "../lib/db.js"
import type { CategoriaDBType, PrestacaoServicoDBType, PrestacaoServicoDetalhadaType, PrestacaoServicoPorCategoriaType } from "../utils/types.js"
import { generateUUID } from "../utils/uuid.js"


export const PrestacaoServicoModel = {
    async create(prestacaoServico: PrestacaoServicoDBType): Promise<PrestacaoServicoDBType | null> {
        try {
            const [rows] = await db.execute<PrestacaoServicoDBType & RowDataPacket[]>(
                `INSERT INTO tbl_prestacao_servico 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

                [
                    null,
                    prestacaoServico.designacao,
                    prestacaoServico.subtotal,
                    prestacaoServico.horas_estimadas,
                    prestacaoServico.id_prestador,
                    prestacaoServico.id_servico,
                    prestacaoServico.preco_hora,
                    prestacaoServico.estado,
                    prestacaoServico.id_orcamento,
                    prestacaoServico.enabled,
                    new Date(),
                    new Date()
                ]
            )
            return rows as PrestacaoServicoDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async getAll(): Promise<PrestacaoServicoDBType[] | null> {
        const [rows] = await db.execute<PrestacaoServicoDBType[] & RowDataPacket[]>("SELECT * FROM tbl_prestacao_servico")

        return rows as PrestacaoServicoDBType[]
    },

    async get(id: string): Promise<PrestacaoServicoDBType | null> {
        try {
            const [rows] = await db.execute<PrestacaoServicoDBType & RowDataPacket[]>(
                `SELECT DISTINCT
                    ps.* 
                    pr
                    FROM tbl_prestacao_servico 
                WHERE tbl_prestacao_servico.id = ?`,

                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as PrestacaoServicoDBType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async update(id: string, prestacaoServico: PrestacaoServicoDBType) {
        try {
            const [rows] = await db.execute(
                `UPDATE tbl_prestacao_servico 
                SET designacao = ?, 
                subtotal = ?, 
                horas_estimadas = ?, 
                id_prestador = ?, 
                id_servico = ?, 
                preco_hora = ?, 
                estado = ?, 
                id_orcamento = ?, 
                enabled = ?, 
                updated_at = ?
                WHERE id = ?`,

                [
                    prestacaoServico.designacao,
                    prestacaoServico.subtotal,
                    prestacaoServico.horas_estimadas,
                    prestacaoServico.id_prestador,
                    prestacaoServico.id_servico,
                    prestacaoServico.preco_hora,
                    prestacaoServico.estado,
                    prestacaoServico.id_orcamento,
                    prestacaoServico.enabled,
                    new Date(),
                    id
                ]
            )

            return rows
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async delete(id: string): Promise<PrestacaoServicoDBType | null> {
        try {
            const rows: any = await db.execute<PrestacaoServicoDBType & RowDataPacket[]>(
                `DELETE FROM tbl_prestacao_servico 
                WHERE id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0] as PrestacaoServicoDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async getByOrcamentoId(id_orcamento: string): Promise<PrestacaoServicoDBType[] | null> {
        try {
            const [rows] = await db.execute<PrestacaoServicoDBType[] & RowDataPacket[]>(
                `SELECT * FROM tbl_prestacao_servico 
                 WHERE id_orcamento = ? AND enabled = true`,
                [
                    id_orcamento
                ]
            );
            return Array.isArray(rows) ? rows as PrestacaoServicoDBType[] : [];
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    async getAllPrestacaoServicoDetalhado(limit: number, offset: number): Promise<PrestacaoServicoDBType[] | null> {
        try {
            const query =
                `SELECT
                ps.id as id_prestacao_servico,
                ps.designacao as designacao,
                u.nome as nome_User,
                u.email as email_User,
                s.nome as nome_servico,
                ps.created_at as data_pedido,
                ps.urgencia as urgencia
                FROM tbl_prestacao_servico ps
                INNER JOIN tbl_servicos s ON ps.id_servico = s.id
                INNER JOIN tbl_Useres u ON ps.id_User = u.id
                ORDER BY ps.created_at DESC;
                LIMIT ? OFFSET ?`

            const [rows] = await db.execute<PrestacaoServicoDBType[] & RowDataPacket[]>(query, [
                limit.toString(),
                offset.toString(),
            ]);
            return rows as PrestacaoServicoDBType[];
        } catch (error) {
            console.error("Erro SQL em getPedidosPaginados:", error);
            return null;
        }
    },
    async PrestacaoServicoPorCategoria(idCategoria: string, limit: number, offset: number): Promise<PrestacaoServicoPorCategoriaType[] | null> {
        try {
            const query = `
            SELECT DISTINCT
                ps.id as id_prestacao_servico,
                ps.designacao as descricao,
                s.nome as nome_servico,
                c.designacao as c_nome,
                c.icone, as icone_categria
                ps.created_at as data_pedido,
            FROM tbl_prestacao_servico ps
            INNER JOIN tbl_servicos s ON ps.id_servico = s.id
            INNER JOIN tbl_categoria c ON c.id = s.id_categoria
            WHERE c.id = ?
            ORDER BY ps.created_at DESC
            LIMIT ? OFFSET ?`;

            const values = [idCategoria, limit, offset]

            const [rows] = await db.execute<PrestacaoServicoPorCategoriaType[] & RowDataPacket[]>(query, values);

            if (Array.isArray(rows) && rows.length === 0) return null

            return rows as PrestacaoServicoPorCategoriaType[];
        } catch (error) {
            console.error("Erro SQL em getPedidosPaginados:", error);
            return null;
        }
    }

}