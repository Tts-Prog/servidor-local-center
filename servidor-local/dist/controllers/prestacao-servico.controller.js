import { PrestacaoServicoModel } from "../models/prestacao-servico.model.js";
// merge equal functions existing in this code 
// and fix  bug with 
// getAllPrestacaoServicoByCategoria when limit is not defined 
export const PrestacaoServicoController = {
    async create(req, res) {
        const prestacaoServico = req.body;
        if (!prestacaoServico) {
            const response = {
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const createPrestacaoServicoResponse = await PrestacaoServicoModel.create(prestacaoServico);
        if (!createPrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao criar prestacao de servico",
                data: null
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico criada com sucesso",
            data: createPrestacaoServicoResponse
        };
        return res.status(200).json(response);
    },
    async getAll(req, res) {
        const getAllPrestacaoServicosResponse = await PrestacaoServicoModel.getAll();
        if (!getAllPrestacaoServicosResponse) {
            const response = {
                status: "error",
                message: "Erro ao buscar prestacoes de servico",
                data: null
            };
            return res.status(500).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacoes de servico buscadas com sucesso",
            data: getAllPrestacaoServicosResponse
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
        const getPrestacaoServicoByIdResponse = await PrestacaoServicoModel.get(id);
        if (!getPrestacaoServicoByIdResponse) {
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
            data: getPrestacaoServicoByIdResponse
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
                data: null
            };
            return res.status(400).json(response);
        }
        if (!updatedPrestacaoServico) {
            const response = {
                status: "error",
                message: "Dados de prestacao de servico invalidos",
                data: null
            };
            return res.status(400).json(response);
        }
        const updatePrestacaoServicoResponse = await PrestacaoServicoModel.update(id, updatedPrestacaoServico);
        if (!updatePrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao atualizar prestacao de servico",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico atualizada com sucesso",
            data: updatePrestacaoServicoResponse
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
        const deletePrestacaoServicoResponse = await PrestacaoServicoModel.delete(id);
        if (!deletePrestacaoServicoResponse) {
            const response = {
                status: "error",
                message: "Erro ao apagar prestacao de servico",
                data: null
            };
            return res.status(400).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico apagada com sucesso",
            data: deletePrestacaoServicoResponse
        };
        return res.status(200).json(response);
    },
    async getAllPrestacaoServicoDetalhado(req, res) {
        const { limit, offset, categoria } = req.query;
        let LIMIT = 10;
        let OFFSET = 0;
        if (limit && parseInt(limit) > 0)
            LIMIT = parseInt(limit);
        if (offset && parseInt(offset) > 0)
            OFFSET = parseInt(offset);
        if (!categoria) {
            const response = {
                status: "error",
                message: "Categoria obrigatoria",
                data: null
            };
            return res.status(400).json(response);
        }
        const getAllPrestacaoServicoByCategoriaDetalhadoResponse = await PrestacaoServicoModel.getAllPrestacaoServicoByCategoriaDetalhado(categoria, LIMIT, OFFSET);
        if (!getAllPrestacaoServicoByCategoriaDetalhadoResponse) {
            const response = {
                status: "error",
                message: "Prestacao de servico nao encontrada",
                data: null
            };
            return res.status(404).json(response);
        }
        const response = {
            status: "success",
            message: "Prestacao de servico detalhada buscada com sucesso",
            data: getAllPrestacaoServicoByCategoriaDetalhadoResponse
        };
        return res.status(200).json(response);
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
    }
};
//# sourceMappingURL=prestacao-servico.controller.js.map