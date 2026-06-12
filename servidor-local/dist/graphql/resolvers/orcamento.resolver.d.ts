import type { OrcamentoDBType } from "../../utils/types.js";
export declare const OrcamentoResolver: {
    Query: {
        getAllOrcamento: () => Promise<OrcamentoDBType[]>;
        getOrcamentoById: (_: any, args: {
            id: string;
        }) => Promise<OrcamentoDBType | null>;
    };
    Mutation: {
        createOrcamento: (_: any, args: {
            orcamento: OrcamentoDBType;
        }) => Promise<OrcamentoDBType | null>;
        updateOrcamento: (_: any, args: {
            id: string;
            orcamento: OrcamentoDBType;
        }) => Promise<OrcamentoDBType | null>;
        deleteOrcamento: (_: any, args: {
            id: string;
        }) => Promise<OrcamentoDBType | null>;
    };
    Orcamento: {
        utilizador: (parent: {
            id_utilizadores: string;
        }) => Promise<import("../../utils/types.js").UserDBType | null>;
    };
};
//# sourceMappingURL=orcamento.resolver.d.ts.map