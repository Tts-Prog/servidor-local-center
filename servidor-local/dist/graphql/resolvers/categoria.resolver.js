import { CategoriaModel } from "../../models/categoria.model.js";
export const CategoriaResolver = {
    Query: {
        getAllCategoria: async () => {
            return await CategoriaModel.getAll();
        },
        getCategoriaById: async (_, args) => {
            return await CategoriaModel.get(args.id);
        }
    },
    Mutation: {
        createCategoria: async (_, args) => {
            return await CategoriaModel.create(args.categoria);
        },
        updateCategoria: async (_, args) => {
            return await CategoriaModel.update(args.id, args.categoria);
        },
        deleteCategoria: async (_, args) => {
            return await CategoriaModel.delete(args.id);
        }
    }
};
//# sourceMappingURL=categoria.resolver.js.map