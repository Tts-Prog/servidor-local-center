import type { OrcamentoDBType } from "../../utils/types.js";
export declare const orcamentoResolver: {
    Query: {
        getAllOrcamento: () => Promise<any>;
        getOrcamentoById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createOrcamento: (_: any, args: {
            orcamento: OrcamentoDBType;
        }) => Promise<any>;
        updateOrcamento: (_: any, args: {
            id: string;
            orcamento: OrcamentoDBType;
        }) => Promise<any>;
        deleteOrcamento: (_: any, args: {
            id: string;
        }) => Promise<any>;
        updateBudget: (_: any, args: {
            id: string;
            total: number;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=orcamento.resolvers.d.ts.map