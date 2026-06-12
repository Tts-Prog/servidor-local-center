import type { PrestadorDBType } from "../../utils/types.js";
export declare const PrestadorResolver: {
    Query: {
        getAllPrestadores: () => Promise<PrestadorDBType[] | null>;
        getPrestadorById: (_: any, args: {
            id: string;
        }) => Promise<PrestadorDBType | null>;
    };
    Mutation: {
        createPrestador: (_: any, args: {
            prestador: PrestadorDBType;
        }) => Promise<PrestadorDBType | null>;
        updatePrestador: (_: any, args: {
            id: string;
            prestador: PrestadorDBType;
        }) => Promise<PrestadorDBType | null>;
        deletePrestador: (_: any, args: {
            id: string;
        }) => Promise<PrestadorDBType | null>;
    };
};
//# sourceMappingURL=prestador.resolver.d.ts.map