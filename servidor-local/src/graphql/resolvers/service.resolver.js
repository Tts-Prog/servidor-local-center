import { CategoryModel } from "../../models/categoria.model.js";
import { serviceProvModel } from "../../models/prestacao_servico.models.js";
import { ServiceModel } from "../../models/servico.model.js";
export const ServiceResolver = {
    Query: {
        getAllServices: async () => {
            return await ServiceModel.getAll();
        },
        getServiceById: async (_, args) => {
            return await ServiceModel.get(args.id);
        }
    },
    Mutation: {
        createService: async (_, args) => {
            const newService = {
                id: "",
                nome: args.nome,
                descricao: args.descricao,
                categoria: args.categoria,
                enabled: args.enabled,
                updated_et: "",
                created_at: ""
            };
            return await ServiceModel.create(newService);
        },
        updateService: async (_, args) => {
            const newService = {
                id: args.id,
                nome: args.nome,
                descricao: args.descricao,
                categoria: args.categoria,
                enabled: args.enabled,
                updated_et: "",
                created_at: ""
            };
            return await ServiceModel.update(args.id, newService);
        },
        deleteService: async (_, args) => {
            return await ServiceModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    service: {
        categoria: async (parent) => {
            return await CategoryModel.get(parent.id);
        }
    },
    serviceProv: async (parent) => {
        return await serviceProvModel.get(parent.id);
    }
};
//# sourceMappingURL=service.resolver.js.map