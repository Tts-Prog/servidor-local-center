<<<<<<< HEAD

import { Router } from "express"
import { PropostaController } from "../controllers/proposta.controller.js"
import AuthMiddleware, { authorize, isOwner } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"
import { PropostaModel } from "../models/proposta.model.js"

const PropostaRoute = {
create: "/create",
getAll: "/",
getById: "/get/:id",
update: "/update/:id",
delete: "/delete/:id",
aceitar: "/aceitar/:id"
=======
import { Router } from "express"
import { proposalControler } from "../controlers/proposta.controler.js" 
import authMidlewere, { authorize, isOwner } from "../security/auth.midlewere.js"
import { Role } from "../utils/types.js"
import { proposalModel } from "../models/proposta.models.js"


const proposalRoute = {
    create: "/create",
    getById: "/get-by-id/:id",
    getAll: "/",
    update:"/update/:id",
    delete: "/delete/:id",
    aceitar: "/aceitar/:id",
    getByUserId: "/get-by-user-id/:idUser"
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
}
const router = Router()
router.use(authMidlewere)
router.get(proposalRoute.getAll, authorize([Role.ADMIN]), proposalControler.getAll)
router.get(proposalRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), proposalControler.get)
router.post(proposalRoute.create, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), proposalControler.createProposal)
router.put(proposalRoute.update, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), isOwner(proposalModel,"owner"),proposalControler.update)
router.delete(proposalRoute.delete, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), isOwner(proposalModel,"owner"),proposalControler.delete)
router.put(proposalRoute.aceitar, authorize([Role.ADMIN, Role.CLIENTE]), proposalControler.acceptProposal)
router.get(proposalRoute.getByUserId, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]),proposalControler.getByUserId)

<<<<<<< HEAD
router.get(PropostaRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PropostaController.getAll)
router.get(PropostaRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), PropostaController.get)

router.use(AuthMiddleware)

router.post(PropostaRoute.create, authorize([Role.CLIENTE]), PropostaController.create)
router.put(PropostaRoute.update, authorize([Role.ADMIN, Role.PRESTADOR, Role.EMPRESA]), isOwner(PropostaModel, "Owner"),PropostaController.update)
router.delete(PropostaRoute.delete, authorize([Role.ADMIN]),  isOwner(PropostaModel, "Owner"), PropostaController.delete)
router.put(PropostaRoute.aceitar, authorize([Role.PRESTADOR, Role.EMPRESA]), PropostaController.aceitar)


=======
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
export { router }
