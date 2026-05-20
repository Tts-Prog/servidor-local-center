<<<<<<< HEAD

import {CategoriaModel} from "../../models/categoria.model.js";
import type { CategoriaDBType} from "../../utils/types.js";

export const categoriaResolver = {
    Query: {
        getAllCategoria: async () => {
            return await CategoriaModel.getAll();
        },

        getCategoriaById: async (_: any, args: { id: string }) => {
            return await CategoriaModel.get(args.id);
        }
    },
    Mutation: {
        createCategoria: async (_: any, args: { categoria: CategoriaDBType }) => {
            return await CategoriaModel.create(args.categoria);
        },
        updateCategoria: async (_: any, args: { id: string, categoria: CategoriaDBType }) => {
            return await CategoriaModel.update(args.id, args.categoria);
        },
        deleteCategoria: async (_: any, args: { id: string }) => {
            return await CategoriaModel.delete(args.id);
=======
import { categoriaModel } from "../../models/categoria.models.js"
import type { NovaCategoriaType } from "../../util/types.js"


export const categoriaResolver = {
    Query: {
        getAllCategorias: async () => {
            return await categoriaModel.getAllCategoria()
        },
        getCategoriaById: async (_: any, args: { id: string }) => {
            return await categoriaModel.getCategoriaById(args.id)
        }
    },
    Mutation: {
        createCategoria: async (_: any, args: { categoria: NovaCategoriaType }) => {
            return await categoriaModel.createCategoria(args.categoria)
        },
        updateCategoria: async (_: any, args: { id: string, categoria: NovaCategoriaType }) => {
            return await categoriaModel.updateCategoria(args.id, args.categoria)
        },
        deleteCategoria: async (_: any, args: { id: string }) => {
            return await categoriaModel.deleteCategoria(args.id)
        }
    },
    categoria: {
        servicos: async (parent: NovaCategoriaType) => {
            return await categoriaModel.getCategoriaById(parent.id as any)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        }
    }
}
