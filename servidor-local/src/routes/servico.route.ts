<<<<<<< HEAD
import { Router } from "express"
import { serviceController } from "../controllers/servico.controller.js"
import authMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
import { ServiceModel } from "../models/servico.model.js"


const ServiceRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id",
    allDetailed:"/all-detailed"
}

const ServiceRouter = Router()

ServiceRouter.get(ServiceRoute.getAll, serviceController.getAll)
ServiceRouter.get(ServiceRoute.getById, serviceController.get)
ServiceRouter.get(ServiceRoute.allDetailed, serviceController.getAllServicoDetalhado)

ServiceRouter.use(authMiddleware)

ServiceRouter.post(ServiceRoute.create, authorize([Role.ADMIN]), serviceController.create)
ServiceRouter.put(ServiceRoute.update, authorize([Role.ADMIN]), isOwner(ServiceModel, "isOwner"), serviceController.update)
ServiceRouter.delete(ServiceRoute.delete, authorize([Role.ADMIN]), isOwner(ServiceModel, "isOwner"), serviceController.delete)

export { ServiceRouter }
=======
import { ServicoController } from "../controllers/servico.controller.js";
import { Router } from "express";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const ServicoRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update: "/update/:id",
    delete: "/delete/:id",
    getAllDetailed: "/get-all-detailed"
};

const router = Router();

router.get(ServicoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAll);
router.get(ServicoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.get);
router.get(ServicoRoute.getAllDetailed, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAllServicoDetalhado);

router.use(AuthMiddleware);

router.post(ServicoRoute.create, authorize([Role.ADMIN]), ServicoController.createServico);
router.put(ServicoRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), ServicoController.update);
router.delete(ServicoRoute.delete, authorize([Role.ADMIN]), ServicoController.delete);

export { router };
>>>>>>> dev
