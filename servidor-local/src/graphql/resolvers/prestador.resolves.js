import { PrestadorModel } from "../../models/prestador.model.js";
export const prestadorResolver = {
    Query: {
        getAllPrestador: async () => {
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
//# sourceMappingURL=prestador.resolves.js.map