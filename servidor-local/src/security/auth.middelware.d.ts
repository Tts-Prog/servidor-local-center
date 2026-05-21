import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            };
        }
    }
}
export default function authMiddelware(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function autorized(role: string[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare function isOwner(model: any, field: string): (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middelware.d.ts.map