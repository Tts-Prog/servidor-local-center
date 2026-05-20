import db from "../lib/db.js"
import type { PropostaDBType } from "./types.js"


    async function get(id: string) {
        try {
            const [rows] = await db.execute(
                `SELECT * FROM tbl_proposta 
                WHERE tbl_proposta.id = ?`,

                [id]
            )

            

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] : null
        } catch (err) {
            console.log(err)
            return null
        }
    }