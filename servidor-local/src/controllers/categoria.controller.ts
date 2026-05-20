import type { Request, Response } from "express"
import type { CategoriaDBType, ResponseType } from "../utils/types.js"
import { CategoriaModel } from "../models/categoria.model.js"


export const CategoriaController = {
    async create(req: Request, res: Response) {
        const categoria: CategoriaDBType = req.body

        if (!categoria) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Dados de categoria invalidos",
                data: null
            }
            return res.status(500).json(response)
        }

        const createcategoriaResponse: CategoriaDBType | null = await CategoriaModel.create(categoria)

        if (!createcategoriaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao criar categoria",
                data: null
            }
            return res.status(400).json(response)
        }

        const response: ResponseType<CategoriaDBType> = {
            status: "success",
            message: "categoria criado com sucesso",
            data: createcategoriaResponse
        }

        return res.status(201).json(response)
    },

    async getAll(req: Request, res: Response) {
        const getAllcategoriasResponse: CategoriaDBType[] | null = await CategoriaModel.getAll()

        if (!getAllcategoriasResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar categorias",
                data: null
            }
            return res.status(500).json(response)
        }

        const response: ResponseType<CategoriaDBType[]> = {
            status: "success",
            message: "categoria criado com sucesso",
            data: getAllcategoriasResponse
        }

        return res.status(200).json(response)
    },

    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<CategoriaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const getcategoriaByIdResponse: CategoriaDBType | null = await CategoriaModel.get(id as string)

        if (!getcategoriaByIdResponse) {
            const response: ResponseType<CategoriaDBType> = {
                status: "error",
                message: "categoria nao encontrado",
                data: null
        }
            return res.status(404).json(response)
        }

        const response: ResponseType<CategoriaDBType> = {
            status: "success",
            message: "categoria encontrado com sucesso",
            data: getcategoriaByIdResponse
        }

        return res.status(200).json(response)
    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedcategoria: CategoriaDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedcategoria) {
            return res.status(400).json({
                status: "error",
                message: "Dados de categoria invalidos",
                data: null
            })
        }

        const updatecategoriaResponse = await CategoriaModel.update(id as string, updatedcategoria)

        if (!updatecategoriaResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar categoria",
                data: null
            })
        }

        const response: ResponseType<CategoriaDBType> = {
            status: "success",
            message: "categoria encontrado com sucesso",
            data: updatecategoriaResponse
        }

        return res.status(200).json(response)
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<CategoriaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const deletecategoriaResponse: CategoriaDBType | null = await CategoriaModel.delete(id as string)

        if (!deletecategoriaResponse) {
            const response: ResponseType<CategoriaDBType> = {
                status: "error",
                message: "Erro ao apagar categoria",
                data: null
        }
            return res.status(404).json(response)
        }

        const response: ResponseType<CategoriaDBType> = {
            status: "success",
            message: "categoria encontrado com sucesso",
            data: deletecategoriaResponse
        }

        return res.status(200).json(response)

    }
    
}

    