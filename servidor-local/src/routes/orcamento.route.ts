import { Router } from "express"
<<<<<<< HEAD
import { OrcamentoController } from "../controllers/orcamento.controller.js"
import AuthMiddleware, { authorize } from "../security/auth.middleware.js"
=======
import { budgetControler } from "../controlers/orcamento.controler.js"
import authMidlewere, { authorize } from "../security/auth.midlewere.js"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
import { Role } from "../utils/types.js"



const budgetRoute = {
    create: "/create",
    getAll: "/",
<<<<<<< HEAD
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id"
=======
    update:"/update/:id",
    delete: "/delete/:id",
    calcular: "/calcular/:id"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
}
const router = Router()
<<<<<<< HEAD

router.get(OrcamentoRoute.getAll, OrcamentoController.getAll)
router.get(OrcamentoRoute.getById, OrcamentoController.get)

router.use(AuthMiddleware);

router.post(OrcamentoRoute.create,  authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.create)
router.put(OrcamentoRoute.update, authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.update)
router.delete(OrcamentoRoute.delete, authorize([Role.ADMIN]), OrcamentoController.delete)

// trabalho final..................................................
router.put("/:id/calcular", authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.calculateBudget);
export { router }

=======
router.use(authMidlewere)
router.get(budgetRoute.getAll, authorize([Role.ADMIN]),budgetControler.getAll)
router.get(budgetRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), budgetControler.get)
router.post(budgetRoute.create, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA]), budgetControler.createBudget)
router.put(budgetRoute.update, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), budgetControler.update)
router.delete(budgetRoute.delete, authorize([Role.ADMIN]), budgetControler.delete)
router.put(budgetRoute.calcular, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), budgetControler.calculateBudget)

export { router }
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
