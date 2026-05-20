import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import authMiddleware, {
    authorize,
    isOwner,
} from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";
import { UserModel } from "../models/user.model.js";

const userRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    login: "/login",
};

const UserRouter = Router();

UserRouter.post(userRoute.login, UserController.login);
UserRouter.post(userRoute.create, UserController.create);

UserRouter.use(authMiddleware);

UserRouter.get(
    userRoute.getAll,
    authorize([Role.ADMIN]),
    UserController.getAll,
);
UserRouter.get(
    userRoute.getById,
    authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]),
    UserController.get,
);
UserRouter.put(
    userRoute.update,
    authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]),
    isOwner(UserModel, "isOwner"),
    UserController.update,
);
UserRouter.delete(
    userRoute.delete,
    authorize([Role.ADMIN]),
    isOwner(UserModel, "isOwner"),
    UserController.delete,
);
// criar rota reset password
export { UserRouter };
