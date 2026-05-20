<<<<<<< HEAD

import {UsersModel} from "../../models/users.model.js";
import type { UserDBType } from "../../utils/types.js";

export const usersResolver = {
    Query: {
        getAllUsers: async () => {
            return await UsersModel.getAll();
        },

        getUserById: async (_: any, args: { id: string }) => {
            return await UsersModel.get(args.id);
        }
    },
    Mutation: {
        createUser: async (_: any, args: { user: UserDBType }) => {
            return await UsersModel.create(args.user);
        },
        updateUser: async (_: any, args: { id: string, user: UserDBType }) => {
            return await UsersModel.update(args.id, args.user);
        },
        deleteUser: async (_: any, args: { id: string }) => {
            return await UsersModel.delete(args.id);
        }
    }
}
=======
import { CompanyModel } from "../../models/empresa.model.js";
import { UserModel } from "../../models/users.model.js";
import type { UserType } from "../../utils/types.js";



export const userResolver = {
    Query: {
        getAllUsers: async () => {
            return await UserModel.getAll();
        },
        getUserById: async (_: any, args: {id: string}) => {
            return await UserModel.get(args.id);
        }
    },
    Mutation: {
        createUser: async (_: any, args: {newUser: UserType}) => {
            return await UserModel.create(args.newUser);
        },
        updateUser: async (_: any, args: {id: string, newUser: UserType}) => {
            return await UserModel.update(args.id, args.newUser);
        },
        deleteUser: async (_: any, args: {id: string}) => {
            return await UserModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    user: {
        company: async (parent: {id: string}) => {
            return await CompanyModel.get(parent.id);
        }
    }
}
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
