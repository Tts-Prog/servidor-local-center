import { type PrestacaoServicoDetalhadoType, type PrestacaoServicoDBType, type PrestacaoServicoByCategoriaType } from "../utils/types.js";
export declare const PrestacaoServicoModel: {
    create(prestacaoServico: PrestacaoServicoDBType): Promise<PrestacaoServicoDBType | null>;
    getAll(): Promise<PrestacaoServicoDBType[] | null>;
    get(id: string): Promise<PrestacaoServicoDBType | null>;
    update(id: string, prestacaoServico: PrestacaoServicoDBType): Promise<PrestacaoServicoDBType | null>;
    delete(id: string): Promise<PrestacaoServicoDBType | null>;
    getByIdOrcamento(idOrcamento: string): Promise<PrestacaoServicoDBType | null>;
    getAllPrestacaoServicoDetalhado(limit: number, offset: number): Promise<PrestacaoServicoDetalhadoType[] | null>;
    getAllPrestacaoServicoByCategoriaDetalhado(idCategoria: string, limit: number, offset: number): Promise<PrestacaoServicoByCategoriaType[] | null>;
};
//# sourceMappingURL=prestacao-servico.model.d.ts.map