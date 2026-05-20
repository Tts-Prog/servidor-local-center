<<<<<<< HEAD
import { ServicoController } from "../controllers/servico.controller.js";
import { Router } from "express";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const ServiceRoute= {
    create: "/create",
    getById:"/get-by-id/:id",
    getAll:"/",
    update:"/update/:id",
    delete:"/delete/:id",
    getAllDetailed: "/all-detailed",
=======
import { Router } from "express"
import { servicoControler } from "../controlers/servico.controler.js"
import authMidlewere, { authorize } from "../security/auth.midlewere.js"
import { Role } from "../utils/types.js"

const ServiceRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update:"/update/:id",
    delete: "/delete/:id",
    getAllDetailed: "/get-all-detailed"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
}
const router = Router()
router.get(ServiceRoute.getAll,authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), servicoControler.getAll)
router.get(ServiceRoute.getAllDetailed,authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), servicoControler.getAllServicesDetailed)
router.get(ServiceRoute.getById,authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), servicoControler.get)
router.use(authMidlewere)
router.post(ServiceRoute.create,authorize([Role.ADMIN]), servicoControler.createService)
router.put(ServiceRoute.update,authorize([Role.ADMIN]), servicoControler.update)
router.delete(ServiceRoute.delete,authorize([Role.ADMIN]), servicoControler.delete)

<<<<<<< HEAD
router.get(ServiceRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAll)
router.get(ServiceRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.get)
router.get(ServiceRoute.getAllDetailed, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAllServicoDetalhado)

router.use(AuthMiddleware)

router.post(ServiceRoute.create, authorize([Role.ADMIN]), ServicoController.createServico)
router.put(ServiceRoute.update, authorize([Role.ADMIN]), ServicoController.update)
router.delete(ServiceRoute.delete, authorize([Role.ADMIN]), ServicoController.delete)
export { router }
=======
<<<<<<< HEAD
export { router }
=======

router.get(ServicoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAll)
router.get(ServicoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.get)
router.get(ServicoRoute.getAllDetailed, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), ServicoController.getAllServicoDetalhado)



router.use(AuthMiddleware)


router.post(ServicoRoute.create, authorize([Role.ADMIN]), ServicoController.createServico)
router.put(ServicoRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), ServicoController.update)
router.delete(ServicoRoute.delete, authorize([Role.ADMIN]), ServicoController.delete)



export { router };
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
