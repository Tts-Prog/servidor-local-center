<<<<<<< HEAD
import  { jest, describe, it, expect, beforeEach} from "@jest/globals";
import { isOwner} from "../security/auth.middleware.js";

describe("Unit Test: isOwner Middleware", () => {
    let mockRequest: any;
    let mockResponse: any;
    let nextFunction: any = jest.fn();

    // formatacao de resposta mockada para o teste
=======
import { isOwner } from "../security/auth.midlewere.js"
import { expect,beforeEach, describe, it, jest } from "@jest/globals"


describe("Unit Test: isOwner middleware", () => {
    let mockRequest: any
    let mockResponse: any
    let mockFunction: any = jest.fn();

>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
    beforeEach(() => {
        mockResponse = {
status: jest.fn().mockReturnThis(),
json: jest.fn(),
        };
    });

<<<<<<< HEAD
it("Deve retornar 403 se o utilizador nao for o dono do recurso", async () => {
    // 1. Simulacao de um utilizador logado (ID: "user_123")
    mockRequest = {
        user: { id: "user_123"},
        params: { id: "servico_999"},
    };

    // 2. Simulacao do Model (ID do dono na BD é "outro_user")
    const mockModel = {
        get: jest.fn<any>().mockResolvedValue({id_utilizador: "outro_user"}),
    };

    const middleware = isOwner(mockModel, "id_utilizador");
    await middleware(mockRequest, mockResponse, nextFunction);

    // 3. Verificacao: Deve bloquear com 403
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Permissao insuficiente",
    });
expect(nextFunction).not.toHaveBeenCalled();
});
});
=======
    it ("Deve retornar 403 se o utilizador não for o dono do recurso", async () => {
        mockRequest = {
            user: {id: "user-1"},
            params: {id: "resource-2"}
        };
        
        const mockModel = {
            get: jest.fn<any>().mockResolvedValue({id: "outro_user"}),
        };
        const middleware = isOwner(mockModel, "id_utilizador");
        await middleware (mockRequest, mockResponse, mockFunction);
        
        expect (mockResponse.status).toHaveBeenCalledWith(403);
        expect (mockResponse.json).toHaveBeenCalledWith({
            status: "error",
            message: "Nao autorizado",
            data: null
        });
        expect (mockFunction).not.toHaveBeenCalled();
    });
})
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
