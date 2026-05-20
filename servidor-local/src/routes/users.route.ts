import { Router } from "express"
import { UserControler } from "../controlers/users.controler.js"
import authMidlewere, { authorize } from "../security/auth.midlewere.js"
import authGuard from "../security/authGuard.js"
import { Role } from "../utils/types.js"


const UserRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update: "/update/:id",
    delete: "/delete/:id",
    login: "/login",
    updatePassword: "/update-password/:id"
}
const router = Router()
router.post(UserRoute.create, UserControler.createUser)
router.post(UserRoute.login, UserControler.login)
router.use(authMidlewere)
router.get(UserRoute.getAll, authorize([Role.ADMIN]), UserControler.getAll)
router.get(UserRoute.getById, authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), UserControler.get)
router.put(UserRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), UserControler.update)
router.delete(UserRoute.delete,authorize([Role.ADMIN]), UserControler.delete)
router.put(UserRoute.updatePassword,authGuard,authorize([Role.ADMIN, Role.PRESTADOR, Role.CLIENTE, Role.EMPRESA]), UserControler.updatePassword)

<<<<<<< HEAD
export { router }
=======

router.post(UsersRouter.login, userController.login)

router.post(UsersRouter.create, userController.create)

router.use(AuthMiddleware)

router.get(UsersRouter.getAll, authorize([Role.ADMIN]), userController.getAll)

router.get(UsersRouter.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), userController.getById)

router.put(UsersRouter.update, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), userController.update)

router.delete(UsersRouter.delete, userController.delete)

// router.put(UsersRouter.resetPassword,authorize([Role.ADMIN,Role.CLIENTE,Role.PRESTADOR,Role.EMPRESA]), userController.resetPassword)



export { router };
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
