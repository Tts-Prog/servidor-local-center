import { budgetModel } from "../../models/orcamentos.model.js";
import { serviceProvModel } from "../../models/prestacao_servico.models.js";
import { ProviderModel } from "../../models/prestador.model.js";
import { proposalModel } from "../../models/proposta.models.js";
import { ServiceModel } from "../../models/servico.model.js";
export const ServiceProvResolver = {
    Query: {
        getAllServiceProv: async () => {
            return await serviceProvModel.getAll();
        },
        getServiceProvById: async (_, args) => {
            return await serviceProvModel.get(args.id);
        }
    },
    Mutation: {
        createServiceProv: async (_, args) => {
            return await serviceProvModel.create(args.serviceProv);
        },
        updateServiceProv: async (_, args) => {
            return await serviceProvModel.update(args.id, args.newServiceProv);
        },
        deleteServiceProv: async (_, args) => {
            return await serviceProvModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    serviceProv: {
        servico: async (parent) => {
            return await ServiceModel.get(parent.id);
        },
        budget: async (parent) => {
            return await budgetModel.get(parent.id);
        },
        prestador: async (parent) => {
            return await ProviderModel.get(parent.id);
        },
        proposta: async (parent) => {
            return await proposalModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=service-prov.resolver.js.map