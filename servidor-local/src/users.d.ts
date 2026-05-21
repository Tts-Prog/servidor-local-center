import type { userType } from "./utils/types.js";
export declare function getUsers(): Promise<import("mysql2").QueryResult>;
export declare function getUserById(id: string): Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | import("mysql2").RowDataPacket | import("mysql2").RowDataPacket[] | null>;
export declare function createUser(id: string, nome: string, numero_identidade: string, data_nascimento: string, email: string, password: string, telefone: string, pais: string, localidade: string, enebled: boolean, created_at: string, update_at: string): Promise<import("mysql2").QueryResult | null>;
export declare function updateUser(id: string, updatedUser: userType): Promise<import("mysql2").QueryResult | null>;
export declare function deleteUser(id: string): Promise<any>;
//# sourceMappingURL=users.d.ts.map