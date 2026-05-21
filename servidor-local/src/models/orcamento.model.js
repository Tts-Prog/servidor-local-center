import db from "../lib/db.js";
import { generateUUID } from "../utils/uuid.js";
export const OrcamentoModel = {
    async create(orcamento) {
        try {
            const query = `INSERT INTO tbl_orcamento (id, total, id_utilizadores, enabled, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [
                generateUUID(),
                orcamento.total,
                orcamento.id_utilizadores,
                orcamento.enabled ?? true,
                new Date(),
                new Date()
            ];
            await db.execute(query, values);
            const [newOrcamento] = await db.execute(`SELECT * FROM tbl_orcamento ORDER BY id DESC LIMIT 1`);
            return Array.isArray(newOrcamento) && newOrcamento.length > 0 ? newOrcamento[0] : null;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async getAll() {
        try {
            const [rows] = await db.execute("SELECT * FROM tbl_orcamento");
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async get(id) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_orcamento WHERE id = ?`, [id]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async update(id, orcamento) {
        try {
            const query = `UPDATE tbl_orcamento SET total = ?, id_utilizadores = ?, enabled = ?, updated_at = ? WHERE id = ?`;
            const queryValues = [
                orcamento.total,
                orcamento.id_utilizadores,
                orcamento.enabled,
                new Date(),
                id
            ];
            const [rows] = await db.execute(query, queryValues);
            return rows;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async delete(id) {
        try {
            const rows = await db.execute(`DELETE FROM tbl_orcamento WHERE id = ?`, [id]);
            return rows[0]?.affectedRows === 0 ? null : rows[0];
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async updateBudget(id, total) {
        try {
            const rows = await db.execute(`UPDATE tbl_orcamento SET total = ?, updated_at = ? WHERE id = ?`, [total, new Date(), id]);
            return rows[0]?.affectedRows === 0 ? null : rows[0];
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
};
//# sourceMappingURL=orcamento.model.js.map