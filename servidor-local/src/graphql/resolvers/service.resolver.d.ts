import type { ServiceDBType } from "../../utils/types.js";
export declare const ServiceResolver: {
    Query: {
        getAllServices: () => Promise<ServiceDBType[] | null>;
        getServiceById: (_: any, args: {
            id: string;
        }) => Promise<ServiceDBType | null>;
    };
    Mutation: {
        createService: (_: any, args: {
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<ServiceDBType | null>;
        updateService: (_: any, args: {
            id: string;
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<ServiceDBType | null>;
        deleteService: (_: any, args: {
            id: string;
        }) => Promise<ServiceDBType | null>;
    };
    service: {
        categoria: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").CategoriaDBType | null>;
    };
    serviceProv: (parent: {
        id: string;
    }) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
};
//# sourceMappingURL=service.resolver.d.ts.map