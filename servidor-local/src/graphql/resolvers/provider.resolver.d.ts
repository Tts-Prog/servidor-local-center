import type { ProvaiderType } from "../../utils/types.js";
export declare const ProviderResolver: {
    Query: {
        getAllProviders: () => Promise<any>;
        getProviderById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createProvider: (_: any, args: {
            newUser: ProvaiderType;
        }) => Promise<any>;
        updateProvider: (_: any, args: {
            id: string;
            newUser: ProvaiderType;
        }) => Promise<any>;
        deleteProvider: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    provider: {
        serviceProv: (parent: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=provider.resolver.d.ts.map