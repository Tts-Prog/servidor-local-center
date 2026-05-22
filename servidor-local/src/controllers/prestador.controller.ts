import type { Request, Response } from "express";
import type { PrestacaoServicoPorCategoriaType, PrestadorTypeDB, ResponseType } from "../utils/types.js";
import { FreelancerModel } from "../models/prestador.model.js";
import { PrestacaoServicoModel } from "../models/prestacao-servico.models.js";

export const FreelancerController = {

    // criar um novo Freelancer
    async create(req: Request, res: Response) {
        const newFreelancer: PrestadorTypeDB = req.body

        if (!newFreelancer) {
            return res.status(400).json({
                status: "error",
                message: "Dados de Freelancer invalido",
                data: null
            })
        } else
            console.log(newFreelancer)

        const createServiceResponse = await FreelancerModel.create(newFreelancer)

        if (createServiceResponse === null) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao criar Freelancer",
                data: null
            })
        }

        return res.status(200).json({
            status: "sucesso",
            message: "Freelancer adicionado",
            data: createServiceResponse
        })
    },

    // listar todos os Freelancers
    async getAll(req: Request, res: Response) {
        const getAllServicesResponse = await FreelancerModel.getAll()

        if (!getAllServicesResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao encontrar Freelancers",
                data: null
            })
        }
        return res.status(200).json({
            status: "sucesso",
            mensagem: "Freelancers encontrado",
            data: getAllServicesResponse
        })
    },

    // selecionar Freelancer por id
    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const getUserResponse = await FreelancerModel.get(id as string)

        if (!getUserResponse) {
            return res.status(404).json({
                status: "error",
                message: "Freelancer nao encontrado",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Freelancer encontrado com sucesso",
            data: getUserResponse
        })

    },

    // atualizar dados de Freelancers
    async update(req: Request, res: Response) {
        const { id } = req.params

        const UpdateUser: PrestadorTypeDB = req.body

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
                message: "Dados de Freelancer invalidos",
                data: null
            })
        }

        const UpdateUserResponse = await FreelancerModel.update(id as string, UpdateUser)

        if (!UpdateUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar Freelancer",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Freelancer atualizado com sucesso",
            data: UpdateUserResponse
        })
    },

    // apagar Freelancer de base de dados
    async delete(req: Request, res: Response) {
        const { id } = req.params


        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const deleteServiceResponse = await FreelancerModel.delete(id as string)

        if (!deleteServiceResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar Freelancer",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Freelancer apagado com sucesso",
            data: deleteServiceResponse
        })
    }
}



