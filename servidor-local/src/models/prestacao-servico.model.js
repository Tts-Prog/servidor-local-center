import db from "../lib/db.js";
import {} from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";
export const PrestacaoServicoModel = {
    async create(prestacaoServico) {
        try {
            console.log({ prestacaoServico });
            const [rows] = await db.execute(`INSERT INTO tbl_prestacao_servico 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                null,
                prestacaoServico.designacao,
                prestacaoServico.subtotal,
                prestacaoServico.horas_estimadas,
                prestacaoServico.id_prestador,
                prestacaoServico.id_servico,
                prestacaoServico.preco_hora,
                prestacaoServico.estado,
                prestacaoServico.id_orcamento,
                prestacaoServico.urgente,
                prestacaoServico.enabled,
                new Date(),
                new Date(),
                prestacaoServico.id_empresa,
                prestacaoServico.tipo_prestador,
            ]);
            console.log({ rows });
            return rows;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async getAll() {
        const [rows] = await db.execute("SELECT * FROM tbl_prestacao_servico");
        return rows;
    },
    async get(id) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_prestacao_servico 
                WHERE tbl_prestacao_servico.id = ?`, [id]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async update(id, prestacaoServico) {
        try {
            const [rows] = await db.execute(`UPDATE tbl_prestacao_servico 
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
                WHERE id = ?`, [
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
            ]);
            console.log({ rows });
            return rows;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async delete(id) {
        try {
            const rows = await db.execute(`DELETE FROM tbl_prestacao_servico 
                WHERE id = ?`, [id]);
            return rows[0].affectedRows === 0 ? null : rows[0];
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    // trabalho final..................................................
    async getByIdOrcamento(idOrcamento) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_prestacao_servico 
            WHERE tbl_prestacao_servico.id_orcamento = ?`, [idOrcamento]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getAllPrestacaoServicoDetalhado(limit, offset) {
        try {
            const query = `
            SELECT 
            ps.id  as id.prestacao_servico, 
            ps.designacao as descricao,
            u.nome as nome_utilizador,
            u.email as email_utilizador,
            s.nome as nome_servico,
            ps.created_at as data_pedido,
            ps.urgente 
            FROM tbl_prestacao_servico ps
            INNER JOIN tbl_utilizadores u ON ps.id_utilizador = u.id
            INNER JOIN tbl_servicos s ON ps.id_servico = s.id
            ORDER BY ps.created_at DESC
            LIMIT ? OFFSET ?;
            `;
            const [rows] = await db.execute(query, [
                limit.toString(),
                offset.toString()
            ]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getAllPrestacaoServicoByCategoriaDetalhado(idCategoria, limit, offset) {
        try {
            const query = `
            SELECT 
            ps.id  as id.prestacao_servico, 
            ps.designacao as descricao,
            u.nome as nome_servico,
            c.designacao as nome_categoria,
            c.icone as icone_categoria,
            ps.created_at as data_pedido,
            ps.urgente 
            FROM tbl_prestacao_servico ps
            INNER JOIN tbl_categoria c ON c.id = s.id_categoria AND c.id = ?
            INNER JOIN tbl_servicos s ON ps.id_servico = s.id
            ORDER BY ps.created_at DESC
            LIMIT ? OFFSET ?;
            `;
            const [rows] = await db.execute(query, [
                idCategoria,
                limit.toString(),
                offset.toString()
            ]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
};
//# sourceMappingURL=prestacao-servico.model.js.map