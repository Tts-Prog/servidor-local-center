import type { utilizadorType } from "./util/types.js";
export declare function getUser(): Promise<import("mysql2").QueryResult>;
export declare function getUserById(id: string): Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | import("mysql2").RowDataPacket | import("mysql2").RowDataPacket[] | null>;
export declare function novoUtilizador(utilizador: utilizadorType): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | null>;
export declare function updateuser(id: string, updateduser: utilizadorType): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | null>;
export declare function deleteuser(id: string): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | null>;
//# sourceMappingURL=user.d.ts.map