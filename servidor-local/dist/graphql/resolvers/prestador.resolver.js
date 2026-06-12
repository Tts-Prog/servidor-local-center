import { PrestadorModel } from "../../models/prestador.model.js";
export const PrestadorResolver = {
    Query: {
        getAllPrestadores: async () => {
            return await PrestadorModel.getAll();
        },
        getPrestadorById: async (_, args) => {
            return await PrestadorModel.get(args.id);
        }
    },
    Mutation: {
        createPrestador: async (_, args) => {
            return await PrestadorModel.create(args.prestador);
        },
        updatePrestador: async (_, args) => {
            return await PrestadorModel.update(args.id, args.prestador);
        },
        deletePrestador: async (_, args) => {
            return await PrestadorModel.delete(args.id);
        }
    }
};
//# sourceMappingURL=prestador.resolver.js.map