<<<<<<< HEAD:servidor-local/src/graphql/revolvers/orcamento.resolver.ts
import { OrcamentoModel } from "../../models/oramento.model.js";
import { UserModel } from "../../models/user.model.js";
import type { OrcamentoDBType } from "../../utils/types.js";

export const orcamentoResolver = {
=======
import { OrcamentoModel } from "../../models/orcamento.model.js";
import { UsersModel } from "../../models/users.model.js";
import type { OrcamentoDBType } from "../../utils/types.js";

export const OrcamentoResolver = {
>>>>>>> dev:servidor-local/src/graphql/resolvers/orcamento.resolver.ts
    Query: {
        getAllOrcamento: async () => {
            return await OrcamentoModel.getAll();
        },
<<<<<<< HEAD:servidor-local/src/graphql/revolvers/orcamento.resolver.ts

        getOrcamentoById: async (_: any, args: { id: string }) => {
            return await OrcamentoModel.get(args.id)
        }
    },

=======
        getOrcamentoById: async (_: any, args: { id: string }) => {
            return await OrcamentoModel.get(args.id);
        }
    },
>>>>>>> dev:servidor-local/src/graphql/resolvers/orcamento.resolver.ts
    Mutation: {
        createOrcamento: async (_: any, args: { orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.create(args.orcamento);
        },
        updateOrcamento: async (_: any, args: { id: string, orcamento: OrcamentoDBType }) => {
            return await OrcamentoModel.update(args.id, args.orcamento);
        },
        deleteOrcamento: async (_: any, args: { id: string }) => {
<<<<<<< HEAD:servidor-local/src/graphql/revolvers/orcamento.resolver.ts
            return await OrcamentoModel.delete(args.id,);
        }

    },

    Orcamento: {
        id_user: async (parent: { id_user: string }) => {
            return await UserModel.get(parent.id_user)
        }
    }
}
=======
            return await OrcamentoModel.delete(args.id);
        }
    },
    Orcamento: {
        utilizador: async (parent: { id_utilizadores: string }) => {
            return await UsersModel.get(parent.id_utilizadores);
        }
    }
}
>>>>>>> dev:servidor-local/src/graphql/resolvers/orcamento.resolver.ts
