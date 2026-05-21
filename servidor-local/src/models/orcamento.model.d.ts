import type { OrcamentoDBType } from "../utils/types.js";
export declare const OrcamentoModel: {
    create(orcamento: OrcamentoDBType): Promise<OrcamentoDBType | null>;
    getAll(): Promise<OrcamentoDBType[] | null>;
    get(id: string): Promise<OrcamentoDBType | null>;
    update(id: string, orcamento: Partial<OrcamentoDBType>): Promise<OrcamentoDBType | null>;
    delete(id: string): Promise<OrcamentoDBType | null>;
    updateBudget(id: string, total: number): Promise<OrcamentoDBType | null>;
};
//# sourceMappingURL=orcamento.model.d.ts.map