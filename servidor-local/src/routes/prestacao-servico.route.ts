<<<<<<< HEAD
import { Router } from "express"
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js"
import authMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
import { PrestacaoServicoModel } from "../models/prestacao-servico.models.js"
=======
import { Router } from "express";
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js";
import AuthMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";
>>>>>>> dev

const PrestacaoServicoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
<<<<<<< HEAD
    getAllPrestacaoServicoDetalhada: "/get-all-detalhado",
    getByCategoria: "/get-by-categoria"
}

const PrestacaoServicoRouter = Router()

PrestacaoServicoRouter.get(PrestacaoServicoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PrestacaoServicoController.get)
PrestacaoServicoRouter.get(PrestacaoServicoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PrestacaoServicoController.getAll)
PrestacaoServicoRouter.get(PrestacaoServicoRoute.getAllPrestacaoServicoDetalhada, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PrestacaoServicoController.getAllPrestacaoServicoDetalhado)
PrestacaoServicoRouter.get(PrestacaoServicoRoute.getByCategoria, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PrestacaoServicoController.PrestacaoServicoPorCategoria)


PrestacaoServicoRouter.use(authMiddleware)

PrestacaoServicoRouter.post(PrestacaoServicoRoute.create, authorize([Role.ADMIN]), PrestacaoServicoController.create)
PrestacaoServicoRouter.put(PrestacaoServicoRoute.update, authorize([Role.ADMIN]), isOwner(PrestacaoServicoModel, "isOwner"), PrestacaoServicoController.update)
PrestacaoServicoRouter.delete(PrestacaoServicoRoute.delete, authorize([Role.ADMIN]), isOwner(PrestacaoServicoModel, "isOwner"), PrestacaoServicoController.delete)

export { PrestacaoServicoRouter }
=======
    getAllPrestacaoServicoDetalhado: "/get-all-detalhado",
    getPrestacaoServicoByCategoriaDetalhado: "/get-by-categoria/:categoria"
};

const router = Router();

router.get(PrestacaoServicoRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.getAll);
router.get(PrestacaoServicoRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.get);
router.get(PrestacaoServicoRoute.getAllPrestacaoServicoDetalhado, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.getAllPrestacaoServicoDetalhado);

router.use(AuthMiddleware);

router.post(PrestacaoServicoRoute.create, authorize([Role.ADMIN, Role.CLIENTE]), PrestacaoServicoController.create);
router.put(PrestacaoServicoRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), PrestacaoServicoController.update);
router.delete(PrestacaoServicoRoute.delete, authorize([Role.ADMIN]), PrestacaoServicoController.delete);

router.get(PrestacaoServicoRoute.getPrestacaoServicoByCategoriaDetalhado, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), PrestacaoServicoController.getAllPrestacaoServicoByCategoria);

export { router };
>>>>>>> dev
