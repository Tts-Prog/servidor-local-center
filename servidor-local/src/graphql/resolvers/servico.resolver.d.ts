import type { ServiceDBType } from "../../utils/types.js";
export declare const ServicoResolver: {
    Query: {
        getAllService: () => Promise<ServiceDBType[] | null>;
        getServiceById: (_: any, args: {
            id: string;
        }) => Promise<ServiceDBType | null>;
    };
    Mutation: {
        createService: (_: any, args: {
            service: ServiceDBType;
        }) => Promise<ServiceDBType | null>;
        updateService: (_: any, args: {
            id: string;
            service: ServiceDBType;
        }) => Promise<ServiceDBType | null>;
        deleteService: (_: any, args: {
            id: string;
        }) => Promise<ServiceDBType | null>;
    };
    Servico: {
        categoria: (parent: {
            categoria: string;
        }) => Promise<import("../../utils/types.js").CategoriaDBType | null>;
    };
};
//# sourceMappingURL=servico.resolver.d.ts.map