import { Router } from "express"
<<<<<<< HEAD
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js"
import AuthMiddleware, { authorize } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
=======
import { PrestacaoServicoController } from "../controllers/prestacao_servico.controller.js"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

const PrestacaoServicoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
<<<<<<< HEAD
    getAllPrestacaoServicoDetalhado: "/get-all-detalhado"
}

const router = Router()
router.get(PrestacaoServicoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.getAll)
router.get(PrestacaoServicoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.get)
router.get(PrestacaoServicoRoute.getAllPrestacaoServicoDetalhado, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.getAllPrestacaoServicoDetalhado)

router.use(AuthMiddleware);

router.post(PrestacaoServicoRoute.create, authorize([Role.ADMIN, Role.CLIENTE]), PrestacaoServicoController.create)
router.put(PrestacaoServicoRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.update)
router.delete(PrestacaoServicoRoute.delete,  authorize([Role.ADMIN]), PrestacaoServicoController.delete)


export { router }
=======
    getAllPrestacaoServicoDetalhada: "/get-all-detalhado",
    getPrestacaoServicoByCategoriaDetalhado: "/get-by-categoria/:categoria"
}

const router = Router()

router.post(PrestacaoServicoRoute.create, PrestacaoServicoController.create)
router.get(PrestacaoServicoRoute.getAll, PrestacaoServicoController.getAll)
router.get(PrestacaoServicoRoute.getById, PrestacaoServicoController.get)
router.put(PrestacaoServicoRoute.update, PrestacaoServicoController.update)
router.delete(PrestacaoServicoRoute.delete, PrestacaoServicoController.delete)
router.get(PrestacaoServicoRoute.getAllPrestacaoServicoDetalhada, PrestacaoServicoController.getAllPrestacaoServicoDetalhada)
router.get(PrestacaoServicoRoute.getPrestacaoServicoByCategoriaDetalhado, PrestacaoServicoController.getAllPrestacaoServicoByCategoria)

export { router }
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
