import type { PropostaType, UserType } from "../../utils/types.js";
export declare const servicoResolver: {
    Query: {
        getAllUsers: () => Promise<any>;
        getUsersById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createUser: (_: any, args: {
            proposta: PropostaType;
        }) => Promise<any>;
        updateUser: (_: any, args: {
            id: string;
            proposta: PropostaType;
        }) => Promise<any>;
        deleteUser: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    User: {
        prestador: (parent: UserType) => Promise<any>;
        empresa: (parent: UserType) => Promise<any>;
    };
};
//# sourceMappingURL=servico.resoltver.d.ts.map