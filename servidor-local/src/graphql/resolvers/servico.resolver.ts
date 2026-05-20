<<<<<<< HEAD

import { ServiceModel } from "../../models/servico.model.js";
import type { ServiceDBType, ServicoDBType } from "../../utils/types.js";
import { CategoriaModel } from "../../models/categoria.model.js";

export const serviceResolver = {
    Query: {
        getAllService: async () => {
            return await ServiceModel.getAll();
        },

        getServiceById: async (_: any, args: { id: string }) => {
            return await ServiceModel.get(args.id);
        }
    },
    Mutation: {
        createService: async (_: any, args: { nome: string, descricao: string, categoria: string, enabled_at: boolean }) => {
            const service: ServiceDBType = {
                id: "",
                nome: args.nome,
                descricao: args.descricao,
                categoria: args.categoria,
                enabled_at: args.enabled_at,
                created_at: "",
                updated_at: ""
            }
            return await ServiceModel.create(service);
        },

        updateService: async (_: any, args: { id: string, service: ServiceDBType }) => {
            return await ServiceModel.update(args.id, args.service);
        },

        deleteService: async (_: any, args: { id: string }) => {
            return await ServiceModel.delete(args.id);
        },
    },

    // Relacionamento entre Service e Categoria
    Servico: {
        categoria: async (parent: { id: string }) => {
            return await CategoriaModel.get(parent.id);
        }
    }
}
=======
import { categoriaModel } from "../../models/categoria.models.js"
import { servicoModel } from "../../models/servico.models.js"
import type { NovoservicoType } from "../../util/types.js"


export const servicoResolver = {
    Query: {
        getAllServicos: async () => {
            return await servicoModel.getAll()
        },
        getServicoById: async (_: any, args: { id: string }) => {
            return await servicoModel.get(args.id)
        }
    },
    Mutation: {
        createServico: async (_: any, args: any) => {
            return await servicoModel.create(args)
        },
        updateServico: async (_: any, args: any) => {
            const { id, ...data } = args
            return await servicoModel.update(id, data)
        },
        deleteServico: async (_: any, args: any) => {
            return await servicoModel.deleteService(args.id)
        }
    },
    servico: {
        categoria: async (parent: NovoservicoType) => {
            return await categoriaModel.getCategoriaById(parent.id as any)
        },
        prestacoes: async (parent: NovoservicoType) => {
            return await servicoModel.get(parent.id as any)
        }
    }
}
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
