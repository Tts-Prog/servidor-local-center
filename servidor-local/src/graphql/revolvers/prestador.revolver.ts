import { FreelancerModel } from "../../models/prestador.model.js";
import { UserModel } from "../../models/user.model.js";
import type { PrestadorTypeDB } from "../../utils/types.js";

export const prestadorResolver = {
    Query: {
        getAllPrestador: async () => {
            return await FreelancerModel.getAll();
        },
        getPrestadorById: async (_: any, args: { id: string }) => {
            return await FreelancerModel.get(args.id);
        }
    },

    Mutation: {
        createPrestador: async (_: any, args: { prestador: PrestadorTypeDB }) => {
            return await FreelancerModel.create(args.prestador);
        },
        updatePrestador: async (_: any, args: { id: string, prestador: PrestadorTypeDB }) => {
            return await FreelancerModel.update(args.id, args.prestador);
        },
        deletePrestador: async (_: any, args: { id: string }) => {
            return await FreelancerModel.delete(args.id);
        }
    },

    Prestador: {
        id_user: async (parent: { id: string }) => {
            return await UserModel.get(parent.id);
        }
    }
};
