import type { PrestadorDBType } from "../utils/types.js";
export declare const PrestadorModel: {
    create(prestador: PrestadorDBType): Promise<PrestadorDBType | null>;
    getAll(): Promise<PrestadorDBType[] | null>;
    get(id: string): Promise<PrestadorDBType | null>;
    update(id: string, prestador: PrestadorDBType): Promise<PrestadorDBType | null>;
    delete(id: string): Promise<PrestadorDBType | null>;
    getPrecoHora(id: string): Promise<PrestadorDBType | null>;
};
//# sourceMappingURL=prestador.model.d.ts.map