import type { PrestacaoServicoDBType } from "../../utils/types.js";
export declare const prestacaoServicoResolver: {
    Query: {
        getAllPrestacaoServico: () => Promise<PrestacaoServicoDBType[] | null>;
        getPrestacaoServicoById: (_: any, args: {
            id: string;
        }) => Promise<PrestacaoServicoDBType | null>;
    };
    Mutation: {
        createPrestacaoServico: (_: any, args: {
            prestacaoServico: PrestacaoServicoDBType;
        }) => Promise<PrestacaoServicoDBType | null>;
        updatePrestacaoServico: (_: any, args: {
            id: string;
            prestacaoServico: PrestacaoServicoDBType;
        }) => Promise<PrestacaoServicoDBType | null>;
        deletePrestacaoServico: (_: any, args: {
            id: string;
        }) => Promise<PrestacaoServicoDBType | null>;
    };
    PrestacaoServico: {
        prestador: (parent: PrestacaoServicoDBType) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
        empresa: (parent: PrestacaoServicoDBType) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
    };
};
//# sourceMappingURL=prestacao.servico.resolver.d.ts.map