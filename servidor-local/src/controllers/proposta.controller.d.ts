import type { Request, Response } from "express";
export declare const PropostaController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    get(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    aceitar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getByPrestacaoServico(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=proposta.controller.d.ts.map