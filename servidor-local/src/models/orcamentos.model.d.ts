import type { BudgetType } from "../utils/types.js";
export declare const budgetModel: {
    create(newBudget: BudgetType): Promise<BudgetType | null>;
    getAll(): Promise<BudgetType[] | null>;
    get(id: string): Promise<BudgetType | null>;
    update(id: string, newBudget: BudgetType): Promise<BudgetType | null>;
    updateBudget(id: string, total: number): Promise<any>;
    delete(id: string): Promise<BudgetType[] | null>;
};
//# sourceMappingURL=orcamentos.model.d.ts.map