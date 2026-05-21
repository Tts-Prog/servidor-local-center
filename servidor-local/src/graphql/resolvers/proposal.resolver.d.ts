import type { ProposalType } from "../../utils/types.js";
export declare const ProposalResolver: {
    Query: {
        getAllProposals: () => Promise<any>;
        getProposalById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createProposal: (_: any, args: {
            newUser: ProposalType;
        }) => Promise<any>;
        updateProposal: (_: any, args: {
            id: string;
            newUser: ProposalType;
        }) => Promise<any>;
        deleteProposal: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    proposal: {
        serviceProv: (parent: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=proposal.resolver.d.ts.map