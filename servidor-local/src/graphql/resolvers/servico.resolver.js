import { ServiceModel } from "../../models/servico.model.js";
import { CategoriaModel } from "../../models/categoria.model.js";
export const ServicoResolver = {
    Query: {
        getAllService: async () => {
            return await ServiceModel.getAll();
        },
        getServiceById: async (_, args) => {
            return await ServiceModel.get(args.id);
        }
    },
    Mutation: {
        createService: async (_, args) => {
            return await ServiceModel.create(args.service);
        },
        updateService: async (_, args) => {
            return await ServiceModel.update(args.id, args.service);
        },
        deleteService: async (_, args) => {
            return await ServiceModel.delete(args.id);
        }
    },
    Servico: {
        categoria: async (parent) => {
            return await CategoriaModel.get(parent.categoria);
        }
    }
};
//# sourceMappingURL=servico.resolver.js.map