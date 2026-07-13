import { Router } from "express";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";
import { PrestadorController } from "../controllers/prestador.controller.js";

const PrestadorRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update: "/update/:id",
    delete: "/delete/:id"
};

const router = Router();

router.get(PrestadorRoute.getAll,  PrestadorController.getAll);
router.get(PrestadorRoute.getById, authorize([Role.ADMIN]), PrestadorController.get);

router.use(AuthMiddleware);

router.post(PrestadorRoute.create, authorize([Role.ADMIN]), PrestadorController.create);
router.put(PrestadorRoute.update, authorize([Role.ADMIN]), PrestadorController.update);
router.delete(PrestadorRoute.delete, authorize([Role.ADMIN]), PrestadorController.delete);

export { router };
