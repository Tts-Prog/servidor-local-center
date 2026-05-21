import { CompanyModel } from "../../models/empresa.model.js";
import { UserModel } from "../../models/users.model.js";
export const CompanyResolver = {
    Query: {
        getAllCompanies: async () => {
            return await CompanyModel.getAll();
        },
        getCompanyById: async (_, args) => {
            return await CompanyModel.get(args.id);
        }
    },
    Mutation: {
        createCompany: async (_, args) => {
            return await CompanyModel.create(args.newUser);
        },
        updateCompany: async (_, args) => {
            return await CompanyModel.update(args.id, args.newUser);
        },
        deleteCompany: async (_, args) => {
            return await CompanyModel.delete(args.id);
        }
    },
    // Relacionamentos de tabelas
    company: {
        user: async (parent) => {
            return await UserModel.get(parent.id);
        }
    }
};
//# sourceMappingURL=company.resolver.js.map