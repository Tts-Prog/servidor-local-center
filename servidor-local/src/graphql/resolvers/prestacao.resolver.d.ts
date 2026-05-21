import type { NovaprestacaoType } from "../../util/types.js";
export declare const prestacaoResolver: {
    Query: {
        getAllPrestacaoServico: () => Promise<any>;
        getPrestacaoServicoById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createPrestacao: (_: any, args: {
            prestacao: NovaprestacaoType;
        }) => Promise<any>;
        updatePrestacao: (_: any, args: {
            id: string;
            prestacao: NovaprestacaoType;
        }) => Promise<any>;
        deletePrestacao: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    prestacao: {
        prestador: (parent: NovaprestacaoType) => Promise<any>;
        utilizador: (parent: NovaprestacaoType) => Promise<any>;
        empresa: (parent: NovaprestacaoType) => Promise<any>;
        servico: (parent: NovaprestacaoType) => Promise<any>;
        orcamento: (parent: NovaprestacaoType) => Promise<any>;
    };
};
//# sourceMappingURL=prestacao.resolver.d.ts.map