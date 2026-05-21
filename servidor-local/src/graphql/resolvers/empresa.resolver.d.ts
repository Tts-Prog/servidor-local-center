import type { EmpresaDBType } from "../../utils/types.js";
export declare const EmpresaResolver: {
    Query: {
        getAllEmpresa: () => Promise<EmpresaDBType[] | null>;
        getEmpresaById: (_: any, args: {
            id: string;
        }) => Promise<EmpresaDBType | null>;
    };
    Mutation: {
        createEmpresa: (_: any, args: {
            empresa: EmpresaDBType;
        }) => Promise<EmpresaDBType | null>;
        updateEmpresa: (_: any, args: {
            id: string;
            empresa: EmpresaDBType;
        }) => Promise<EmpresaDBType | null>;
        deleteEmpresa: (_: any, args: {
            id: string;
        }) => Promise<EmpresaDBType | null>;
    };
    Empresa: {
        utilizadores: (parent: {
            id_utilizador: string;
        }) => Promise<import("../../utils/types.js").UserDBType | null>;
    };
};
//# sourceMappingURL=empresa.resolver.d.ts.map