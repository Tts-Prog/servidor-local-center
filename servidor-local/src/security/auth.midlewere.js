import Jwt from "jsonwebtoken";
export default function authMidlewere(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            status: "error",
            message: "Token nao fornecido",
            data: null
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decodedToken = Jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            status: "error",
            message: "Token invalido",
            data: null
        });
    }
}
export function authorize(roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                status: "error",
                message: "Utilizador nao autenticado",
                data: null
            });
        }
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
            return res.status(403).json({
                status: "error",
                message: "Nao autorizado",
                data: null
            });
        }
        next();
    };
}
export function isOwner(model, field) {
    return async (req, res, next) => {
        const idUser = req.user?.id;
        const { id } = req.params;
        const entity = await model.get(id);
        if (!entity) {
            return res.status(404).json({
                status: "error",
                message: "Entidade nao encontrada",
                data: null
            });
        }
        if (!idUser) {
            return res.status(401).json({
                status: "error",
                message: "Utilizador nao autenticado",
                data: null
            });
        }
        if (entity[field] !== idUser) {
            return res.status(403).json({
                status: "error",
                message: "Nao autorizado",
                data: null
            });
        }
        next();
    };
}
//# sourceMappingURL=auth.midlewere.js.map