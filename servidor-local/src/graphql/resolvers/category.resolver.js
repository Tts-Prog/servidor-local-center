import { CategoryModel } from "../../models/categoria.model.js";
import { ServiceModel } from "../../models/servico.model.js";
export const CategoryResolver = {
    Query: {
        getAllCategories: async () => {
            return await CategoryModel.getAll();
        },
        getCategoryById: async (_, args) => {
            return await CategoryModel.get(args.id);
        }
    },
    Mutation: {
        createCategory: async (_, args) => {
            return await CategoryModel.create(args.newUser);
        },
        updateCategory: async (_, args) => {
            return await CategoryModel.update(args.id, args.newUser);
        },
        deleteCategory: async (_, args) => {
            return await CategoryModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    category: {
        service: async (parent) => {
            return await ServiceModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=category.resolver.js.map