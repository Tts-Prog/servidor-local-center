import { usersModel } from "../models/users.models.js";
import db from "../lib/db.js";
import { comparePassword } from "../utils/password.js";
import jwt from "jsonwebtoken";
export const userController = {
    async create(req, res) {
        const user = req.body;
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "Dados de utilizador invalidos",
                data: null,
            });
        }
        const createUserResponse = await usersModel.create(user);
        if (!createUserResponse) {
            const response = {
                status: "error",
                message: "Erro ao criar utilizador",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizador criado com sucesso",
            data: createUserResponse,
        };
        return res.status(200).json(response);
    },
    async getAll(_req, res) {
        const getUsersResponse = await usersModel.getAll();
        if (!getUsersResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar utilizadores",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizadores buscados com sucesso",
            data: getUsersResponse,
        };
        return res.status(200).json(response);
    },
    async getById(req, res) {
        const { id } = req.params;
        if (!id || Array.isArray(id)) {
            const response = {
                status: "error",
                message: "ID do utilizador e obrigatorio",
                data: null,
            };
            return res.status(400).json(response);
        }
        const getUserResponse = await usersModel.get(id);
        if (!getUserResponse) {
            const response = {
                status: "error",
                message: "Utilizador nao encontrado",
                data: null,
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizador encontrado com sucesso",
            data: getUserResponse,
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedUser = req.body;
        if (!id || Array.isArray(id)) {
            const response = {
                status: "error",
                message: "ID e obrigatorio",
                data: null,
            };
            return res.status(400).json(response);
        }
        if (!updatedUser) {
            const response = {
                status: "error",
                message: "Dados de utilizador invalidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const updateUserResponse = await usersModel.update(id, updatedUser);
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
            data: updateUserResponse,
        };
        return res.status(200).json(response);
    },
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            const response = {
                status: "error",
                message: "Credenciais invalidas",
                data: null,
            };
            return res.status(400).json(response);
        }
        const userData = await usersModel.getByEmail(email);
        if (!userData) {
            const response = {
                status: "error",
                message: "nao existe utilizador com esse email",
                data: null,
            };
            return res.status(404).json(response);
        }
        const isPasswordValid = await comparePassword(password, userData.password);
        if (!isPasswordValid) {
            const response = {
                status: "error",
                message: "Credenciais invalidas",
                data: null,
            };
            return res.status(401).json(response);
        }
        const payload = {
            id: userData.id,
            email: userData.email,
            nome: userData.nome,
            role: userData.role
        };
        /*TODO: Adicionar role ao utilizador na bd (alter table)e no user type
        alter table  users
        add column role ENUM('client','prestador')
        
        */
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        const response = {
            status: "success",
            message: "Login bem sucedido",
            data: {
                token,
                user: userData
            },
        };
        return res.status(200).json({
            status: "success",
            message: "Login bem sucedido",
            data: {
                token,
                user: payload
            },
        });
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id || Array.isArray(id)) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Utilizador apagado com sucesso",
            data: null,
        };
        return res.status(200).json(response);
    },
};
//# sourceMappingURL=user.controller.js.map