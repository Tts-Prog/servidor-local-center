import { ServiceModel } from "../models/servico.model.js";
export const ServicoController = {
    async createServico(req, res) {
        const newService = req.body;
        if (!newService) {
            const response = {
                status: "error",
                message: "Dados de sevico invalidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const createServiceResponse = await ServiceModel.create(newService);
        if (!createServiceResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao criar servico",
                data: null,
            };
            return res.status(400).json(response);
        }
        const responde = {
            status: "success",
            message: "servico criado com sucesso",
            data: createServiceResponse,
        };
        return res.status(200).json(responde);
    },
    async getAll(req, res) {
        const getAllServiceResponse = await ServiceModel.getAll();
        if (!getAllServiceResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar servico",
                data: null,
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Servico buscado com sucesso",
            data: getAllServiceResponse,
        };
        return res.status(200).json(response);
    },
    async get(req, res) {
        const id = req.params.id;
        if (!id) {
            const response = {
                status: "error",
                message: "ID do servico nao fornecido",
                data: null,
            };
            return res.status(400).json(response);
        }
        const getServiceResponse = await ServiceModel.get(id);
        if (!getServiceResponse) {
            const response = {
                status: "error",
                message: "Servico nao encontrado",
                data: null,
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Servico encontrado com sucesso",
            data: getServiceResponse,
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedService = req.body;
        if (!id) {
            const response = {
                status: "error",
                message: "ID é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        if (!updatedService) {
            const response = {
                status: "error",
                message: "Dados de servico invalido",
                data: null,
            };
            return res.status(400).json(response);
        }
        const updateServiceResponse = await ServiceModel.update(id, updatedService);
        if (!updateServiceResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar servico",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Servico atualizado com sucesso",
            data: updateServiceResponse
        };
        return res.status(200).json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID  obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }
        const deleteServiceResponse = await ServiceModel.delete(id);
        if (!deleteServiceResponse) {
            const response = {
                status: "error",
                message: "Erro ao apagar servico",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Servico apagado com sucesso",
            data: deleteServiceResponse
        };
        return res.status(200).json(response);
    },
    async getAllServicoDetalhado(req, res) {
        const { limit, offset } = req.query;
        let LIMIT = 10;
        let OFFSET = 0;
        if (limit) {
            LIMIT = parseInt(limit);
        }
        if (offset) {
            OFFSET = parseInt(offset);
        }
        const getAllServicoDetalhadoResponse = await ServiceModel.getAllServicoDetalhado(LIMIT, OFFSET);
        if (!getAllServicoDetalhadoResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar servicos detalhados",
                data: null,
            };
            return res.status(404).json(response);
        }
    }
};
//# sourceMappingURL=servico.controller.js.map