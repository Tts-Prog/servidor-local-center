import { propostaModel } from "../../models/proposta.models.js"
import type { NovapropostaType } from "../../util/types.js"

<<<<<<< HEAD
import { PrestacaoServicoModel } from "../../models/prestacao-servico.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { PropostaModel } from "../../models/proposta.model.js";
import type { PropostaDBType, } from "../../utils/types.js";

export const propostaResolver = {
    Query: {
        getAllProposta: async () => {
            return await PropostaModel.getAll();
        },

        getPropostaById: async (_: any, args: { id: string }) => {
            return await PropostaModel.get(args.id);
        }
    },
    Mutation: {
        createProposta: async (_: any, args: { proposta: PropostaDBType }) => {
            return await PropostaModel.create(args.proposta);
        },
        updateProposta: async (_: any, args: { id: string, proposta: PropostaDBType }) => {
            return await PropostaModel.update(args.id, args.proposta);
        },
        deleteProposta: async (_: any, args: { id: string }) => {
            return await PropostaModel.delete(args.id);
        }
    },

    // Relacionamento entre Proposta e Prestador e PrestacaoServico
    Proposta: {
        prestador: async (parent: { id_prestador: string }) => {
            return await PrestadorModel.get(parent.id_prestador);
        },
        prestacaoServico: async (parent: { id_prestacao_servico: string }) => {
            return await PrestacaoServicoModel.get(parent.id_prestacao_servico);
        }
    }
}
=======

export const propostaResolver = {
    Query: {
        getAllPropostas: async () => {
            return await propostaModel.getAllPropostas()
        },
        getPropostaById: async (_: any, args: { id: string }) => {
            return await propostaModel.getPropostaById(args.id)
        }
    },
    Mutation: {
        createProposta: async (_: any, args: { proposta: NovapropostaType }) => {
            return await propostaModel.createProposta(args.proposta)
        },
        updateProposta: async (_: any, args: { id: string, proposta: NovapropostaType }) => {
            return await propostaModel.updateProposta(args.id, args.proposta)
        },
        deleteProposta: async (_: any, args: { id: string }) => {
            return await propostaModel.deleteProposta(args.id)
        }
    },
    proposta: {
        prestacao: async (parent: NovapropostaType) => {
            return await propostaModel.getPropostaById(parent.id as any)
        },
        prestador: async (parent: NovapropostaType) => {
            return await propostaModel.getPropostaById(parent.id as any)
        }
    }
}  
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
