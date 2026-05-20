import { UserModel } from "../../models/user.model.js";
import type { userTypeDB } from "../../utils/types.js";

export const userResolver = {
    Query: {
        getAllUsers: async () => {
            return await UserModel.getAll();
        },

        getUserById: async (_: any, args: { id: string }) => {
            return await UserModel.get(args.id)
        }
    },

    Mutation: {
        createUser: async (_: any, args: { user: userTypeDB }) => {
            return await UserModel.create(args.user);
        },
        updatedUser: async (_: any, args: { id: string, user: userTypeDB }) => {
            return await UserModel.update(args.id, args.user);
        },
        deleteUser: async (_: any, args: { id: string }) => {
            return await UserModel.delete(args.id,);
        }
    }
}