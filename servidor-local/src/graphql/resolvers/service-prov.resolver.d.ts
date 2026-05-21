import type { ServiceProvType } from "../../utils/types.js";
export declare const ServiceProvResolver: {
    Query: {
        getAllServiceProv: () => Promise<any>;
        getServiceProvById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createServiceProv: (_: any, args: {
            serviceProv: ServiceProvType;
        }) => Promise<any>;
        updateServiceProv: (_: any, args: {
            id: string;
            newServiceProv: ServiceProvType;
        }) => Promise<any>;
        deleteServiceProv: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    serviceProv: {
        servico: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
        budget: (parent: {
            id: string;
        }) => Promise<any>;
        prestador: (parent: {
            id: string;
        }) => Promise<any>;
        proposta: (parent: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=service-prov.resolver.d.ts.map