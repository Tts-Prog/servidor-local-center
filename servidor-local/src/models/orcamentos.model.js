import db from "../lib/db.js";
export const budgetModel = {
    async create(newBudget) {
        try {
            const query = "INSERT INTO tbl_orcamento (id, total, id_utilizadores, enabled, created_at, updated_at) VALUES (?,?, ?, ?, ?, ?)";
            const value = [
                null,
                newBudget.total,
                newBudget.id_utilizadores,
                newBudget.enabled,
                new Date(),
                new Date()
            ];
            const [result] = await db.execute(query, value);
            return result;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async getAll() {
        try {
            const query = "SELECT * FROM tbl_orcamento";
            const rows = await db.execute(query);
            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async get(id) {
        try {
            const query = `
            SELECT DISTINCT 
                o.*,
                u.id as owner
            FROM tbl_orcamento o
            INNER JOIN tbl_utilizadores u ON o.id_utilizador = u.id
            WHERE o.id = ?
            `;
            const value = [id];
            const [rows] = await db.execute(query, value);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async update(id, newBudget) {
        try {
            const query = "UPDATE tbl_orcamento SET total=?, id_utilizadores=?, enabled=?, updated_at=? WHERE id=?";
            const value = [
                newBudget.total,
                newBudget.id_utilizadores,
                newBudget.enabled,
                new Date(),
                id
            ];
            const [result] = await db.execute(query, value);
            return result;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async updateBudget(id, total) {
        try {
            const query = "UPDATE tbl_orcamento SET total=?, updated_at=? WHERE id=?";
            const value = [
                total,
                new Date(),
                id
            ];
            const rows = await db.execute(query, value);
            return rows[0].affectedRows === 0 ? null : rows[0];
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },
    async delete(id) {
        try {
            const query = "DELETE FROM tbl_orcamento WHERE id=?";
            const value = [id];
            const [rows] = await db.execute(query, value);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows : null;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
};
//# sourceMappingURL=orcamentos.model.js.map