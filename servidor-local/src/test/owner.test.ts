import { isOwner } from "../security/auth.middleware.js"
import { jest, describe, it, expect, beforeEach } from "@jest/globals"

describe("Unit Test: isOwner Middleware", () => {
    let mockRequest: any;
    let mockResponse: any;
    let nextFunction: any = jest.fn()

    // formatacoa de resposta mockada para o teste
    beforeEach(() => {
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
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
        expect(mockResponse.status).toHaveBeenCalledWith(403);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Permissao insuficiente",
        });
        expect(nextFunction).not.toHaveBeenCalled()
    })
});