<<<<<<< HEAD

import {EmpresaModel} from "../../models/empresa.model.js";
import { UsersModel } from "../../models/users.model.js";
import type { EmpresaDBType } from "../../utils/types.js";

export const empresaResolver = {
    Query: {
        getAllEmpresa: async () => {
            return await EmpresaModel.getAll();
=======
import { empresaModel } from "../../models/empresa.models.js"
import { prestacaoServicoModel } from "../../models/prestacao_servico.models.js"
import type { NovaEmpresaType } from "../../util/types.js"


export const empresaResolver = {
    Query: {
        getAllEmpresas: async () => {
            return await empresaModel.getAllEmpresas()
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        },

        getEmpresaById: async (_: any, args: { id: string }) => {
<<<<<<< HEAD
            return await EmpresaModel.get(args.id);
        }
    },
    Mutation: {
        createEmpresa: async (_: any, args: { empresa: EmpresaDBType }) => {
            return await EmpresaModel.create(args.empresa);
        },
        updateEmpresa: async (_: any, args: { id: string, empresa: EmpresaDBType }) => {
            return await EmpresaModel.update(args.id, args.empresa);
        },
        deleteEmpresa: async (_: any, args: { id: string }) => {
            return await EmpresaModel.delete(args.id);
        }
    },

    // Relacionamento entre Empresa e Utilizador

        Empresa: {
            utilizadores: async (parent: { id_utilizadores: string }) => {
                        return await UsersModel.get(parent.id_utilizadores);
                    }
}
}
=======
            return await empresaModel.getEmpresaById(args.id)
        }
    },
    Mutation: {
        createEmpresa: async (_: any, args: { empresa: NovaEmpresaType }) => {
            return await empresaModel.createEmpresa(args.empresa)
        },
        updateEmpresa: async (_: any, args: { id: string, empresa: NovaEmpresaType }) => {
            return await empresaModel.updateEmpresa(args.id, args.empresa)
        },
        deleteEmpresa: async (_: any, args: { id: string }) => {
            return await empresaModel.deleteEmpresa(args.id)
        }
    },
    empresa: {
        utilizador: async (parent: NovaEmpresaType) => {
            return await empresaModel.getEmpresaById(parent.id as any);
        },
        prestador: async (parent: NovaEmpresaType) => {
            return await empresaModel.getEmpresaById(parent.id as any);
        }
    }
}  
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
