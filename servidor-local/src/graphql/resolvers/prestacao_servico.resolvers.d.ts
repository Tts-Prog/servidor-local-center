import type { PrestacaoServicoDBType } from "../../utils/types.js";
export declare const userResolver: {
    Query: {
        getAllPrestacaoServico: () => Promise<import("mysql2").QueryResult>;
        getPrestacaoServicoById: (_: any, args: {
            id: string;
        }) => Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | import("mysql2").RowDataPacket | import("mysql2").RowDataPacket[] | null>;
        getByIdOrcamento: (_: any, args: {
            idOrcamento: string;
        }) => Promise<PrestacaoServicoDBType | null>;
    };
    Mutation: {
        createPrestacaoServico: (_: any, args: {
            PrestacaoServico: PrestacaoServicoDBType;
        }) => Promise<import("mysql2").QueryResult | null>;
        updatePrestacaoServico: (_: any, args: {
            id: string;
            PrestacaoServico: PrestacaoServicoDBType;
        }) => Promise<import("mysql2").QueryResult | null>;
        deletePrestacaoServico: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=prestacao_servico.resolvers.d.ts.map