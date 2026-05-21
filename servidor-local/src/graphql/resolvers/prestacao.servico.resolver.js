import { PrestacaoServicoModel } from "../../models/prestacao.servico.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
export const prestacaoServicoResolver = {
    Query: {
        getAllPrestacaoServico: async () => {
            return await PrestacaoServicoModel.getAll();
        },
        getPrestacaoServicoById: async (_, args) => {
            return await PrestacaoServicoModel.get(args.id);
        }
    },
    Mutation: {
        createPrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.create(args.prestacaoServico);
        },
        updatePrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.update(args.id, args.prestacaoServico);
        },
        deletePrestacaoServico: async (_, args) => {
            return await PrestacaoServicoModel.delete(args.id);
        }
    },
    PrestacaoServico: {
        prestador: async (parent) => {
            return await PrestadorModel.get(parent.id);
        },
        empresa: async (parent) => {
            return await PrestadorModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=prestacao.servico.resolver.js.map