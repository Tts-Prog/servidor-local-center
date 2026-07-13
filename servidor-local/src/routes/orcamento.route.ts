import { Router } from "express";
import { OrcamentoController } from "../controllers/orcamento.controller.js";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const OrcamentoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    calcular: "/:id/calcular"
};

const router = Router();

router.get(OrcamentoRoute.getAll, authorize([Role.ADMIN]), OrcamentoController.getAll);
router.get(OrcamentoRoute.getById, authorize([Role.ADMIN]), OrcamentoController.get);

router.use(AuthMiddleware);

router.post(OrcamentoRoute.create, authorize([Role.ADMIN]), OrcamentoController.create);
router.put(OrcamentoRoute.update, authorize([Role.ADMIN]), OrcamentoController.update);
router.delete(OrcamentoRoute.delete, authorize([Role.ADMIN]), OrcamentoController.delete);
router.put(OrcamentoRoute.calcular, authorize([Role.ADMIN]), OrcamentoController.calculateBudget);

export { router };
