import Jwt from "jsonwebtoken";
export default function authGuard(req, res, next) {
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
//# sourceMappingURL=authGuard.js.map