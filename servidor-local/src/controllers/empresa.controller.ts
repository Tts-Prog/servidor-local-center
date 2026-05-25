<<<<<<< HEAD
import type { Request, Response } from "express"
import type { EmpresaDBType, ResponseType } from "../utils/types.js"
import { EmpresaModel } from "../models/empresa.model.js"


export const EmpresaController = {
    async create(req: Request, res: Response) {
        const empresa: EmpresaDBType = req.body
=======
import type { Request, Response } from "express";
import type { EmpresaDBType, ResponseType } from "../utils/types.js";
import { EmpresaModel } from "../models/empresa.model.js";
import jwt from "jsonwebtoken";

export const EmpresaController = {
    async create(req: Request, res: Response) {
        const empresa: EmpresaDBType = req.body;
>>>>>>> dev

        if (!empresa) {
            const response: ResponseType<null> = {
                status: "error",
<<<<<<< HEAD
                message: "Dados de empresa invalidos",
                data: null
            }
            return res.status(500).json(response)
        }

        const createempresaResponse: EmpresaDBType | null = await EmpresaModel.create(empresa)

        if (!createempresaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao criar empresa",
                data: null
            }
            return res.status(400).json(response)
=======
                message: "Dados de empresa inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }

        const createEmpresaResponse = await EmpresaModel.create(empresa);

        if (!createEmpresaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao criar empresa",
                data: null,
            };
            return res.status(500).json(response);
>>>>>>> dev
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
<<<<<<< HEAD
            message: "empresa criado com sucesso",
            data: createempresaResponse
        }

        return res.status(201).json(response)
    },

    async getAll(req: Request, res: Response) {
        const getAllempresasResponse: EmpresaDBType[] | null = await EmpresaModel.getAll()

        if (!getAllempresasResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar empresas",
                data: null
            }
            return res.status(500).json(response)
=======
            message: "Empresa criada com sucesso",
            data: createEmpresaResponse,
        };
        return res.status(201).json(response);
    },

    async getAll(req: Request, res: Response) {
        const getAllEmpresasResponse = await EmpresaModel.getAll();

        if (!getAllEmpresasResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao buscar empresas",
                data: null,
            };
            return res.status(500).json(response);
>>>>>>> dev
        }

        const response: ResponseType<EmpresaDBType[]> = {
            status: "success",
<<<<<<< HEAD
            message: "empresa criado com sucesso",
            data: getAllempresasResponse
        }

        return res.status(200).json(response)
    },

    async get(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const getempresaByIdResponse: EmpresaDBType | null = await EmpresaModel.get(id as string)

        if (!getempresaByIdResponse) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "empresa nao encontrado",
                data: null
        }
            return res.status(404).json(response)
=======
            message: "Empresas buscadas com sucesso",
            data: getAllEmpresasResponse,
        };
        return res.status(200).json(response);
    },

    async get(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            const response: ResponseType<null> = {
                status: "error",
                message: "ID da empresa não fornecido",
                data: null,
            };
            return res.status(400).json(response);
        }

        const getEmpresaResponse = await EmpresaModel.get(id as string);

        if (!getEmpresaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Empresa não encontrada",
                data: null,
            };
            return res.status(404).json(response);
>>>>>>> dev
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
<<<<<<< HEAD
            message: "empresa encontrado com sucesso",
            data: getempresaByIdResponse
        }

        return res.status(200).json(response)
    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedempresa: EmpresaDBType = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null
            })
        }

        if (!updatedempresa) {
            return res.status(400).json({
                status: "error",
                message: "Dados de empresa invalidos",
                data: null
            })
        }

        const updateempresaResponse = await EmpresaModel.update(id as string, updatedempresa)

        if (!updateempresaResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar empresa",
                data: null
            })
=======
            message: "Empresa encontrada com sucesso",
            data: getEmpresaResponse,
        };
        return res.status(200).json(response);
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const updatedEmpresa: EmpresaDBType = req.body;

        if (!id) {
            const response: ResponseType<null> = {
                status: "error",
                message: "ID da empresa é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }

        if (!updatedEmpresa) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Dados de empresa inválidos",
                data: null,
            };
            return res.status(400).json(response);
        }

        const updateEmpresaResponse = await EmpresaModel.update(id as string, updatedEmpresa);

        if (!updateEmpresaResponse) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao atualizar empresa",
                data: null,
            };
            return res.status(400).json(response);
>>>>>>> dev
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
<<<<<<< HEAD
            message: "empresa encontrado com sucesso",
            data: updateempresaResponse
        }

        return res.status(200).json(response)
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "ID obrigatorio",
                data: null
        }
            return res.status(400).json(response)
        }

        const deleteempresaResponse: EmpresaDBType | null = await EmpresaModel.delete(id as string)

        if (!deleteempresaResponse) {
            const response: ResponseType<EmpresaDBType> = {
                status: "error",
                message: "Erro ao apagar empresa",
                data: null
        }
            return res.status(404).json(response)
=======
            message: "Empresa atualizada com sucesso",
            data: updateEmpresaResponse,
        };
        return res.status(200).json(response);
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            const response: ResponseType<null> = {
                status: "error",
                message: "ID da empresa é obrigatório",
                data: null,
            };
            return res.status(400).json(response);
        }

        const deleteEmpresaResponse: EmpresaDBType | null = await EmpresaModel.delete(id as string);

        if (deleteEmpresaResponse === null) {
            const response: ResponseType<null> = {
                status: "error",
                message: "Erro ao deletar empresa",
                data: null
            };
            return res.status(400).json(response);
>>>>>>> dev
        }

        const response: ResponseType<EmpresaDBType> = {
            status: "success",
<<<<<<< HEAD
            message: "empresa encontrado com sucesso",
            data: deleteempresaResponse
        }

        return res.status(200).json(response)

    }
    
}

    
=======
            message: "Empresa apagada com sucesso",
            data: deleteEmpresaResponse,
        };
        return res.status(200).json(response);
    },
};
>>>>>>> dev
