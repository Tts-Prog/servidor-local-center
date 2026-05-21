export declare const ServiceResolver: {
    Query: {
        getAllServices: () => Promise<import("../../utils/types.js").ServiceDBType[] | null>;
        getServiceById: (_: any, args: {
            id: string;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
    };
    Mutation: {
        createService: (_: any, args: {
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
        updateService: (_: any, args: {
            id: string;
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
        deleteService: (_: any, args: {
            id: string;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
    };
    service: {
        categoria: (parent: {
            id: string;
        }) => Promise<any>;
    };
    serviceProv: (parent: {
        id: string;
    }) => Promise<any>;
};
//# sourceMappingURL=service.resolver.d.ts.map