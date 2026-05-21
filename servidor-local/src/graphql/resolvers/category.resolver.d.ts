import type { CategoryType } from "../../utils/types.js";
export declare const CategoryResolver: {
    Query: {
        getAllCategories: () => Promise<any>;
        getCategoryById: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    Mutation: {
        createCategory: (_: any, args: {
            newUser: CategoryType;
        }) => Promise<any>;
        updateCategory: (_: any, args: {
            id: string;
            newUser: CategoryType;
        }) => Promise<any>;
        deleteCategory: (_: any, args: {
            id: string;
        }) => Promise<any>;
    };
    category: {
        service: (parent: {
            id: string;
        }) => Promise<import("../../utils/types.js").ServiceDBType | null>;
    };
};
//# sourceMappingURL=category.resolver.d.ts.map