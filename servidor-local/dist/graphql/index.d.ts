import { typeDefs } from "./typedefs/typedefs.js";
export declare const resolvers: {
    Query: {
        getAllCategoria: () => Promise<import("../utils/types.js").CategoriaDBType[] | null>;
        getCategoriaById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").CategoriaDBType | null>;
        getAllEmpresa: () => Promise<import("../utils/types.js").EmpresaDBType[]>;
        getEmpresaById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").EmpresaDBType | null>;
        getAllOrcamento: () => Promise<import("../utils/types.js").OrcamentoDBType[]>;
        getOrcamentoById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").OrcamentoDBType | null>;
        getAllPrestacaoServico: () => Promise<import("../utils/types.js").PrestacaoServicoDBType[] | null>;
        getPrestacaoServicoById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PrestacaoServicoDBType | null>;
        getAllPrestadores: () => Promise<import("../utils/types.js").PrestadorDBType[] | null>;
        getPrestadorById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PrestadorDBType | null>;
        getAllProposta: () => Promise<import("../utils/types.js").PropostaDBType[] | null>;
        getPropostaById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PropostaDBType | null>;
        getAllServices: () => Promise<import("../utils/types.js").ServiceDBType[] | null>;
        getServiceById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").ServiceDBType | null>;
        getAllUsers: () => Promise<import("../utils/types.js").UserDBType[] | null>;
        getUserById: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").UserDBType | null>;
    };
    Mutation: {
        createCategoria: (_: any, args: {
            categoria: import("../utils/types.js").CategoriaDBType;
        }) => Promise<import("../utils/types.js").CategoriaDBType | null>;
        updateCategoria: (_: any, args: {
            id: string;
            categoria: import("../utils/types.js").CategoriaDBType;
        }) => Promise<import("../utils/types.js").CategoriaDBType | null>;
        deleteCategoria: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").CategoriaDBType | null>;
        createEmpresa: (_: any, args: {
            empresa: import("../utils/types.js").EmpresaDBType;
        }) => Promise<import("../utils/types.js").EmpresaDBType | null>;
        updateEmpresa: (_: any, args: {
            id: string;
            empresa: import("../utils/types.js").EmpresaDBType;
        }) => Promise<import("../utils/types.js").EmpresaDBType | null>;
        deleteEmpresa: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").EmpresaDBType | null>;
        createOrcamento: (_: any, args: {
            orcamento: import("../utils/types.js").OrcamentoDBType;
        }) => Promise<import("../utils/types.js").OrcamentoDBType | null>;
        updateOrcamento: (_: any, args: {
            id: string;
            orcamento: import("../utils/types.js").OrcamentoDBType;
        }) => Promise<import("../utils/types.js").OrcamentoDBType | null>;
        deleteOrcamento: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").OrcamentoDBType | null>;
        createPrestacaoServico: (_: any, args: {
            prestacaoServico: import("../utils/types.js").PrestacaoServicoDBType;
        }) => Promise<import("../utils/types.js").PrestacaoServicoDBType | null>;
        updatePrestacaoServico: (_: any, args: {
            id: string;
            prestacaoServico: import("../utils/types.js").PrestacaoServicoDBType;
        }) => Promise<import("../utils/types.js").PrestacaoServicoDBType | null>;
        deletePrestacaoServico: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PrestacaoServicoDBType | null>;
        createPrestador: (_: any, args: {
            prestador: import("../utils/types.js").PrestadorDBType;
        }) => Promise<import("../utils/types.js").PrestadorDBType | null>;
        updatePrestador: (_: any, args: {
            id: string;
            prestador: import("../utils/types.js").PrestadorDBType;
        }) => Promise<import("../utils/types.js").PrestadorDBType | null>;
        deletePrestador: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PrestadorDBType | null>;
        createProposta: (_: any, args: {
            proposta: import("../utils/types.js").PropostaDBType;
        }) => Promise<import("../utils/types.js").PropostaDBType | null>;
        updateProposta: (_: any, args: {
            id: string;
            proposta: import("../utils/types.js").PropostaDBType;
        }) => Promise<import("../utils/types.js").PropostaDBType | null>;
        deleteProposta: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").PropostaDBType | null>;
        createService: (_: any, args: {
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<import("../utils/types.js").ServiceDBType | null>;
        updateService: (_: any, args: {
            id: string;
            nome: string;
            descricao: string;
            categoria: string;
            enabled: boolean;
        }) => Promise<import("../utils/types.js").ServiceDBType | null>;
        deleteService: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").ServiceDBType | null>;
        createUser: (_: any, args: {
            user: import("../utils/types.js").userType;
        }) => Promise<import("../utils/types.js").UserDBType | null>;
        updateUser: (_: any, args: {
            id: string;
            user: import("../utils/types.js").userType;
        }) => Promise<import("../utils/types.js").UserDBType | null>;
        deleteUser: (_: any, args: {
            id: string;
        }) => Promise<import("../utils/types.js").UserDBType | null>;
    };
};
export { typeDefs };
//# sourceMappingURL=index.d.ts.map