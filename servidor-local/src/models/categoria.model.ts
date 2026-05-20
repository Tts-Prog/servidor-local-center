import type { RowDataPacket } from "mysql2"
import db from "../lib/db.js"
import type { CategoriaDBType } from "../utils/types.js"
import { generateUUID } from "../utils/uuid.js"


export const CategoriaModel = {
    async create(categoria: CategoriaDBType): Promise<CategoriaDBType | null> {
        try {
            const [rows] = await db.execute<CategoriaDBType & RowDataPacket[]>(
                `INSERT INTO tbl_categoria 
                VALUES (?, ?, ?, ?, ?)`,

                [
                    null,
                    categoria.designacao,
                    categoria.icone,
                    new Date(),
                    new Date()
                ]
            )
            return rows as CategoriaDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async getAll(): Promise<CategoriaDBType[] | null>  {
        const [rows] = await db.execute<CategoriaDBType[] & RowDataPacket[]> ("SELECT * FROM tbl_categoria")

        return rows as CategoriaDBType[]
    },

    async get(id: string): Promise<CategoriaDBType | null> {
        try {
            const [rows] = await db.execute<CategoriaDBType & RowDataPacket[]>(
                `SELECT * FROM tbl_categoria 
                WHERE id = ?`,

                [id]
            )

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as CategoriaDBType : null
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async update(id: string, categoria: CategoriaDBType): Promise<CategoriaDBType | null> {
        try {
            const [rows] = await db.execute<CategoriaDBType & RowDataPacket[]>(
                `UPDATE tbl_categoria 
                SET designacao = ?, 
                icone = ?, 
                updated_at = ?
                WHERE id = ?`,

                [
                    categoria.designacao,
                    categoria.icone,
                    new Date(),
                    id
                ]
            )
            return rows as CategoriaDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

    async delete(id: string): Promise<CategoriaDBType | null> {
        try {
            const rows: any = await db.execute<CategoriaDBType & RowDataPacket[]>(
                `DELETE FROM tbl_categoria 
                WHERE id = ?`,

                [id]
            )

            return rows[0].affectedRows === 0 ? null : rows[0] as CategoriaDBType
        } catch (err) {
            console.log(err)
            return null
        }
    },

}

