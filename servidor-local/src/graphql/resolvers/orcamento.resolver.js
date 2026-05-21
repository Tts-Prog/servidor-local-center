import { OrcamentoModel } from "../../models/orcamento.model.js";
import { UsersModel } from "../../models/users.model.js";
export const OrcamentoResolver = {
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
        }
    },
    Orcamento: {
        utilizador: async (parent) => {
            return await UsersModel.get(parent.id_utilizadores);
        }
    }
};
//# sourceMappingURL=orcamento.resolver.js.map