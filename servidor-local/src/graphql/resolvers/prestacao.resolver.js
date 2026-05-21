import { prestacaoServicoModel } from "../../models/prestacao_servico.models.js";
export const prestacaoResolver = {
    Query: {
        getAllPrestacaoServico: async () => {
            return await prestacaoServicoModel.getAllPrestacoesServicos();
        },
        getPrestacaoServicoById: async (_, args) => {
            return await prestacaoServicoModel.getPrestacaoServico(args.id);
        }
    },
    Mutation: {
        createPrestacao: async (_, args) => {
            return await prestacaoServicoModel.createPrestacaoServico(args.prestacao);
        },
        updatePrestacao: async (_, args) => {
            return await prestacaoServicoModel.updatePrestacaoServico(args.id, args.prestacao);
        },
        deletePrestacao: async (_, args) => {
            return await prestacaoServicoModel.deletePrestacaoServico(args.id);
        }
    },
    prestacao: {
        prestador: async (parent) => {
            return await prestacaoServicoModel.getPrestacaoServico(parent.id);
        },
        utilizador: async (parent) => {
            return await prestacaoServicoModel.getPrestacaoServico(parent.id);
        },
        empresa: async (parent) => {
            return await prestacaoServicoModel.getPrestacaoServico(parent.id);
        },
        servico: async (parent) => {
            return await prestacaoServicoModel.getPrestacaoServico(parent.id);
        },
        orcamento: async (parent) => {
            return await prestacaoServicoModel.getPrestacaoServico(parent.id);
        }
    }
};
//# sourceMappingURL=prestacao.resolver.js.map