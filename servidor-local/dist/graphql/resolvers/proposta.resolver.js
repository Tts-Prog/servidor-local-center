import { PrestacaoServicoModel } from "../../models/prestacao-servico.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { PropostaModel } from "../../models/proposta.model.js";
export const PropostaResolver = {
    Query: {
        getAllProposta: async () => {
            return await PropostaModel.getAll();
        },
        getPropostaById: async (_, args) => {
            return await PropostaModel.get(args.id);
        }
    },
    Mutation: {
        createProposta: async (_, args) => {
            return await PropostaModel.create(args.proposta);
        },
        updateProposta: async (_, args) => {
            return await PropostaModel.update(args.id, args.proposta);
        },
        deleteProposta: async (_, args) => {
            return await PropostaModel.delete(args.id);
        }
    },
    Proposta: {
        prestador: async (parent) => {
            return await PrestadorModel.get(parent.id_prestador);
        },
        prestacaoServico: async (parent) => {
            return await PrestacaoServicoModel.get(parent.id_prestacao_servico);
        }
    }
};
//# sourceMappingURL=proposta.resolver.js.map