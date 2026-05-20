<<<<<<< HEAD
import { UsersController } from "../controllers/users.controller.js";
import { Router } from "express";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";

const UsersRoute = {
=======
import { Router } from "express"
import { UserControler } from "../controlers/users.controler.js"
import authMidlewere, { authorize } from "../security/auth.midlewere.js"
import authGuard from "../security/authGuard.js"
import { Role } from "../utils/types.js"


const UserRoute = {
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
    create: "/create",
    getById: "/:id",
    getAll: "/",
<<<<<<< HEAD
    update: "/:id",
    delete: "/:id",
    login: "/login",
    updatePassword: "/update-password/:id",
    resetPassword: "/reset-password",
};

const router = Router();

router.post(UsersRoute.login, UsersController.login);
router.post(UsersRoute.create, UsersController.createUsers);
=======
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
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

router.use(AuthMiddleware)

router.get(UsersRoute.getAll, authorize([Role.ADMIN]), UsersController.getAll);
router.get(UsersRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), UsersController.getById);
router.put(UsersRoute.update, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), UsersController.update);
router.delete(UsersRoute.delete, authorize([Role.ADMIN]), UsersController.delete);
router.put(UsersRoute.updatePassword, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), UsersController.updatePassword);
router.put(UsersRoute.resetPassword, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), UsersController.resetPassword);

export { router };
>>>>>>> c28e2e3614e8f286824b23d44b0167534bba70b8
