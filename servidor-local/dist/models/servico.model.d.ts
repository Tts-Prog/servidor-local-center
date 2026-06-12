import type { ServiceDBType, ServicoDetalhadoType } from "../utils/types.js";
export declare const ServiceModel: {
    create(newService: ServiceDBType): Promise<ServiceDBType | null>;
    getAll(): Promise<ServiceDBType[] | null>;
    get(id: string): Promise<ServiceDBType | null>;
    update(id: string, servicoAtualizado: ServiceDBType): Promise<ServiceDBType | null>;
    delete(id: string): Promise<ServiceDBType | null>;
    getAllServicoDetalhado(limit: number, offset: number): Promise<ServicoDetalhadoType[] | null>;
};
//# sourceMappingURL=servico.model.d.ts.map