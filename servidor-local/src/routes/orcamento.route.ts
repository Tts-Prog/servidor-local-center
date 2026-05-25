<<<<<<< HEAD
import { Router } from "express"
import { OrcamentoController } from "../controllers/orcamento.controller.js"
import { Role } from "../utils/types.js"
import authMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { OrcamentoModel } from "../models/oramento.model.js"
=======
import { Router } from "express";
import { OrcamentoController } from "../controllers/orcamento.controller.js";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";
>>>>>>> dev

const OrcamentoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
<<<<<<< HEAD
    calcular: "/calcular/:id"
}

const OrcamentoRouter = Router()

OrcamentoRouter.use(authMiddleware)

OrcamentoRouter.post(OrcamentoRoute.create, authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.create)
OrcamentoRouter.get(OrcamentoRoute.getAll, authorize([Role.ADMIN]), isOwner(OrcamentoModel, "isOwner"), OrcamentoController.getAll)
OrcamentoRouter.get(OrcamentoRoute.getById, authorize([Role.ADMIN]), isOwner(OrcamentoModel, "isOwner"), OrcamentoController.get)
OrcamentoRouter.put(OrcamentoRoute.update, authorize([Role.ADMIN, Role.CLIENTE]), isOwner(OrcamentoModel, "isOwner"), OrcamentoController.update)
OrcamentoRouter.delete(OrcamentoRoute.delete, authorize([Role.ADMIN]), isOwner(OrcamentoModel, "isOwner"), OrcamentoController.delete)
OrcamentoRouter.put(OrcamentoRoute.calcular, authorize([Role.ADMIN, Role.CLIENTE]), isOwner(OrcamentoModel, "isOwner"), OrcamentoController.calcular)

export { OrcamentoRouter }
=======
    calcular: "/:id/calcular"
};

const router = Router();

router.get(OrcamentoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), OrcamentoController.getAll);
router.get(OrcamentoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), OrcamentoController.get);

router.use(AuthMiddleware);

router.post(OrcamentoRoute.create, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA]), OrcamentoController.create);
router.put(OrcamentoRoute.update, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), OrcamentoController.update);
router.delete(OrcamentoRoute.delete, authorize([Role.ADMIN]), OrcamentoController.delete);
router.put(OrcamentoRoute.calcular, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), OrcamentoController.calculateBudget);

export { router };
>>>>>>> dev
