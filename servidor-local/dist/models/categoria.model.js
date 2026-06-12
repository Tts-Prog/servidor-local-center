import db from "../lib/db-pg.js";
import { generateUUID } from "../utils/uuid.js";
export const CategoriaModel = {
    async create(categoria) {
        try {
            const id = generateUUID();
            await db.query(`INSERT INTO tbl_categoria (id, designacao, icone, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5)`, [
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
            const result = await db.query(`SELECT * FROM tbl_categoria`);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async get(id) {
        try {
            const result = await db.query(`SELECT * FROM tbl_categoria WHERE id = $1`, [id]);
            if (Array.isArray(result.rows) && result.rows.length === 0)
                return null;
            return Array.isArray(result.rows) ? result.rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async update(id, categoria) {
        try {
            await db.query(`UPDATE tbl_categoria
                SET designacao = $1, icone = $2, updated_at = $3
                WHERE id = $4
                 RETURNING *`, [
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
            const result = await db.query(`DELETE FROM tbl_categoria WHERE id = $1`, [id]);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
};
//# sourceMappingURL=categoria.model.js.map