import type { UserDBType, userType, PasswordRequestType } from "../utils/types.js";
export declare const UsersModel: {
    create(user: userType): Promise<UserDBType | null>;
    getAll(): Promise<UserDBType[] | null>;
    get(id: string): Promise<UserDBType | null>;
    getByEmail(email: string): Promise<UserDBType | null>;
    update(id: string, updatedUser: userType): Promise<UserDBType | null>;
    updatePassword(id: string, newPassword: string): Promise<UserDBType | null>;
    resetPassword(id: string, passwordRequest: PasswordRequestType): Promise<UserDBType | null>;
    delete(id: string): Promise<UserDBType | null>;
};
//# sourceMappingURL=users.model.d.ts.map