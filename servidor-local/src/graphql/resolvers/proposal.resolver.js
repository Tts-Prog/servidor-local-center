import { serviceProvModel } from "../../models/prestacao_servico.models.js";
import { proposalModel } from "../../models/proposta.models.js";
export const ProposalResolver = {
    Query: {
        getAllProposals: async () => {
            return await proposalModel.getAll();
        },
        getProposalById: async (_, args) => {
            return await proposalModel.get(args.id);
        }
    },
    Mutation: {
        createProposal: async (_, args) => {
            return await proposalModel.create(args.newUser);
        },
        updateProposal: async (_, args) => {
            return await proposalModel.update(args.id, args.newUser);
        },
        deleteProposal: async (_, args) => {
            return await proposalModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    proposal: {
        serviceProv: async (parent) => {
            return await serviceProvModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=proposal.resolver.js.map