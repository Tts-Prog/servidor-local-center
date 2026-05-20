import type { Request, Response } from "express"
import type { EmpresaDBType, ResponseType } from "../utils/types.js"
import { EmpresaModel } from "../models/empresa.model.js"


export const EmpresaController = {
    async create(req: Request, res: Response) {
        const empresa: EmpresaDBType = req.body

        if (!empresa) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Dados de empresa invalidos",
                data: null
            }
            return res.status(500).json(response)
        }

        const createempresaResponse: EmpresaDBType | null = await EmpresaModel.create(empresa)

        if (!createempresaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao criar empresa",
                data: null
            }
            return res.status(400).json(response)
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
            message: "empresa criado com sucesso",
            data: createempresaResponse
        }

        return res.status(201).json(response)
    },

    async getAll(req: Request, res: Response) {
        const getAllempresasResponse: EmpresaDBType[] | null = await EmpresaModel.getAll()

        if (!getAllempresasResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar empresas",
                data: null
            }
            return res.status(500).json(response)
        }

        const response: ResponseType<EmpresaDBType[]> = {
            status: "success",
            message: "empresa criado com sucesso",
            data: getAllempresasResponse
        }

        return res.status(200).json(response)
    },

    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const getempresaByIdResponse: EmpresaDBType | null = await EmpresaModel.get(id as string)

        if (!getempresaByIdResponse) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "empresa nao encontrado",
                data: null
        }
            return res.status(404).json(response)
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
            message: "empresa encontrado com sucesso",
            data: getempresaByIdResponse
        }

        return res.status(200).json(response)
    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedempresa: EmpresaDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedempresa) {
            return res.status(400).json({
                status: "error",
                message: "Dados de empresa invalidos",
                data: null
            })
        }

        const updateempresaResponse = await EmpresaModel.update(id as string, updatedempresa)

        if (!updateempresaResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar empresa",
                data: null
            })
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
            message: "empresa encontrado com sucesso",
            data: updateempresaResponse
        }

        return res.status(200).json(response)
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const deleteempresaResponse: EmpresaDBType | null = await EmpresaModel.delete(id as string)

        if (!deleteempresaResponse) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "Erro ao apagar empresa",
                data: null
        }
            return res.status(404).json(response)
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
            message: "empresa encontrado com sucesso",
            data: deleteempresaResponse
        }

        return res.status(200).json(response)

    }
    
}

    