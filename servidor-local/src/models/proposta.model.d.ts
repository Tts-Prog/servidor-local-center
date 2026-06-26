import type { PropostaDBType } from "../utils/types.js";
export declare const PropostaModel: {
    create(proposta: PropostaDBType): Promise<PropostaDBType | null>;
    getAll(): Promise<PropostaDBType[] | null>;
    get(id: string): Promise<PropostaDBType | null>;
    update(id: string, proposta: PropostaDBType): Promise<PropostaDBType | null>;
    aceitarProposta(id: string): Promise<PropostaDBType | null>;
    delete(id: string): Promise<PropostaDBType | null>;
    getByPrestacaoServico(idPrestacaoServico: string): Promise<PropostaDBType[] | null>;
    acceptProposal(id: string): Promise<PropostaDBType | null>;
};
//# sourceMappingURL=proposta.model.d.ts.map