import type { UserDBType, userType } from "../../utils/types.js";
export declare const UsersResolver: {
    Query: {
        getAllUsers: () => Promise<UserDBType[] | null>;
        getUserById: (_: any, args: {
            id: string;
        }) => Promise<UserDBType | null>;
    };
    Mutation: {
        createUser: (_: any, args: {
            user: userType;
        }) => Promise<UserDBType | null>;
        updateUser: (_: any, args: {
            id: string;
            user: userType;
        }) => Promise<UserDBType | null>;
        deleteUser: (_: any, args: {
            id: string;
        }) => Promise<UserDBType | null>;
    };
    User: {
        empresa: (parent: UserDBType) => Promise<import("../../utils/types.js").EmpresaDBType | null>;
        prestador: (parent: UserDBType) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
    };
};
//# sourceMappingURL=users.resolver.d.ts.map