import db from "../lib/db-pg.js";
import { generateUUID } from "../utils/uuid.js";
export const EmpresaModel = {
    async create(empresa) {
        try {
            const result = await db.query(`INSERT INTO tbl_empresa
                (id, designacao, descricao, localizacao, nif, icone, id_utilizador, enabled, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, [
                generateUUID(),
                empresa.designacao,
                empresa.descricao,
                empresa.localizacao,
                empresa.nif,
                empresa.icone,
                empresa.id_utilizador,
                empresa.enabled ?? true,
                new Date(),
                new Date(),
            ]);
            return result.rows[0] || null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async getAll() {
        try {
            const result = await db.query(`SELECT * FROM tbl_empresa`);
            return result.rows;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    },
    async get(id) {
        try {
            const result = await db.query(`SELECT * FROM tbl_empresa WHERE id = $1`, [id]);
            return result.rows[0] || null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async update(id, empresa) {
        try {
            const result = await db.query(`UPDATE tbl_empresa
                SET designacao = $1, descricao = $2, localizacao = $3, nif = $4, icone = $5, id_utilizador = $6, enabled = $7, updated_at = $8
                WHERE id = $9 RETURNING *`, [
                empresa.designacao,
                empresa.descricao,
                empresa.localizacao,
                empresa.nif,
                empresa.icone,
                empresa.id_utilizador,
                empresa.enabled,
                new Date(),
                id,
            ]);
            return result.rows[0] || null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async delete(id) {
        try {
            const result = await db.query(`DELETE FROM tbl_empresa WHERE id = $1 RETURNING *`, [id]);
            return result.rows[0] || null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
};
//# sourceMappingURL=empresa.model.js.map