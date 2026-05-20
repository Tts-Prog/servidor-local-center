<<<<<<< HEAD

import { Router } from "express"
import { PrestadorController } from "../controllers/prestador.controller.js"
import AuthMiddleware, { authorize } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
=======
import { Router } from "express"
import { provaiderControler } from "../controlers/prestador.controler.js"
import authMidlewere, { authorize, isOwner } from "../security/auth.midlewere.js"
import { Role } from "../utils/types.js"
import { ProviderModel } from "../models/prestador.model.js"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73


const ProviderRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
<<<<<<< HEAD
    update: "/update/:id",
    delete: "/delete/:id"
=======
    update:"/update/:id",
    delete: "/delete/:id",
    getPrecoHora: "/get-preco-hora/:id"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
}
const router = Router()
<<<<<<< HEAD
router.get(PrestadorRoute.getAll,  authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestadorController.getAll)
router.get(PrestadorRoute.getById,  authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestadorController.get)

router.use(AuthMiddleware)

router.post(PrestadorRoute.create, authorize([Role.ADMIN]), PrestadorController.create)
router.put(PrestadorRoute.update, authorize([Role.ADMIN, Role.PRESTADOR]), PrestadorController.update)
router.delete(PrestadorRoute.delete, authorize([Role.ADMIN]), PrestadorController.delete)

=======
router.get(ProviderRoute.getAll, authorize ([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), provaiderControler.getAll)
router.get(ProviderRoute.getById, authorize ([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), provaiderControler.get)
router.use(authMidlewere)
router.post(ProviderRoute.create, authorize ([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]),provaiderControler.createProvider)
router.put(ProviderRoute.update, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), isOwner(ProviderModel, "owner"), provaiderControler.update)
router.delete(ProviderRoute.delete, authorize([Role.ADMIN, Role.PRESTADOR]), isOwner(ProviderModel, "owner"), provaiderControler.delete)
router.get(ProviderRoute.getPrecoHora, provaiderControler.getPrecoHora)
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
export { router }
