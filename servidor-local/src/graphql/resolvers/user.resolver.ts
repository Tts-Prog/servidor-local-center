import { prestacaoServicoModel } from "../../models/prestacao_servico.models.js"
import { userModel } from "../../models/user.models.js"
import type { utilizadorType } from "../../util/types.js"

<<<<<<< HEAD
import { EmpresaModel } from "../../models/empresa.model.js";
import { PrestadorModel } from "../../models/prestador.model.js";
import { usersModel } from "../../models/users.models.js";
import type { UserDBType } from "../../utils/types.js";
=======
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

// ********** resolver de user **********
export const userResolver = {
    // ********** query de user **********
    Query: {
        getAllUsers: async () => {
            return await userModel.getAll()
        },
        getUserById: async (_: any, args: { id: string }) => {
            return await userModel.getUserById(args.id)
        }
    },
    // ********** mutation de user **********
    Mutation: {
<<<<<<< HEAD
        createUser: async (_: any, args: { user: UserDBType }) => {
            return await usersModel.create(args.user);
        },
        updateUser: async (_: any, args: { id: string, user: UserDBType }) => {
            return await usersModel.update(args.id, args.user);
=======
        createUser: async (_: any, args: { user: utilizadorType }) => {
            return await userModel.novoUtilizador(args.user)
        },
        updateUser: async (_: any, args: { id: string, user: utilizadorType }) => {
            return await userModel.updateuser(args.id, args.user)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        },
        deleteUser: async (_: any, args: { id: string }) => {
            return await userModel.deleteuser(args.id)
        }
    },
<<<<<<< HEAD
    // relacionamento 
    User: {
        empresa: async (parent: UserDBType) => {
            return await EmpresaModel.get(parent.id!);
        },
        prestador: async (parent: UserDBType) => {
            return await PrestadorModel.get(parent.id!);
=======
    utilizador: {
        orcamentos: async (parent: utilizadorType) => {
            return await userModel.getUserById(parent.id)
        },
        empresa: async (parent: utilizadorType) => {
            return await userModel.getUserById(parent.id)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        }
    }
}
