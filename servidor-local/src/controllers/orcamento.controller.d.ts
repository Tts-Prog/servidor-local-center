import type { Request, Response } from "express";
export declare const OrcamentoController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    get(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    calculateBudget(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=orcamento.controller.d.ts.map