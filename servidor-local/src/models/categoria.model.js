import db from "../lib/db.js";
import { generateUUID } from "../utils/uuid.js";
export const CategoriaModel = {
    async create(categoria) {
        try {
            const id = generateUUID();
            await db.execute(`INSERT INTO tbl_categoria (id, designacao, icone, created_at, updated_at)
                 VALUES (?, ?, ?, ?, ?)`, [
                id,
                categoria.designacao,
                categoria.icone,
                new Date(),
                new Date(),
            ]);
            return {
                id,
                designacao: categoria.designacao,
                icone: categoria.icone,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getAll() {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_categoria`);
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async get(id) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_categoria WHERE id = ?`, [id]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async update(id, categoria) {
        try {
            await db.execute(`UPDATE tbl_categoria
                 SET designacao = ?, icone = ?, updated_at = ?
                 WHERE id = ?`, [
                categoria.designacao,
                categoria.icone,
                new Date(),
                id,
            ]);
            return {
                id,
                designacao: categoria.designacao,
                icone: categoria.icone,
                created_at: categoria.created_at,
                updated_at: new Date().toISOString(),
            };
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async delete(id) {
        try {
            const [result] = await db.execute(`DELETE FROM tbl_categoria WHERE id = ?`, [id]);
            return result.affectedRows === 0 ? null : { id };
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
};
//# sourceMappingURL=categoria.model.js.map