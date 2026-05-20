<<<<<<< HEAD

import {OrcamentoModel} from "../../models/orcamento.model.js";
import { UsersModel } from "../../models/users.model.js";
import type { OrcamentoDBType } from "../../utils/types.js";

export const orcamentoResolver = {
    Query: {
        getAllOrcamento: async () => {
            return await OrcamentoModel.getAll();
=======
import { orcamentoModel } from "../../models/orcamento.models.js"
import type { NovoOrcamentoType } from "../../util/types.js"


export const orcamentoResolver = {
    Query: {
        getAllOrcamentos: async () => {
            return await orcamentoModel.getAllOrcamentos()
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        },

        getOrcamentoById: async (_: any, args: { id: string }) => {
<<<<<<< HEAD
            return await OrcamentoModel.get(args.id);
        }
    },
    Mutation: {
        createOrcamento: async (_: any, args: { orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.create(args.orcamento);
        },
        updateOrcamento: async (_: any, args: { id: string, orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.update(args.id, args.orcamento);
        },
        deleteOrcamento: async (_: any, args: { id: string }) => {
            return await OrcamentoModel.delete(args.id);
        }
    },

    // Relacionamento entre Orcamento e Utilizador
    Orcamento: {
        utilizador: async (parent: { id_utilizadores: string }) => {
            return await UsersModel.get(parent.id_utilizadores);
=======
            return await orcamentoModel.getOrcamento(args.id)
        }
    },
    Mutation: {
        createOrcamento: async (_: any, args: { orcamento: NovoOrcamentoType }) => {
            return await orcamentoModel.createOrcamento(args.orcamento)
        },
        updateOrcamento: async (_: any, args: { id: string, orcamento: NovoOrcamentoType }) => {
            return await orcamentoModel.updateOrcamento(args.id, args.orcamento)
        },
        deleteOrcamento: async (_: any, args: { id: string }) => {
            return await orcamentoModel.deleteOrcamento(args.id)
        }
    },
    orcamento: {
        utilizador: async (parent: NovoOrcamentoType) => {
            return await orcamentoModel.getOrcamento(parent.id as any)
        },
        prestacao: async (parent: NovoOrcamentoType) => {
            return await orcamentoModel.getOrcamento(parent.id as any)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        }
    }
}
