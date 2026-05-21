import { UserModel } from "../../models/users.model.js";
export const userResolver = {
    Query: {
        getAllUsers: async () => {
            return await UserModel.getAll();
        },
        getUserById: async (_, args) => {
            return await UserModel.get(args.id);
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            return await UserModel.create(args.user);
        },
        updateUser: async (_, args) => {
            return await UserModel.update(args.id, args.user);
        },
        deleteUser: async (_, args) => {
            return await UserModel.delete(args.id);
        }
    }
};
//# sourceMappingURL=user.resolvers.js.map