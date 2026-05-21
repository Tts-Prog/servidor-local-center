import type { BudgetType } from "../../utils/types.js";
export declare const BudgetResolver: {
    Query: {
        getAllBudgets: () => Promise<BudgetType[] | null>;
        getBudgetById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createBudget: (_: any, args: {
            newUser: BudgetType;
        }) => Promise<any>;
        updateBudget: (_: any, args: {
            id: string;
            newUser: BudgetType;
        }) => Promise<any>;
        deleteBudget: (_: any, args: {
            id: string;
        }) => Promise<BudgetType[] | null>;
    };
    budget: {
        serviceProv: (parent: {
            id: string;
        }) => Promise<any>;
        user: (parent: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=budget.resolver.d.ts.map