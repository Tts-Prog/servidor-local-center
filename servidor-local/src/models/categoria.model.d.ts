import type { CategoriaDBType } from "../utils/types.js";
export declare const CategoriaModel: {
    create(categoria: CategoriaDBType): Promise<CategoriaDBType | null>;
    getAll(): Promise<CategoriaDBType[] | null>;
    get(id: string): Promise<CategoriaDBType | null>;
    update(id: string, categoria: CategoriaDBType): Promise<CategoriaDBType | null>;
    delete(id: string): Promise<CategoriaDBType | null>;
};
//# sourceMappingURL=categoria.model.d.ts.map