import type { EmpresaDBType } from "../utils/types.js";
export declare const EmpresaModel: {
    create(empresa: EmpresaDBType): Promise<EmpresaDBType | null>;
    getAll(): Promise<EmpresaDBType[]>;
    get(id: string): Promise<EmpresaDBType | null>;
    update(id: string, empresa: EmpresaDBType): Promise<EmpresaDBType | null>;
    delete(id: string): Promise<EmpresaDBType | null>;
};
//# sourceMappingURL=empresa.model.d.ts.map