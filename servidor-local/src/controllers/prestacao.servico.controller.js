import { PrestacaoServicoModel } from "../models/prestacao.servico.model.js";
export const PrestacaoServicoController = {
    async create(req, res) {
        const newPrestacaoServico = req.body;
        if (!newPrestacaoServico) {
            const response = {
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const createPrestacaoServicoResponse = await PrestacaoServicoModel.create(newPrestacaoServico);
        if (createPrestacaoServicoResponse === null) {
            const response = {
                status: "error",
                message: "Erro ao criar prestacao de servico",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico criada com sucesso",
            data: createPrestacaoServicoResponse
        };
        return res.status(200).json(response);
    },
    async getAll(req, res) {
        const getAllPrestacaoServicoResponse = await PrestacaoServicoModel.getAll();
        if (!getAllPrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicoResponse
        };
        return res.status(200).json(response);
    },
    async get(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID de prestacao de servico nao fornecido",
                data: null
            };
            return res.status(400).json(response);
        }
        const getPrestacaoServicoResponse = await PrestacaoServicoModel.get(id);
        if (!getPrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Prestacao de servico nao encontrada",
                data: null
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico encontrada com sucesso",
            data: getPrestacaoServicoResponse
        };
        return res.status(200).json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedPrestacaoServico = req.body;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null,
            };
            return res.status(400).json(response);
        }
        if (!updatedPrestacaoServico) {
            const response = {
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null,
            };
            return res.status(400).json(response);
        }
        const updatePrestacaoServicoResponse = await PrestacaoServicoModel.update(id, updatedPrestacaoServico);
        if (!updatePrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar prestacao de servico",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico atualizada com sucesso",
            data: updatePrestacaoServicoResponse,
        };
        return res.status(200).json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = {
                status: "error",
                message: "ID obrigatorio",
                data: null,
            };
            return res.status(400).json(response);
        }
        const deletePrestacaoServicoResponse = await PrestacaoServicoModel.delete(id);
        if (!deletePrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao apagar prestacao de servico",
                data: null,
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico apagada com sucesso",
            data: deletePrestacaoServicoResponse,
        };
        return res.status(200).json(response);
    },
    async getAllPrestacaoServicoDetalhada(req, res) {
        const { limit, offset } = req.query;
        let LIMIT = 10;
        let OFFSET = 0;
        if (limit && parseInt(limit) > 0)
            LIMIT = parseInt(limit);
        if (offset && parseInt(offset) > 0)
            OFFSET = parseInt(offset);
        const getAllPrestacaoServicoDetalhadaResponse = await PrestacaoServicoModel.getAllPrestacaoServicoDetalhada(LIMIT, OFFSET);
        if (!getAllPrestacaoServicoDetalhadaResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico buscadas com sucesso",
            data: getAllPrestacaoServicoDetalhadaResponse
        };
        return res.status(200).json(response);
    }
};
//# sourceMappingURL=prestacao.servico.controller.js.map