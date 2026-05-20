import express, { type Request, type Response } from "express"
import { addServicesToDB, adicionarServico, apagarServico, deleteService, getAllServices, getServiceById, listarServicos, obterServico, updateService } from "./servico.js"
import { apagarNomeDoPrestador, calcularOrcamento, editarPrestadorDeServico, listarPrestadores, obterPrestador, selecionarServicos, } from "./orcamento.js"
import { Prestador, } from "./prestador.js"
import { addUserToDB, deleteUserById, getAllUsers, getUserById, updateUser } from "./users.js"
import type { ServicoTypeDB, userTypeDB } from "./utils/types.js"
import { generateUUID } from "./utils/uuid.js"

const app = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

// rota para adicionar um serviço novo
app.post("/adicionar-servico", (req: Request, res: Response) => {
  const novoServico = req.body

  const addServicoResponse = adicionarServico(novoServico)

  res.json(addServicoResponse)
})

// rota para listar todos os servicos
app.get("/listar-servicos", (req: Request, res: Response) => {
  const listServicoResponse = listarServicos()

  res.json(listServicoResponse)
})

// rota para apagar um servico
app.delete("/apagar-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const apagarServicoResponse = apagarServico(nome as string)

    res.json(apagarServicoResponse)
  } else {
    res.json({
      message: "Nome do servico é obrigatorio"
    })
  }
})

// rota para obter servico pelo nome 
app.get("/obter-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const obterServicoResponse = obterServico(nome as string)

    res.json(obterServicoResponse)
  } else {
    res.json({
      message: "Nome do servico é obrigatorio"
    })
  }
})

// rota para selecionar servicos
app.post("/selecionar-servico", (req: Request, res: Response) => {
  const { nome } = req.body

  const selecionarServicoResponse = selecionarServicos(nome as string)

  res.json(selecionarServicoResponse)
})

// rota para calcular orcamento
app.post("/calcular-orcamento", (req: Request, res: Response) => {
  const { pedido } = req.body

  const calcularOrcamentoResponse = calcularOrcamento(pedido)

  res.json({
    mensagem: "Orçamento calculado com sucesso",
    calcularOrcamentoResponse
  })
})


// rota para adicionar prestador 
// app.post("/adicionar-prestador", (req: Request, res: Response) => {
//   const novoPrestador = req.body

//   const addServicoResponse = adicionarPrestador(novoPrestador)

//   res.json(addServicoResponse)
// })

// rota para listar prestadores
app.get("/listar-prestadores", (req: Request, res: Response) => {

  const response = listarPrestadores()

  res.json(response)
})

// rota para obter prestador pelo nome 
app.post("/selecionar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador } = req.query

  if (nomeDoPrestador) {
    const obterPrestadorResponse = obterPrestador(nomeDoPrestador as string)

    res.json(obterPrestadorResponse)
  } else {
    res.json({
      message: "mensagem: prestador nao encontrado"
    })
  }
})

//rota para editar prestador pelo nome
app.put("/editar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador, prestadorExistente } = req.query
  const { novoDadosDoPrestador } = req.body
  const editarPrestadorResponse = editarPrestadorDeServico(nomeDoPrestador as string, novoDadosDoPrestador)
  res.json(editarPrestadorResponse)
})

app.delete("/apagar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador } = req.query

  if (nomeDoPrestador) {
    const apagarPrestadorResponse = apagarNomeDoPrestador(nomeDoPrestador as string)

    res.json(apagarPrestadorResponse)
  } else {
    res.json({ message: "Nome do prestador é obrigatório" })
    return
  }

})


// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados






// rota para inserir User
app.post("/add-new-user", async (req: Request, res: Response) => {
  const newUser: userTypeDB = req.body

  if (!newUser) {
    return res.status(400).json({
      status: "error",
      message: "Dados de User invalido",
      data: null
    })
  } else
    console.log(newUser)

  const createUserResponse = await addUserToDB(newUser)

  if (createUserResponse === null) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao criar User",
      data: null
    })
  }

  res.status(200).json({
    status: "sucesso",
    message: "User adicionado",
    data: createUserResponse
  })

})

// rota para obter User por id
app.get("/get-user-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Dados de User invalido",
      data: null

    })
  }

  const getUserByIdResponse = await getUserById(id as string)

  if (getUserByIdResponse === null) {
    return res.status(400).json({
      status: "error",
      message: "User nao encontrado",
      data: null
    })
  }
  res.status(200).json({
    status: "sucesso",
    mensagem: "User encontrado",
    data: getUserByIdResponse
  })
})

app.get("/get-all-users", async (req: Request, res: Response) => {
  const getAllUsersResponse = await getAllUsers()

  if (!getAllUsersResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao selicionar User",
      data: null
    })
  }
  res.status(200).json({
    status: "sucesso",
    mensagem: "Useres encontrado",
    data: getAllUsersResponse
  })
})

// rota para atualizar User

app.put("/update-service-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const updatedUser: userTypeDB = req.body

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Id eh obrigatorio",
      data: null
    })
  }

  if (!updatedUser) {
    return res.status(400).json({
      status: "error",
      message: "Dados de User invalidos",
      data: null
    })
  }

  const updateUserServiceResponse = await updateUser(id as string, updatedUser)

  if (!updateUserServiceResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao atualizar User",
      data: null
    })
  }
  return res.status(200).json({
    status: "success",
    message: "User atualizado com sucesso",
    data: updateUserServiceResponse
  })

})


// rota para apagar User

app.delete("/delete-user-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params


  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Id eh obrigatorio",
      data: null
    })
  }

  const deleteUserResponse = await deleteUserById(id as string)

  if (!deleteUserResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao apagar User",
      data: null
    })
  }
  return res.status(200).json({
    status: "success",
    message: "User apagado com sucesso",
    data: deleteUserResponse
  })
})
// rota para inserir prestador

// app.post("/add-new-prestador", async (req: Request, res: Response) => {
//   const Novoprestador = req.body as NovoprestadorType
//   console.log({ "prestador adicionado com sucesso": Novoprestador })

//   const novoprestadorResponse = await PostNewPrestador(Novoprestador)
//   res.json(novoprestadorResponse)
// });

// rota para adicionar servicos

app.post("/create-service", async (req: Request, res: Response) => {
  const newService: ServicoTypeDB = req.body

  if (!newService) {
    return res.status(400).json({
      status: "error",
      message: "Dados de servico invalido",
      data: null
    })
  } else
    console.log(newService)

  const createServiceResponse = await addServicesToDB(newService)

  if (createServiceResponse === null) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao criar servico",
      data: null
    })
  }

  res.status(200).json({
    status: "sucesso",
    message: "servico adicionado",
    data: createServiceResponse
  })

})

// rota para obter servico por id
app.get("/get-service-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Dados de servico invalido",
      data: null

    })
  }

  const getServiceByIdResponse = await getServiceById(id as string)

  if (getServiceByIdResponse === null) {
    return res.status(400).json({
      status: "error",
      message: "Servico nao encontrado",
      data: null
    })
  }
  res.status(200).json({
    status: "sucesso",
    mensagem: "servico encontrado",
    data: getServiceByIdResponse
  })
})

app.get("/get-all-services", async (req: Request, res: Response) => {



  const getAllServicesResponse = await getAllServices()

  if (!getAllServicesResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao selicionar servico",
      data: null
    })
  }
  res.status(200).json({
    status: "sucesso",
    mensagem: "servicos encontrado",
    data: getAllServicesResponse
  })
})

// rota para atualizar servico

app.put("/update-service-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const updatedService: ServicoTypeDB = req.body

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Id eh obrigatorio",
      data: null
    })
  }

  if (!updatedService) {
    return res.status(400).json({
      status: "error",
      message: "Dados de servico invalidos",
      data: null
    })
  }

  const updateServiceResponse = await updateService(id as string, updatedService)

  if (!updateServiceResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao atualizar servico",
      data: null
    })
  }
  return res.status(200).json({
    status: "success",
    message: "Servico atualizado com sucesso",
    data: updateServiceResponse
  })

})


// rota para apagar servico

app.delete("/delete-service-by-id/:id", async (req: Request, res: Response) => {
  const { id } = req.params


  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Id eh obrigatorio",
      data: null
    })
  }

  const deleteServiceResponse = await deleteService(id as string)

  if (!deleteServiceResponse) {
    return res.status(400).json({
      status: "error",
      message: "Erro ao apagar servico",
      data: null
    })
  }
  return res.status(200).json({
    status: "success",
    message: "Servico apagado com sucesso",
    data: deleteServiceResponse
  })
})


console.log("data formatado: ")

app.listen(8080, () => {
  console.log("Server running on port 8080")
})