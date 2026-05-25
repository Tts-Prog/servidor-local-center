import type { ServicoTypeDB } from "../utils/types.js";
import db from "../lib/db.js";
<<<<<<< HEAD
import type { RowDataPacket } from "mysql2";

export const ServiceModel = {
    async create(newService: ServicoTypeDB) {
        try {
            const query =
                "INSERT INTO tbl_servicos(id, nome, descricao, categoria, enabled, created_at, updated_at)  VALUES(?, ?, ?, ?, ?, ?, ?)";

            const values = [
                null,
                newService.nome,
                newService.descricao,
                newService.categoria,
                newService.enabled,
                new Date(),
                new Date(),
            ];

            const [rows] = await db.execute(query, values);

            const queryLastId = `SELECT * FROM tbl_servicos ORDER BY id DESC LIMIT 1`
            const [lastService] = await db.execute<ServicoTypeDB[] & RowDataPacket[]>(queryLastId)

            return lastService[0] as ServicoTypeDB;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getAll() {
        try {
            const query = "SELECT * FROM tbl_servicos";

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string) {
        try {
            const query = 'SELECT * FROM tbl_servicos WHERE id = ?'

            const value = [id]

            const [rows] = await db.execute(query, value)

            if (Array.isArray(rows) && rows.length === 0) return null
            return Array.isArray(rows) ? (rows as any[])[0] : null
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async update(id: string, updatedService: ServicoTypeDB) {
        try {
            const query = `UPDATE tbl_servicos
                    SET
                        nome=?,
                        descricao=?,
                        categoria=?,
                        enabled=?,
                        updated_at=?
                    WHERE
                        id=?
                    ;`

            const values = [
                updatedService.nome,
                updatedService.descricao,
                updatedService.categoria,
                updatedService.enabled,
                new Date(),
                id
            ]

            const rows = await db.execute(query, values)

            return rows
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async delete(id: string) {
        try {
            const query = 'DELETE FROM tbl_servicos WHERE id = ?'

            const value = [id]

            const [rows]: any = await db.execute(query, value)

            return rows[0]?.affectedRows === 0 ? null : rows
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async getAllServicoDetalhado(limit: number, offset: number): Promise<ServicoTypeDB[] | null> {
        try {
            const query = 
            `SELECT DISTINCT
                s.id as id_servico
                s.nome as servico_nome
                s.descricao as servico_descricao
                c.designacao as designacao_categoria
                c.icone as icone_categoria
                e.id as id_empresa
                e.designacao as designacao_empresa
                e.icone as icone_empresa
                s.enabled
            FROM tbl_servicos s
            INNER JOIN tbl_categoria c ON c.id = s.id_categoria
            INNER JOIN tbl_prestacao_servico ps ON s.id = ps.id_servico
            INNER JOIN tbl_empresa e ON e.id = ps.id_empresa
            LIMIT ? OFFSET ?
            `


            return null
        } catch (error) {
            return null
        }
=======
import type { ServiceDBType, ServicoDetalhadoType } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";

export const ServiceModel = {
  async create(newService: ServiceDBType): Promise<ServiceDBType | null> {
    try {
      const query = `INSERT INTO tbl_servicos (id, nome, descricao, categoria, enabled_at, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      const values = [
        generateUUID(),
        newService.nome,
        newService.descricao,
        newService.categoria,
        newService.enabled_at ?? true,
        new Date(),
        new Date(),
      ];
      const result = await db.query<ServiceDBType>(query, values);
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getAll(): Promise<ServiceDBType[] | null> {
    try {
      const query = `SELECT * FROM tbl_servicos`;
      const [rows] = await db.execute<ServiceDBType[] & RowDataPacket[]>(query);
      return rows as ServiceDBType[];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async get(id: string): Promise<ServiceDBType | null> {
    try {
      const query = `SELECT * FROM tbl_servicos WHERE id = $1`;
      const values = [id];
      const result = await db.query<ServiceDBType>(query, values);
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return null;
>>>>>>> dev
    }
  },

<<<<<<< HEAD

=======
  async update(
    id: string,
    servicoAtualizado: ServiceDBType,
  ): Promise<ServiceDBType | null> {
    try {
      const query = `UPDATE tbl_servicos
        SET nome=$1, descricao=$2, categoria=$3, enabled_at=$4, updated_at=$5
        WHERE id=$6
        RETURNING *`;
      const values = [
        servicoAtualizado.nome,
        servicoAtualizado.descricao,
        servicoAtualizado.categoria,
        servicoAtualizado.enabled_at,
        new Date(),
        id,
      ];
      const result = await db.query<ServiceDBType>(query, values);
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async delete(id: string): Promise<ServiceDBType | null> {
    try {
      const query = `DELETE FROM tbl_servicos WHERE id = $1 RETURNING *`;
      const values = [id];
      const result = await db.query<ServiceDBType>(query, values);
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getAllServicoDetalhado(
    limit: number,
    offset: number,
  ): Promise<ServicoDetalhadoType[] | null> {
    try {
      const query = `
        SELECT DISTINCT
            s.id as id_servico,
            s.nome as servico_nome,
            s.descricao as servico_descricao,
            c.designacao as designacao_categoria,
            c.icone as icone_categoria,
            e.id as id_empresa,
            e.designacao as designacao_empresa,
            e.icone as icone_empresa,
            s.enabled_at as enabled
        FROM tbl_servicos s
        INNER JOIN tbl_categoria c ON c.id = s.categoria
        INNER JOIN tbl_prestacao_servico ps ON s.id = ps.id_servico
        INNER JOIN tbl_empresa e ON e.id = ps.id_empresa
        WHERE s.enabled_at = true
        LIMIT $1 OFFSET $2
        `;
      const values = [limit, offset];
      const result = await db.query<ServicoDetalhadoType>(query, values);
      return result.rows.length > 0 ? result.rows : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
>>>>>>> dev
};
