import { EmpresaModel } from "../models/empresa.model.js";
import jwt from "jsonwebtoken";
export const EmpresaController = {
    async create(req, res) {
        const empresa = req.body;
        if (!empresa) {
            const response = {
                status: "error",
                message: "Dados de empresa inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const createEmpresaResponse = await EmpresaModel.create(empresa);
        if (!createEmpresaResponse) {
            const response = {
                status: "error",
                message: "Erro ao criar empresa",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Empresa criada com sucesso",
            data: createEmpresaResponse,
        };
        return res.status(201).json(response);
    },
    async getAll(req, res) {
        const getAllEmpresasResponse = await EmpresaModel.getAll();
        if (!getAllEmpresasResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar empresas",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Empresas buscadas com sucesso",
            data: getAllEmpresasResponse,
        };
        return res.status(200).json(response);
    },
    async get(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID da empresa não fornecido",
                data: null,
            };
            return res.status(400).json(response);
        }
        const getEmpresaResponse = await EmpresaModel.get(id);
        if (!getEmpresaResponse) {
            const response = {
                status: "error",
                message: "Empresa não encontrada",
                data: null,
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Empresa encontrada com sucesso",
            data: getEmpresaResponse,
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedEmpresa = req.body;
        if (!id) {
            const response = {
                status: "error",
                message: "ID da empresa é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        if (!updatedEmpresa) {
            const response = {
                status: "error",
                message: "Dados de empresa inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const updateEmpresaResponse = await EmpresaModel.update(id, updatedEmpresa);
        if (!updateEmpresaResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar empresa",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Empresa atualizada com sucesso",
            data: updateEmpresaResponse,
        };
        return res.status(200).json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID da empresa é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        const deleteEmpresaResponse = await EmpresaModel.delete(id);
        if (deleteEmpresaResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao deletar empresa",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Empresa apagada com sucesso",
            data: deleteEmpresaResponse,
        };
        return res.status(200).json(response);
    },
};
//# sourceMappingURL=empresa.controller.js.map