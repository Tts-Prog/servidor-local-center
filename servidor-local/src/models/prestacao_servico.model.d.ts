import type { RowDataPacket } from "mysql2";
import type { PrestacaoServicoDBType, PrestacaoServicoDetalhadoType } from "../utils/types.js";
export declare const PrestacaoServicoModel: {
    create(prestacaoServico: PrestacaoServicoDBType): Promise<import("mysql2").QueryResult | null>;
    getAll(): Promise<import("mysql2").QueryResult>;
    get(id: string): Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | RowDataPacket | RowDataPacket[] | null>;
    update(id: string, prestacaoServico: PrestacaoServicoDBType): Promise<import("mysql2").QueryResult | null>;
    delete(id: string): Promise<any>;
    getByIdOrcamento(idOrcamento: string): Promise<PrestacaoServicoDBType | null>;
    getAllPrestacaoServicoDetalhada(limit: number, offset: number): Promise<PrestacaoServicoDetalhadoType[] | null>;
    getAllPrestacaoServicoByCategoria(limit: number, offset: number, categoria: string): Promise<PrestacaoServicoDetalhadoType[] | null>;
};
//# sourceMappingURL=prestacao_servico.model.d.ts.map