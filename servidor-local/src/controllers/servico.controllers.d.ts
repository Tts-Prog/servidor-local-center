import type { Request, Response } from "express";
export declare const ServicoController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    get(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getAllServicoDetalhado(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=servico.controllers.d.ts.map