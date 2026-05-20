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