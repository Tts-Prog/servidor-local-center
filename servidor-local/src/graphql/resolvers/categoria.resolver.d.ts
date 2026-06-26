import type { CategoriaDBType } from "../../utils/types.js";
export declare const CategoriaResolver: {
    Query: {
        getAllCategoria: () => Promise<CategoriaDBType[] | null>;
        getCategoriaById: (_: any, args: {
            id: string;
        }) => Promise<CategoriaDBType | null>;
    };
    Mutation: {
        createCategoria: (_: any, args: {
            categoria: CategoriaDBType;
        }) => Promise<CategoriaDBType | null>;
        updateCategoria: (_: any, args: {
            id: string;
            categoria: CategoriaDBType;
        }) => Promise<CategoriaDBType | null>;
        deleteCategoria: (_: any, args: {
            id: string;
        }) => Promise<CategoriaDBType | null>;
    };
};
//# sourceMappingURL=categoria.resolver.d.ts.map