import { PrestadorModel } from "../models/prestador.model.js";
export const PrestadorController = {
    async create(req, res) {
        const prestador = req.body;
        if (!prestador) {
            const response = {
                status: "error",
                message: "Dados de prestador invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const createPrestadorResponse = await PrestadorModel.create(prestador);
        if (!createPrestadorResponse) {
            const response = {
                status: "error",
                message: "Erro ao criar prestador",
                data: null
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Prestador criado com sucesso",
            data: createPrestadorResponse
        };
        return res.status(201).json(response);
    },
    async getAll(req, res) {
        const getAllPrestadoresResponse = await PrestadorModel.getAll();
        if (!getAllPrestadoresResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar prestadores",
                data: null
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Prestadores buscados com sucesso",
            data: getAllPrestadoresResponse
        };
        return res.status(200).json(response);
    },
    async get(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            };
            return res.status(400).json(response);
        }
        const getPrestadorByIdResponse = await PrestadorModel.get(id);
        if (!getPrestadorByIdResponse) {
            const response = {
                status: "error",
                message: "Prestador nao encontrado",
                data: null
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Prestador encontrado com sucesso",
            data: getPrestadorByIdResponse
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedPrestador = req.body;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            };
            return res.status(400).json(response);
        }
        if (!updatedPrestador) {
            const response = {
                status: "error",
                message: "Dados de prestador invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const updatePrestadorResponse = await PrestadorModel.update(id, updatedPrestador);
        if (!updatePrestadorResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar prestador",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestador atualizado com sucesso",
            data: updatePrestadorResponse
        };
        return res.status(200).json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            };
            return res.status(400).json(response);
        }
        const deletePrestadorResponse = await PrestadorModel.delete(id);
        if (!deletePrestadorResponse) {
            const response = {
                status: "error",
                message: "Erro ao apagar prestador",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestador apagado com sucesso",
            data: deletePrestadorResponse
        };
        return res.status(200).json(response);
    }
};
//# sourceMappingURL=prestador.controller.js.map