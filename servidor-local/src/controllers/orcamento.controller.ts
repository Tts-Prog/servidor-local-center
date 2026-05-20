import type { Request, Response } from "express"
import type { OrcamentoDBType, PrestacaoServicoDBType, PropostaDBType, ResponseType } from "../utils/types.js"
import { OrcamentoModel } from "../models/oramento.model.js"
import { PrestacaoServicoModel } from "../models/prestacao-servico.models.js"
import { FreelancerModel } from "../models/prestador.model.js"
import { PropostaModel } from "../models/proposta.model.js"
import { id } from "date-fns/locale"


export const OrcamentoController = {
    async create(req: Request, res: Response) {
        const orcamento: OrcamentoDBType = req.body;

        if (!orcamento) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Dados de orcamento invalidos",
                data: null
            }
            return res.status(500).json(response)
        }

        const createOrcamentoResponse: OrcamentoDBType | null = await OrcamentoModel.create(orcamento)

        if (!createOrcamentoResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao criar orcamento",
                data: null
            }
            return res.status(400).json(response)
        }

        const response: ResponseType<OrcamentoDBType> = {
            status: "success",
            message: "Orcamento criado com sucesso",
            data: createOrcamentoResponse
        }

        return res.status(201).json(response)
    },

    async getAll(req: Request, res: Response) {
        const getAllOrcamentosResponse: OrcamentoDBType[] | null = await OrcamentoModel.getAll()

        if (!getAllOrcamentosResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar orcamentos",
                data: null
            }
            return res.status(500).json(response)
        }

        const response: ResponseType<OrcamentoDBType[]> = {
            status: "success",
            message: "Orcamento criado com sucesso",
            data: getAllOrcamentosResponse
        }

        return res.status(200).json(response)
    },

    async get(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            const response: ResponseType<OrcamentoDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            }
            return res.status(400).json(response)
        }

        const getOrcamentoByIdResponse: OrcamentoDBType | null = await OrcamentoModel.get(id as string)

        if (!getOrcamentoByIdResponse) {
            const response: ResponseType<OrcamentoDBType> = {
                status: "error",
                message: "Orcamento nao encontrado",
                data: null
            }
            return res.status(404).json(response)
        }

        const response: ResponseType<OrcamentoDBType> = {
            status: "success",
            message: "Orcamento encontrado com sucesso",
            data: getOrcamentoByIdResponse
        }

        return res.status(200).json(response)
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;

        const updatedOrcamento: OrcamentoDBType = req.body;

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null,
            });
        }

        if (!updatedOrcamento) {
            return res.status(400).json({
                status: "error",
                message: "Dados de orcamento invalidos",
                data: null,
            });
        }

        const updateOrcamentoResponse = await OrcamentoModel.update(
            id as string,
            updatedOrcamento,
        );

        if (!updateOrcamentoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar orcamento",
                data: null,
            });
        }

        const response: ResponseType<OrcamentoDBType> = {
            status: "success",
            message: "Orcamento encontrado com sucesso",
            data: updateOrcamentoResponse
        }

        return res.status(200).json(response)
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            const response: ResponseType<OrcamentoDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            }
            return res.status(400).json(response)
        }

        const deleteOrcamentoResponse: OrcamentoDBType | null = await OrcamentoModel.delete(id as string)

        if (!deleteOrcamentoResponse) {
            const response: ResponseType<OrcamentoDBType> = {
                status: "error",
                message: "Erro ao apagar orcamento",
                data: null
            }
            return res.status(404).json(response)
        }

        const response: ResponseType<OrcamentoDBType> = {
            status: "success",
            message: "Orcamento encontrado com sucesso",
            data: deleteOrcamentoResponse
        }

        return res.status(200).json(response)

    },

    async calcular(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            const response: ResponseType<OrcamentoDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
            }
            return res.status(400).json(response)
        }

        const prestacoes: PrestacaoServicoDBType[] | null = await PrestacaoServicoModel.getByOrcamentoId(id as string)



        if (!prestacoes || prestacoes.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "Nenhuma prestação de serviço ativa associada a este orçamento.",
                data: null
            });
        }

        let totalGeral = 0;

        for (const prestacao of prestacoes) {
            let custoBase = prestacao.horas_estimadas * prestacao.preco_hora;
            let desconto = 0
            let urgencia = 0

            const prestador = await FreelancerModel.get(prestacao.id_prestador) as any;

            if (prestador) {
                if (prestacao.urgente === true) {
                    urgencia = custoBase * prestador.taxa_urgencia;
                }

                if (custoBase >= prestador.minimo_desconto) {
                    desconto = custoBase * (prestador.percentagem_desconto / 100);
                }
            }

            totalGeral += custoBase - desconto + urgencia;
        }

        const updateResult = await OrcamentoModel.atualizarTotal(id as string, totalGeral);

        if (!updateResult) {
            return res.status(500).json({
                status: "error",
                message: "Ocorreu um erro ao gravar o valor absoluto no banco de dados.",
                data: null
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Orçamento calculado e atualizado com sucesso.",
            data: { id_orcamento: id, total_calculado: parseFloat(totalGeral.toFixed(2)) }
        });
    }


}
/*

const prestacaoServico = await PrestacaoServicoModel.get(
    id as string,
);

if (!prestacaoServico) {
    return res.status(404).json({
        status: "error",
        message: "Prestacao de servico nao encontrado",
        data: null,
    });
}

const proposals = await PropostaModel.getByIdPrestacaoServico(
    prestacaoServico.id,
);

if (!proposals) {
    return res.status(404).json({
        status: "error",
        message: "Ainda nenhuma proposta foi aceite",
        data: null,
    });
}

const acceptedProposal: PropostaDBType | undefined = proposals.find((proposal) => proposal.estado === "aceite",
);

if (!acceptedProposal) {
    return res.status(404).json({
        status: "error",
        message: "Ainda nenhuma proposta foi aceite",
        data: null,
    });
}

const precoHora = acceptedProposal.preco_hora;
const horasEstimadas = prestacaoServico.horas_estimadas;

const prestador = await FreelancerModel.get(acceptedProposal.id_prestador); // create id_prestador em PropostaDBType

if (!prestador) {
    return res.status(404).json({
        status: "error",
        message: "Prestador nao encontrado",
        data: null,
    });
}

const urgencyTax = prestador.taxa_urgencia;
const minimoDesconto = prestador.minimo_desconto;
const discountPercentage = prestador.percentagem_desconto;

let subtotal = precoHora * horasEstimadas;

if (subtotal >= minimoDesconto) {
    subtotal = subtotal * (1 - discountPercentage);
}

if (prestacaoServico.urgente) {
    subtotal = subtotal * (1 - urgencyTax)
}

const updatePrestacaoServicoResponse = await OrcamentoModel.atualizarTotal(id as string, subtotal);

if (!updatePrestacaoServicoResponse) {
    return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar budget",
        data: null,
    });
}

return res.status(200).json({
    status: "success",
    message: "Budget calculado com sucesso",
    data: updatePrestacaoServicoResponse,
});

    }
};
*/