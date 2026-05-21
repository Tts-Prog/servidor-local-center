import { budgetModel } from "../../models/orcamentos.model.js";
import { serviceProvModel } from "../../models/prestacao_servico.models.js";
import { UserModel } from "../../models/users.model.js";
export const BudgetResolver = {
    Query: {
        getAllBudgets: async () => {
            return await budgetModel.getAll();
        },
        getBudgetById: async (_, args) => {
            return await budgetModel.get(args.id);
        }
    },
    Mutation: {
        createBudget: async (_, args) => {
            return await budgetModel.create(args.newUser);
        },
        updateBudget: async (_, args) => {
            return await budgetModel.update(args.id, args.newUser);
        },
        deleteBudget: async (_, args) => {
            return await budgetModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    budget: {
        serviceProv: async (parent) => {
            return await serviceProvModel.get(parent.id);
        },
        user: async (parent) => {
            return await UserModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=budget.resolver.js.map