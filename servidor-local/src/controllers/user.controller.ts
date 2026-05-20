import type { Request, Response } from "express";
import { UserModel } from "../models/user.model.js"
import type { userTypeDB } from "../utils/types.js"
import { comparePassword } from "../utils/password.js";
import jwt from "jsonwebtoken";

export const UserController = {

    // criar um novo User
    async create(req: Request, res: Response) {
        const newUser: userTypeDB = req.body

        if (!newUser) {
            return res.status(400).json({
                status: "error",
                message: "Dados de User invalido",
                data: null
            })
        } else
            console.log(newUser)

        const createNewService = await UserModel.create(newUser)

        if (createNewService === null) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao criar User",
                data: null
            })
        }

        return res.status(200).json({
            status: "sucesso",
            message: "User adicionado",
            data: createNewService
        })
    },

    // listar todos os Users
    async getAll(req: Request, res: Response) {
        const getAllUsersResponse = await UserModel.getAll()

        if (!getAllUsersResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao encontrar Useres",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Useres encontrado",
            data: getAllUsersResponse
        })
    },

    // selecionar User por id
    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const getUserResponse = await UserModel.get(id as string)

        if (!getUserResponse) {
            return res.status(404).json({
                status: "error",
                message: "User não encontrado",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "User encontrado com sucesso",
            data: getUserResponse
        })

    },

    // atualizar dados de Users
    async update(req: Request, res: Response) {
        const { id } = req.params

        const UpdateUser: userTypeDB = req.body

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
                message: "Dados de User invalidos",
                data: null
            })
        }

        const UpdateUserResponse = await UserModel.update(id as string, UpdateUser)

        if (!UpdateUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar User",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "User atualizado com sucesso",
            data: UpdateUserResponse
        })
    },

    // login
    async login(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email || !password) {

            return res.status(400).json({
                status: "error",
                message: "Credenciais invalidos",
                data: null
            })
        }

        const userData = await UserModel.getByEmail(email as string)

        if (!userData) {

            return res.status(404).json({
                status: "error",
                mensagem: "Não existe nenhuma conta com esse email",
                data: null
            })
        }

        const IsPasswordValid = await comparePassword(password, userData.password)

        if (!IsPasswordValid) {

            return res.status(401).json({
                status: "error",
                message: "Credenciais invalidos"
            })
        }

        const payload = {
            id: userData.id,
            email: userData.email,
            nome: userData.nome,
            role: userData.role
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" })

        return res.status(200).json({
            status: "success",
            message: "Login realizado com sucesso",
            data: {
                token,
                user: payload
            }
        })
    },


    // apagar User de base de dados
    async delete(req: Request, res: Response) {
        const { id } = req.params


        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const deleteUserResponse = await UserModel.delete(id as string)

        if (!deleteUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar User",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "User apagado com sucesso",
            data: deleteUserResponse
        })
    }
}
