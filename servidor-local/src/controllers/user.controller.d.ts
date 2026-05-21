import type { Request, Response } from "express";
export declare const userController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=user.controller.d.ts.map