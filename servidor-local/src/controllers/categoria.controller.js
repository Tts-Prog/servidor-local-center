import { CategoriaModel } from "../models/categoria.model.js";
import jwt from "jsonwebtoken";
export const CategoriaController = {
    async create(req, res) {
        const categoria = req.body;
        if (!categoria) {
            const response = {
                status: "error",
                message: "Dados de categoria inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const createCategoriaResponse = await CategoriaModel.create(categoria);
        if (!createCategoriaResponse) {
            const response = {
                status: "error",
                message: "Erro ao criar categoria",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Categoria criada com sucesso",
            data: createCategoriaResponse,
        };
        return res.status(201).json(response);
    },
    async getAll(req, res) {
        const getAllCategoriasResponse = await CategoriaModel.getAll();
        if (!getAllCategoriasResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar categorias",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Categorias buscadas com sucesso",
            data: getAllCategoriasResponse,
        };
        return res.status(200).json(response);
    },
    async get(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "Dados de empresa invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const getCategoriaResponse = await CategoriaModel.get(id);
        if (getCategoriaResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao buscar categoria",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Categoria encontrada com sucesso",
            data: getCategoriaResponse
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const id = req.params.id;
        const updatedCategoria = req.body;
        if (!id || !updatedCategoria) {
            const response = {
                status: "error",
                message: "Dados de categoria invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const updateCategoriaResponse = await CategoriaModel.update(id, updatedCategoria);
        if (updateCategoriaResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao atualizar categoria",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Categoria atualizada com sucesso",
            data: updateCategoriaResponse,
        };
        return res.status(200).json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID da categoria é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        const deleteCategoriaResponse = await CategoriaModel.delete(id);
        if (deleteCategoriaResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao deletar categoria",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Categoria apagada com sucesso",
            data: deleteCategoriaResponse,
        };
        return res.status(200).json(response);
    },
};
//# sourceMappingURL=categoria.controller.js.map