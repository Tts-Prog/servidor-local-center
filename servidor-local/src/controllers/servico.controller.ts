import type { Request, Response } from "express";
import type { ResponseType, ServicoTypeDB } from "../utils/types.js";
import { ServiceModel } from "../models/servico.model.js";


export const serviceController = {

    // criar um novo servico
    async create(req: Request, res: Response) {
        const newService: ServicoTypeDB = req.body

        if (!newService) {
            return res.status(400).json({
                status: "error",
                message: "Dados de servico invalido",
                data: null
            })
        } else
            console.log(newService)

        const createServiceResponse = await ServiceModel.create(newService)

        if (createServiceResponse === null) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao criar servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "success",
            message: "servico adicionado",
            data: createServiceResponse
        })
    },

    // listar todos os servicos
    async getAll(req: Request, res: Response) {
        const getAllServicesResponse = await ServiceModel.getAll()

        if (!getAllServicesResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao encontrar servicos",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            mensagem: "servicos encontrado",
            data: getAllServicesResponse
        })
    },

    // selecionar servico por id
    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const getUserResponse = await ServiceModel.get(id as string)

        if (!getUserResponse) {
            return res.status(404).json({
                status: "error",
                message: "Servico nao encontrado",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico encontrado com success",
            data: getUserResponse
        })

    },

    // atualizar dados de servicos
    async update(req: Request, res: Response) {
        const { id } = req.params

        const UpdateUser: ServicoTypeDB = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        if (!UpdateUser) {
            return res.status(400).json({
                status: "error",
                message: "Dados de servico invalidos",
                data: null
            })
        }

        const UpdateUserResponse = await ServiceModel.update(id as string, UpdateUser)

        if (!UpdateUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico atualizado com success",
            data: UpdateUserResponse
        })
    },

    // apagar servico de base de dados
    async delete(req: Request, res: Response) {
        const { id } = req.params


        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const deleteServiceResponse = await ServiceModel.delete(id as string)

        if (!deleteServiceResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico apagado com success",
            data: deleteServiceResponse
        })
    },

    async getAllServicoDetalhado(req: Request, res: Response){
        const {limit, offset} = req.query

        let LIMIT = 10
        let OFFSET = 0

        if (limit) {
            LIMIT = parseInt(limit as string)
        }

        if (offset) {
            OFFSET = parseInt(offset as string)
        }

        const getAllServicoDetalhadoResponse = await ServiceModel.getAllServicoDetalhado(LIMIT , OFFSET)

        if (!getAllServicoDetalhadoResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar servicos",
                data: null
            }
            return res.status(404).json(response)
        }
    }
}



