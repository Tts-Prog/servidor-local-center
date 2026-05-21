export declare function getPropostas(): Promise<import("mysql2").QueryResult>;
export declare function getPropostasById(id: string): Promise<import("mysql2").OkPacket | import("mysql2").ResultSetHeader | import("mysql2").RowDataPacket | import("mysql2").RowDataPacket[] | null>;
export declare function createPropostas(id: string, id_prestacao_servico: string, preco_hora: string, horas_estimadas: string, estado: string, enabled: boolean): Promise<import("mysql2").QueryResult | null>;
//# sourceMappingURL=proposta.d.ts.map