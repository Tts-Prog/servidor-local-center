import { PrestacaoServicoModel } from "../models/prestacao_servico.model.js";
export const PrestacaoServicoController = {
    async create(req, res) {
        const prestacaoServico = req.body;
        if (!prestacaoServico) {
            return res.status(400).json({
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            });
        }
        const createPrestacaoServicoResponse = await PrestacaoServicoModel.create(prestacaoServico);
        if (!createPrestacaoServicoResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao criar prestacao de servico",
                data: null
            });
        }
        return res.status(201).json({
            status: "success",
            message: "Prestacao de servico criada com sucesso",
            data: createPrestacaoServicoResponse
        });
    },
    async getAll(req, res) {
        const getAllPrestacaoServicosResponse = await PrestacaoServicoModel.getAll();
        if (!getAllPrestacaoServicosResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicosResponse
        });
    },
    async get(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            });
        }
        const getPrestacaoServicoByIdResponse = await PrestacaoServicoModel.get(id);
        if (!getPrestacaoServicoByIdResponse) {
            return res.status(404).json({
                status: "error",
                message: "Prestacao de servico nao encontrada",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico encontrada com sucesso",
            data: getPrestacaoServicoByIdResponse
        });
    },
    async update(req, res) {
        const { id } = req.params;
        const updatedPrestacaoServico = req.body;
        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            });
        }
        if (!updatedPrestacaoServico) {
            return res.status(400).json({
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            });
        }
        const updatePrestacaoServicoResponse = await PrestacaoServicoModel.update(id, updatedPrestacaoServico);
        if (!updatePrestacaoServicoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar prestacao de servico",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico atualizada com sucesso",
            data: updatePrestacaoServicoResponse
        });
    },
    async getAllPrestacaoServicoDetalhada(req, res) {
        const { limit, offset } = req.query;
        let LIMIT = 10;
        let OFFSET = 0;
        if (limit && parseInt(limit) > 0)
            LIMIT = parseInt(limit);
        if (offset && parseInt(offset) > 0)
            OFFSET = parseInt(offset);
        const getAllPrestacaoServicosResponse = await PrestacaoServicoModel.getAllPrestacaoServicoDetalhada(LIMIT, OFFSET);
        if (!getAllPrestacaoServicosResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicosResponse
        });
    },
    async getAllPrestacaoServicoByCategoria(req, res) {
        const { categoria } = req.params;
        const { limit, offset } = req.query;
        let LIMIT = 10;
        let OFFSET = 0;
        if (limit && parseInt(limit) > 0)
            LIMIT = parseInt(limit);
        if (offset && parseInt(offset) > 0)
            OFFSET = parseInt(offset);
        const getAllPSByCategoriaResponse = await PrestacaoServicoModel.getAllPrestacaoServicoByCategoria(LIMIT, OFFSET, categoria);
        if (!getAllPSByCategoriaResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPSByCategoriaResponse
        });
    },
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            });
        }
        const deletePrestacaoServicoResponse = await PrestacaoServicoModel.delete(id);
        if (!deletePrestacaoServicoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar prestacao de servico",
                data: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Prestacao de servico apagada com sucesso",
            data: deletePrestacaoServicoResponse
        });
    },
};
//# sourceMappingURL=prestacao_servico.controller.js.map