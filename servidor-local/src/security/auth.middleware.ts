<<<<<<< HEAD
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
=======
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
>>>>>>> dev

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                email: string,
                role: string
            }
        }
    }
}

<<<<<<< HEAD
export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    // Bearer nslkfnlkasjojwenfnknlanfnifowesdnlsndfndngiwoe

    if (!authHeader) {
        return res.status(401).json({ message: "User nao authenticado" })
    }

    const token = authHeader.split(" ")[1]
    // ["Bearer", "nslkfnlkasjojwenfnknlanfnifowesdnlsndfndngiwoe"]
=======
export default function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    // "Bearer", "qwertyuioplkjhgfdsazxcvbnm"

    if (!authHeader) {
        return res.status(401).json({
            status: "error",
            message: "Utilizador nao autenticado",
        });
    }
    const token = authHeader.split(" ")[1];
    // ["Bearer", "qwertyuioplkjhgfdsazxcvbnm"]
>>>>>>> dev

    try {
        const decodedToken = jwt.verify(token as string, process.env.JWT_SECRET as string) as { id: string; email: string; role: string };

        next()

        req.user = {
<<<<<<< HEAD
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
        }

    } catch (error) {
        return res.status(401).json({ message: "Token invalido" })
=======
            id: decodedToken?.id,
            email: decodedToken?.email,
            role: decodedToken?.role,
        }

        next();
    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: "Token inválido",
        });
>>>>>>> dev
    }
}

// RBAC - Role Based Access Control
export function authorize(roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
<<<<<<< HEAD
            return res.status(401).json({ message: "User nao authenticado" })
=======
            return res.status(401).json({ message: "Utilizador nao autenticado" })
>>>>>>> dev
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Permissao insuficiente" });
        }

        next();
    }
}

export function isOwner(model: any, field: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
<<<<<<< HEAD
        const userId = req.user?.id

        const { id } = req.params

        const entity = await model.get(id as string)

        if (!entity) return res.status(404).json({ message: "Entidade nao encontrada" })

        if (!userId) return res.status(404).json({ message: "User nao autenticado" })

        if (entity[field] !== userId) return res.status(403).json({ message: "Permissao insuficiente" })

        next()
    }
}



/*

    req: {
         headers: {
            authorization: "Bearer nslkfnlkasjojwenfnknlanfnifowesdnlsndfndngiwoe"
         }
    }

*/
=======
        const userId = req.user?.id;
        const { id } = req.params;
        const entity = await model.get(id as string);

        if (!entity) {
            return res.status(404).json({ message: "Entidade nao encontrada" });
        }

        if (!userId) return res.status(401).json({ message: "Utilizador nao autenticado" });
        
        if(entity[field] !== userId) return res.status(403).json({ message: "Permissao insuficiente" });

        next();
    }   
}
>>>>>>> dev
