import type { RowDataPacket } from "mysql2";
import db from "../lib/db.js";
<<<<<<< HEAD
import type { ServiceDetaltype, Servicetype } from "../utils/types.js";


export const ServiceModel = {
    async create(newService: Servicetype): Promise<Servicetype | null> {
        try {
            const query = "INSERT INTO tbl_servicos (id, nome, descricao, categoria, enabled, created_at, updated_at) VALUE (?,?,?,?,?,?,?)"
            const value = [
                null,
                newService.nome,
                newService.descricao,
                newService.categoria,
                newService.enabled,
                new Date(),
                new Date()
            ]
            const [newservice] = await db.execute<Servicetype[] & RowDataPacket[]>(query, value)
            //select lest id
            const queryLastId =`SELECT * FROM tbl_servicos ORDER BY id DESC LIMIT 1`
            const [RowLastId] = await db.execute<Servicetype[] & RowDataPacket[]>(queryLastId)
            return RowLastId[0] as Servicetype

        } catch (err) {
            console.log(err)
            return null
        }
    },
    async getAll(): Promise<Servicetype[] | null> {
        try {
            const query = "SELECT * FROM tbl_servicos"
            const [rows] = await db.execute<Servicetype[] & RowDataPacket[]>(query)
            return Array.isArray(rows) && rows.length > 0 ? rows as Servicetype[] : null
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async get(id: string): Promise<Servicetype | null> {
        try {
            const query = "SELECT * FROM tbl_servicos WHERE tbl_servicos.id = ?"
            const value = [id]
            const [rows] = await db.execute<Servicetype[] & RowDataPacket[]>(query, value)
            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? rows[0] as Servicetype : null
        } catch (err) {
            console.log(err)
            return null
        }
    },
    async update (id: string, newService: Servicetype): Promise<Servicetype | null> {
        try {
        const query = "UPDATE tbl_servicos SET nome=?, descricao=?, categoria=?, enabled=?, updated_at=? WHERE id=?"
        const value = [
        newService.nome,
        newService.descricao,
        newService.categoria,
        newService.enabled,
        new Date(),
        id
    ]
        const [updatedUser] = await db.execute<Servicetype[] & RowDataPacket[]>(query, value)
    return updatedUser[0] as Servicetype
    } catch (err) {
        console.log(err)
        return null
    }
    },
    async delete (id: string): Promise<Servicetype | null> {
        try {
        const query = "DELETE FROM tbl_servicos WHERE id=?"
        const value = [id]
        const [rows] = await db.execute<Servicetype[] & RowDataPacket[]>(query, value)
        return rows[0] as Servicetype
    } catch (err) {
        console.log(err)
        return null
    }
    },
    async getALLServicesDetailed(limit: number, offset: number){
        try {
            const query = `
            SELECT DISTINCT
                s.id as id_servico
                s.nome as servico_nome
                s.descricao as servico_descricao
                c.disignacao as designacao_categoria
                c.icone as icone_categoria
                e.id as id_empresa
                e.disignacao as designacao_empresa
                e.icone as icone_empresa
                s.enabled
            FROM tbl_servico s
            INNER JOIN tbl_categoria c ON c.id = s.id_categoria
            INNER JOIN tbl_prestacao_servico ps ON  s.id = ps.id_servico
            INNER JOIN tbl_empresa e ON e.id = ps.id_prestador
            WHERE s.enabled = true
            LIMIT ? OFFSET ?
            `
            const value = [limit, offset]
            const [rows] = await db.execute<ServiceDetaltype[] & RowDataPacket[]>(query, value)
            return Array.isArray(rows) && rows.length > 0 ? rows as ServiceDetaltype[] : null
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
=======
import type { PrestacaoServicoDetalhadoType, ServicoDBType, ServicoDetalhadoType } from "../utils/types.js";

export const ServicoModel = {
    async create(newService: ServicoDBType){
         try {
            const query = `INSERT INTO table_servicos VALUES (?, ?, ?, ?, ?, ?, ?) `;
            const values = [
                null, 
                newService.nome, 
                newService.descricao, 
                newService.categoria, 
                newService.enabled, 
                new Date(), 
                new Date()];

                const rows = await db.execute(query, values);
                return rows;
    } catch (error) {
        console.log(error)
        return null;
        }
    },


    async  getAll(){
        try {
            const query = `SELECT * FROM table_servicos`;

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];

        }catch(err) {
            console.log(err);
            return null;
        }
    },

    

    async get(id: string){
        try{
        const query = `SELECT * FROM table_servicos WHERE id = ?`;

        const value = [id];

        const rows = await db.execute(query, value);

        return Array.isArray(rows) && rows.length > 0 ? rows[0]: null;
    } catch (err) {
        console.log(err);
        return null;
        }
    },




    async update(id: string, updatedService: ServicoDBType){
        try {
        const query = `UPDATE table_servicos
                        SET
                        nome=?,
                        descricao=?,
                        categoria=?,
                        enabled=?,
                        updated_at=?
                        WHERE 
                        id=?`

        const values = [
            updatedService.nome,
            updatedService.descricao,
            updatedService.categoria,
            updatedService.enabled,
            new Date(),
            id];

        const rows = await db.execute(query, values);
        return rows;
    }catch (err) {
        console.log(err);
        return null;
    }
    },


    async getAllServicoDetalhado(limit: number, offset: number):Promise<ServicoDetalhadoType[] | null>{
        try{
            const query = `
            SELECT DISTINCT
                s.id as id_servico,
                s.nome as servico_nome
                s.descricao as servico_descricao
                c.designacao as designacao_categoria
                c.icone as icone_categoria
                e.id as id_empresa
                e.designacao as designacao_empresa
                e.icone as icone_empresa
                s.enabled
            FROM table_servicos s
            INNER JOIN table_categoria c ON c.id = s.id_categoria
            INNER JOIN table_prestacao_servico ps ON s.id ps.id_servico
            INNER JOIN table_empresa e ON e.id = ps.id_empresa
            WHERE s.enabled = true
            LIMIT ? OFFSET ?`;

            const values = [limit, offset];

            const [rows] = await db.execute<ServicoDetalhadoType[] & RowDataPacket[]>(query, values);

            return Array.isArray(rows) && rows.length > 0 ? rows as ServicoDetalhadoType[] : null;

        }catch(err){
            console.log(err)
            return null;
        }
    },


    async delete(id: string){
        try {
        const query = `DELETE FROM table_servicos WHERE id= ?`

        const value = [id]

        const rows: any = await db.execute(query, value)

        return rows[0]?.affectedRows === 0 ? null : rows; 
    }catch (error) {
        console.log(error)
        return null
    }
    }

//end of function
}


>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
