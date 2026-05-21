import { PrestacaoServicoModel } from "../../models/prestacao_servico.model.js";
export const userResolver = {
    Query: {
        getAllPrestacaoServico: async () => {
            return await PrestacaoServicoModel.getAll();
        },
        getPrestacaoServicoById: async (_, args) => {
            return await PrestacaoServicoModel.get(args.id);
        },
        getByIdOrcamento: async (_, args) => {
            return await PrestacaoServicoModel.getByIdOrcamento(args.idOrcamento);
        },
    },
    Mutation: {
        createPrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.create(args.PrestacaoServico);
        },
        updatePrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.update(args.id, args.PrestacaoServico);
        },
        deletePrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.delete(args.id);
        },
    }
};
//# sourceMappingURL=prestacao_servico.resolvers.js.map