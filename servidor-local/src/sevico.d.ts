import { type ResponseType, type Servicetype, type ServicoType } from "./utils/types.js";
export declare let catalogoServicos: ServicoType[];
export declare function adicionarServico(novoServico: ServicoType): ResponseType;
export declare function listarServicos(): ServicoType[];
export declare function apagarServico(nome: string): boolean;
export declare function obterServico(nome: string): ServicoType | null;
export declare function getService(): Promise<import("mysql2").QueryResult | null>;
export declare function getServiceById(id: string): Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | import("mysql2").RowDataPacket | import("mysql2").RowDataPacket[] | null>;
export declare function insertService(service: Servicetype): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | null>;
export declare function updateService(id: string, service: Servicetype): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | null>;
export declare function DeleteService(id: string): Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | undefined>;
//# sourceMappingURL=sevico.d.ts.map