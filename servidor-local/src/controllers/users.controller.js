import {} from "express";
import { UsersModel } from "../models/users.model.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import jwt from "jsonwebtoken";
export const UsersController = {
    //  Criar utilizador
    async createUsers(req, res) {
        const user = req.body;
        if (!user) {
            const response = {
                status: "error",
                message: "Campos obrigatórios em falta",
                data: null,
            };
            return res.status(400).json(response);
        }
        const createUserResponse = await UsersModel.create(user);
        const response = {
            status: "success",
            message: "Utilizador criado com sucesso!",
            data: createUserResponse,
        };
        return res.status(200).json(response);
    },
    //  Buscar todos utilizadores
    async getAll(req, res) {
        const getAllUsersResponse = await UsersModel.getAll();
        if (getAllUsersResponse) {
            const response = {
                status: "success",
                message: "Utilizadores encontrados com sucesso!",
                data: getAllUsersResponse,
            };
            return res.status(200).json(response);
        }
        const response = {
            status: "error",
            message: "Erro ao buscar utilizadores",
            data: null,
        };
        return res.status(500).json(response);
    },
    //  Buscar utilizador por ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                const response = {
                    status: "error",
                    message: "ID do utilizador é obrigatório",
                    data: null,
                };
                return res.status(400).json(response);
            }
            const getUserByIdResponse = await UsersModel.get(id);
            if (!getUserByIdResponse) {
                const response = {
                    status: "error",
                    message: "Utilizador não encontrado",
                    data: null,
                };
                return res.status(404).json(response);
            }
            const response = {
                status: "success",
                message: "Utilizador encontrado com sucesso!",
                data: getUserByIdResponse,
            };
            return res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            const response = {
                status: "error",
                message: "Erro interno",
                data: null,
            };
            return res.status(500).json(response);
        }
    },
    //  LOGIN
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            const response = {
                status: "error",
                message: "Credenciais inválidas",
                data: null,
            };
            return res.status(400).json(response);
        }
        const userData = await UsersModel.getByEmail(email);
        if (!userData) {
            const response = {
                status: "error",
                message: "Não existe nenhuma conta com esse email",
                data: null,
            };
            return res.status(404).json(response);
        }
        const isPasswordValid = await comparePassword(password, userData.password);
        if (!isPasswordValid) {
            const response = {
                status: "error",
                message: "Credenciais inválidas",
                data: null,
            };
            return res.status(401).json(response);
        }
        const payload = {
            id: userData.id,
            email: userData.email,
            nome: userData.nome,
            role: userData.role,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
        const response = {
            status: "success",
            message: "Login bem-sucedido",
            data: {
                token,
                user: payload,
            },
        };
        return res.status(200).json(response);
    },
    async updatePassword(req, res) {
        const { id } = req.params;
        const { password, newPassword } = req.body;
        if (!password || !newPassword) {
            const response = {
                status: "error",
                message: "Dados obrigatórios em falta",
                data: null,
            };
            return res.status(400).json(response);
        }
        const userData = await UsersModel.get(id);
        if (!userData) {
            const response = {
                status: "error",
                message: "Utilizador não encontrado",
                data: null
            };
            return res.status(404).json(response);
        }
        const isPwdValid = await comparePassword(password, userData.password);
        if (!isPwdValid) {
            const response = {
                status: "error",
                message: "Password antiga inválida",
                data: null
            };
            return res.status(401).json(response);
        }
        const updatePasswordResponse = await UsersModel.updatePassword(userData.id, newPassword);
        if (updatePasswordResponse) {
            const response = {
                status: "success",
                message: "Password atualizada com sucesso",
                data: updatePasswordResponse
            };
            return res.status(200).json(response);
        }
        const response = {
            status: "error",
            message: "Erro interno",
            data: null
        };
        return res.status(500).json(response);
    },
    //  RESET PASSWORD (VERSÃO SIMPLES)
    async resetPassword(req, res) {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            const response = {
                status: "error",
                message: "Dados obrigatórios em falta",
                data: null
            };
            return res.status(400).json(response);
        }
        const user = await UsersModel.getByEmail(email);
        if (!user) {
            const response = {
                status: "error",
                message: "Utilizador não encontrado",
                data: null
            };
            return res.status(404).json(response);
        }
        await UsersModel.updatePassword(user.id, newPassword);
        const response = {
            status: "success",
            message: "Password redefinida com sucesso",
            data: null
        };
        return res.status(200).json(response);
    },
    //  Atualizar utilizador
    async update(req, res) {
        const { id } = req.params;
        const updatedUser = req.body;
        if (!id) {
            const response = {
                status: "error",
                message: "ID é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        if (!updatedUser) {
            const response = {
                status: "error",
                message: "Dados inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const updateUserResponse = await UsersModel.update(id, updatedUser);
        if (!updateUserResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar utilizador",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizador atualizado com sucesso",
            data: updateUserResponse
        };
        return res.status(200).json(response);
    },
    //  Apagar utilizador
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        const deleteUserResponse = await UsersModel.delete(id);
        if (!deleteUserResponse) {
            const response = {
                status: "error",
                message: "Erro ao apagar utilizador",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizador apagado com sucesso",
            data: deleteUserResponse
        };
        return res.status(200).json(response);
    },
};
//# sourceMappingURL=users.controller.js.map