import type { Request, Response } from "express";
export declare const PrestacaoServicoController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    get(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllPrestacaoServicoDetalhada(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllPrestacaoServicoByCategoria(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=prestacao_servico.controller.d.ts.map