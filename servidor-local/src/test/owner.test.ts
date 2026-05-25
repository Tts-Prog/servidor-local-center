<<<<<<< HEAD
import { isOwner } from "../security/auth.middleware.js"
import { jest, describe, it, expect, beforeEach } from "@jest/globals"
=======
import { isOwner } from "../security/auth.middelware.js";
import { jest, describe, beforeEach, it, expect } from "@jest/globals";
>>>>>>> dev


describe("Unit test: isOwner Middleware", () => {
    let mockRequest: any;
    let mockResponse: any;
<<<<<<< HEAD
    let nextFunction: any = jest.fn()

    // formatacoa de resposta mockada para o teste
=======
    let mockFunction: any = jest.fn();

>>>>>>> dev
    beforeEach(() => {
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
<<<<<<< HEAD
    it("Deve retornar 403 se o User nao for o dono do recurso", async () => {
        //1- Simulacao de um User logado (ID: "use_123")
        mockRequest = {
            user: { id: "use_123" },
            params: { id: "servico_999" }
        };

        //2- Simulacao do Model (ID do dono na BD é "outro_user")
        const mockModel = {
            get: jest.fn<any>().mockResolvedValue({ id_User: "outro_user" }),
        }

        const middleware = isOwner(mockModel, "id_User");
        await middleware(mockRequest, mockResponse, nextFunction);

        //3- verificacao: Deve ser bloqueada com 403
=======
    it("deve retornar 403 quanmdo o utilizador nao for o dono do recurso", async () => {
        //1. Simulacao de um usuario logado (id: "user_123")
        mockRequest = {
            user: {
                id: "user_123"
            },
            params: {
                id: "servico_999"
            },
        }

        //2. Simulacao do modelo de dados (id do dono na bd e `outro_user_id`)
        const mockModel = {
            get: jest.fn<any>().mockResolvedValue({
                id_utilizador: "outro_user",
            })
        }
        const middleware = isOwner(mockModel, "id_utilizador");
        await middleware(mockRequest, mockResponse, mockFunction);

        //3. Verificacoes
>>>>>>> dev
        expect(mockResponse.status).toHaveBeenCalledWith(403);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "permicao insuficiente",
        });
<<<<<<< HEAD
        expect(nextFunction).not.toHaveBeenCalled()
    })
});
=======
        expect(mockFunction).not.toHaveBeenCalled();
    }
    )
}
);
>>>>>>> dev
