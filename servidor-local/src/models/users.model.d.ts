import type { UserDBType, userType, PasswordRequestType } from "../utils/types.js";
export declare const UsersModel: {
    create(user: userType): Promise<UserDBType | null>;
    getAll(): Promise<UserDBType[] | null>;
    get(id: string): Promise<UserDBType | null>;
    getByEmail(email: string): Promise<UserDBType | null>;
    update(id: string, updatedUser: userType): Promise<UserDBType | null>;
    updatePassword(id: string, newPassword: string): Promise<any>;
    resetPassword(id: string, passwordRequest: PasswordRequestType): Promise<any>;
    delete(id: string): Promise<any>;
};
//# sourceMappingURL=users.model.d.ts.map