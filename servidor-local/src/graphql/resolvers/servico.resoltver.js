import { ServicoModel } from "../../models/servico.models.js";
export const servicoResolver = {
    Query: {
        getAllUsers: async () => {
            return await ServicoModel.getAll();
        },
        getUsersById: async (_, args) => {
            return await ServicoModel.get(args.id);
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            return await ServicoModel.create(args.proposta);
        },
        updateUser: async (_, args) => {
            return await ServicoModel.update(args.id, args.proposta);
        },
        deleteUser: async (_, args) => {
            return await ServicoModel.delete(args.id);
        }
    },
    User: {
        prestador: async (parent) => {
            return await ServicoModel.get(parent.id);
        },
        empresa: async (parent) => {
            return await ServicoModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=servico.resoltver.js.map