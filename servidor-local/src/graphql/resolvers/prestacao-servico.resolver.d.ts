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
        prestador: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").PrestadorDBType | null>;
        utilizador: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").UserDBType | null>;
        service: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
        orcamento: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").OrcamentoDBType | null>;
        empresa: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").EmpresaDBType | null>;
    };
};
//# sourceMappingURL=prestacao-servico.resolver.d.ts.map