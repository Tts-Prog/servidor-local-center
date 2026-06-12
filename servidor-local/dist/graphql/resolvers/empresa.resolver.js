import { EmpresaModel } from "../../models/empresa.model.js";
import { UsersModel } from "../../models/users.model.js";
export const EmpresaResolver = {
    Query: {
        getAllEmpresa: async () => {
            return await EmpresaModel.getAll();
        },
        getEmpresaById: async (_, args) => {
            return await EmpresaModel.get(args.id);
        }
    },
    Mutation: {
        createEmpresa: async (_, args) => {
            return await EmpresaModel.create(args.empresa);
        },
        updateEmpresa: async (_, args) => {
            return await EmpresaModel.update(args.id, args.empresa);
        },
        deleteEmpresa: async (_, args) => {
            return await EmpresaModel.delete(args.id);
        }
    },
    Empresa: {
        utilizadores: async (parent) => {
            return await UsersModel.get(parent.id_utilizador);
        }
    }
};
//# sourceMappingURL=empresa.resolver.js.map