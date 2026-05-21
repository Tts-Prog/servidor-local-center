import jwt from "jsonwebtoken";
//funcao para verificar se o utilizador esta autenticado e autorizado
export default function authMiddelware(req, res, next) {
    //obter o header de autorizacao
    const authHeader = req.headers.authorization;
    //verificar se o header de autorizacao existe
    if (!authHeader) {
        return res.status(401).json({
            message: "utilizador nao autenticado",
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "utilizador nao autorizado",
        });
    }
}
//funcao para verificar se o utilizador tem a role correta
export function autorized(role) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "utilizador nao autorizado",
            });
        }
        if (!role.includes(req.user.role)) {
            return res.status(403).json({
                message: "utilizador nao autorizado",
            });
        }
        next();
    };
}
//funcao para verificar se o utilizador é o dono da entidade
export function isOwner(model, field) {
    return async (req, res, next) => {
        const userid = req.user?.id;
        const { id } = req.params;
        const entity = await model.get(id);
        if (!entity)
            return res.status(404).json({
                message: "entidade nao encontrada"
            });
        if (!entity)
            return res.status(401).json({
                message: "utilizador  nao encontrada"
            });
        if (entity[field] !== userid)
            return res.status(403).json({
                message: "permicao insuficiente"
            });
        next();
    };
}
//# sourceMappingURL=auth.middelware.js.map