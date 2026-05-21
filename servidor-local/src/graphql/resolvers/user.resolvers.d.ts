import type { UserType } from "../../utils/types.js";
export declare const userResolver: {
    Query: {
        getAllUsers: () => Promise<any>;
        getUserById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createUser: (_: any, args: {
            user: UserType;
        }) => Promise<any>;
        updateUser: (_: any, args: {
            id: string;
            user: UserType;
        }) => Promise<any>;
        deleteUser: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=user.resolvers.d.ts.map