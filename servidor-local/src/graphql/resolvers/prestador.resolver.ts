<<<<<<< HEAD

import {PrestadorModel} from "../../models/prestador.model.js";
import type { PrestadorDBType } from "../../utils/types.js";
=======
import { prestadorModel } from "../../models/prestador.models.js"
import type { NovoprestadorType } from "../../util/types.js"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

// ********** resolvers para prestador **********
export const prestadorResolver = {
    Query: {
        getAllPrestadores: async () => {
            return await prestadorModel.getAllPrestadores()
        },

        getPrestadorById: async (_: any, args: { id: string }) => {
<<<<<<< HEAD
            return await PrestadorModel.get(args.id);
        }
    },
    Mutation: {
        createPrestador: async (_: any, args: { prestador: PrestadorDBType }) => {
            return await PrestadorModel.create(args.prestador);
        },
        updatePrestador: async (_: any, args: { id: string, prestador: PrestadorDBType }) => {
            return await PrestadorModel.update(args.id, args.prestador);
        },
        deletePrestador: async (_: any, args: { id: string }) => {
            return await PrestadorModel.delete(args.id);
=======
            return await prestadorModel.getPrestadorById(args.id)
        }
    },
    Mutation: {
        createPrestador: async (_: any, args: { prestador: NovoprestadorType }) => {
            return await prestadorModel.novoPrestador(args.prestador)
        },
        updatePrestador: async (_: any, args: { id: string, prestador: NovoprestadorType }) => {
            return await prestadorModel.updatePrestador(args.id, args.prestador)
        },
        deletePrestador: async (_: any, args: { id: string }) => {
            return await prestadorModel.deletePrestador(args.id)
        }
    },
    prestador: {
        empresa: async (parent: NovoprestadorType) => {
            return await prestadorModel.getPrestadorById(parent.id as any)
        },
        prestacoes: async (parent: NovoprestadorType) => {
            return await prestadorModel.getPrestadorById(parent.id as any)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        }
    }
}
