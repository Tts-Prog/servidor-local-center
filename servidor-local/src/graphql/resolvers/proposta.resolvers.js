import { PropostaModel } from "../../models/proposta.model.js";
export const propostaResolver = {
    Query: {
        getAllProposta: async () => {
            return await PropostaModel.getAll();
        },
        getPropostaById: async (_, args) => {
            return await PropostaModel.get(args.id);
        },
        getByPrestacaoServico: async (_, args) => {
            return await PropostaModel.getByPrestacaoServico(args.idPrestacaoServico);
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
        },
        aceitarProposta: async (_, args) => {
            return await PropostaModel.acceptProposal(args.id);
        },
    }
};
//# sourceMappingURL=proposta.resolvers.js.map