<<<<<<< HEAD
import { Router } from "express"
import { FreelancerController } from "../controllers/prestador.controller.js"
import authMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
import { FreelancerModel } from "../models/prestador.model.js"

const FreelancerRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const FreelancerRouter = Router()

FreelancerRouter.use(authMiddleware)

FreelancerRouter.get(FreelancerRoute.getAll, authorize([Role.ADMIN,]), FreelancerController.getAll)
FreelancerRouter.get(FreelancerRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), isOwner(FreelancerModel, "isOwner"), FreelancerController.get)
FreelancerRouter.post(FreelancerRoute.create, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA]), isOwner(FreelancerModel, "isOwner"), FreelancerController.create)
FreelancerRouter.put(FreelancerRoute.update, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), isOwner(FreelancerModel, "isOwner"), FreelancerController.update)
FreelancerRouter.delete(FreelancerRoute.delete, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), isOwner(FreelancerModel, "isOwner"), FreelancerController.delete)

export {FreelancerRouter}
=======
import { Router } from "express";
import { PrestadorController } from "../../../_trash/prestador.controller.js";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const PrestadorRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update: "/update/:id",
    delete: "/delete/:id"
};

const router = Router();

router.get(PrestadorRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestadorController.getAll);
router.get(PrestadorRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestadorController.get);

router.use(AuthMiddleware);

router.post(PrestadorRoute.create, authorize([Role.ADMIN]), PrestadorController.create);
router.put(PrestadorRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), PrestadorController.update);
router.delete(PrestadorRoute.delete, authorize([Role.ADMIN]), PrestadorController.delete);

export { router };
>>>>>>> dev
