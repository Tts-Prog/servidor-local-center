import type { PropostaDBType } from "../../utils/types.js";
export declare const PropostaResolver: {
    Query: {
        getAllProposta: () => Promise<PropostaDBType[] | null>;
        getPropostaById: (_: any, args: {
            id: string;
        }) => Promise<PropostaDBType | null>;
    };
    Mutation: {
        createProposta: (_: any, args: {
            proposta: PropostaDBType;
        }) => Promise<PropostaDBType | null>;
        updateProposta: (_: any, args: {
            id: string;
            proposta: PropostaDBType;
        }) => Promise<PropostaDBType | null>;
        deleteProposta: (_: any, args: {
            id: string;
        }) => Promise<PropostaDBType | null>;
    };
    Proposta: {
        prestador: (parent: {
            id_prestador: string;
        }) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
        prestacaoServico: (parent: {
            id_prestacao_servico: string;
        }) => Promise<import("../../utils/types.js").PrestacaoServicoDBType | null>;
    };
};
//# sourceMappingURL=proposta.resolver.d.ts.map