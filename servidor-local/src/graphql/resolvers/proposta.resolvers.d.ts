import type { PropostaDBType } from "../../utils/types.js";
export declare const propostaResolver: {
    Query: {
        getAllProposta: () => Promise<PropostaDBType[] | null>;
        getPropostaById: (_: any, args: {
            id: string;
        }) => Promise<PropostaDBType | null>;
        getByPrestacaoServico: (_: any, args: {
            idPrestacaoServico: string;
        }) => Promise<PropostaDBType[] | null>;
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
        aceitarProposta: (_: any, args: {
            id: string;
        }) => Promise<PropostaDBType | null>;
    };
};
//# sourceMappingURL=proposta.resolvers.d.ts.map