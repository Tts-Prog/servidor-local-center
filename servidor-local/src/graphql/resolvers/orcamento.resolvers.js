import { OrcamentoModel } from "../../models/orcamento.models.js";
export const orcamentoResolver = {
    Query: {
        getAllOrcamento: async () => {
            return await OrcamentoModel.getAll();
        },
        getOrcamentoById: async (_, args) => {
            return await OrcamentoModel.get(args.id);
        }
    },
    Mutation: {
        createOrcamento: async (_, args) => {
            return await OrcamentoModel.create(args.orcamento);
        },
        updateOrcamento: async (_, args) => {
            return await OrcamentoModel.update(args.id, args.orcamento);
        },
        deleteOrcamento: async (_, args) => {
            return await OrcamentoModel.delete(args.id);
        },
        updateBudget: async (_, args) => {
            return await OrcamentoModel.updateBudget(args.id, args.total);
        },
    }
};
//# sourceMappingURL=orcamento.resolvers.js.map