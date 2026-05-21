import db from "../lib/db.js";
import { generateUUID } from "../utils/uuid.js";
export const EmpresaModel = {
    async create(empresa) {
        try {
            const [rows] = await db.execute(`INSERT INTO tbl_empresa
                (id, designacao, descricao, localizacao, nif, icone, id_utilizador, enabled, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
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
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getAll() {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_empresa`);
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async get(id) {
        try {
            const [rows] = await db.execute(`SELECT * FROM tbl_empresa WHERE id = ?`, [id]);
            if (Array.isArray(rows) && rows.length === 0)
                return null;
            return Array.isArray(rows) ? rows[0] : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async update(id, empresa) {
        try {
            const [rows] = await db.execute(`UPDATE tbl_empresa
                SET designacao = ?, descricao = ?, localizacao = ?, nif = ?, icone = ?, id_utilizador = ?, enabled = ?, updated_at = ?
                WHERE id = ?`, [
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
            return rows;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async delete(id) {
        try {
            const rows = await db.execute(`DELETE FROM tbl_empresa WHERE id = ?`, [id]);
            return rows[0]?.affectedRows === 0 ? null : rows[0];
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
};
//# sourceMappingURL=empresa.model.js.map