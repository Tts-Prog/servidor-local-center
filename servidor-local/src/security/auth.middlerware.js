import jwt from "jsonwebtoken";
export default function AuthMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    // "Bearer hjkfsssshjhej.hrlrgfhwyrtfiwurifyqifgdchnbh"
    if (!authHeader) {
        return res.status(401).json({ message: "UTILIZADOR NAO AUTENTICADO" });
    }
    const token = authHeader.split(" ")[1];
    //["Bearer", "hjkfsssshjhej.hrlrgfhwyrtfiwurifyqifgdchnbh"]
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decodedToken?.id,
            email: decodedToken.email,
            role: decodedToken.role
        };
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "TOKEN INVALIDo" });
    }
}
// RBAC - Role Based Access Control
export function authorize(role) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "UTILIZADOR NAO AUTENTICADO" });
        }
        if (!role.includes(req.user.role)) {
            return res.status(403).json({ message: "Permissao insuficiente" });
        }
        next();
    };
}
export function isOwner(model, field) {
    return async (req, res, next) => {
        const userId = req.user?.id;
        const { id } = req.params;
        const entity = await model.get(id);
        if (!entity) {
            return res.status(401).json({ message: "Entidade nao encontrada" });
        }
        if (!userId) {
            return res.status(403).json({ message: "UTILIZADOR NAO AUTENTICADO" });
        }
        if (entity[field] !== userId) {
            return res.status(403).json({ message: "Permissao insuficiente" });
        }
        next();
    };
}
/*


req: {
    headers: {
        authorization: "Bearer hjkfsssshjhej.hrlrgfhwyrtfiwurifyqifgdchnbh"
    }
}
*/ 
//# sourceMappingURL=auth.middlerware.js.map