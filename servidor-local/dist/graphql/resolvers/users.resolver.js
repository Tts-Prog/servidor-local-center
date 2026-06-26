import { UsersModel } from "../../models/users.model.js";
import { EmpresaModel } from "../../models/empresa.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
export const UsersResolver = {
    Query: {
        getAllUsers: async () => {
            return await UsersModel.getAll();
        },
        getUserById: async (_, args) => {
            return await UsersModel.get(args.id);
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            return await UsersModel.create(args.user);
        },
        updateUser: async (_, args) => {
            return await UsersModel.update(args.id, args.user);
        },
        deleteUser: async (_, args) => {
            return await UsersModel.delete(args.id);
        }
    },
    User: {
        empresa: async (parent) => {
            return await EmpresaModel.get(parent.id);
        },
        prestador: async (parent) => {
            return await PrestadorModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=users.resolver.js.map