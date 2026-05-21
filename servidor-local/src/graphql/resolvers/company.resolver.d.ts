import type { CompanyType } from "../../utils/types.js";
export declare const CompanyResolver: {
    Query: {
        getAllCompanies: () => Promise<any>;
        getCompanyById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createCompany: (_: any, args: {
            newUser: CompanyType;
        }) => Promise<any>;
        updateCompany: (_: any, args: {
            id: string;
            newUser: CompanyType;
        }) => Promise<any>;
        deleteCompany: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    company: {
        user: (parent: {
            id: string;
        }) => Promise<any>;
    };
};
//# sourceMappingURL=company.resolver.d.ts.map