import "dotenv/config"
import express, { type Request, type Response } from "express"
import { ServiceRouter } from "./routes/servico.route.js"
import { UserRouter } from "./routes/user.route.js"
import { FreelancerRouter } from "./routes/prestador.route.js"
import { OrcamentoRouter } from "./routes/orcamento.route.js"
import { PrestacaoServicoRouter } from "./routes/prestacao-servico.route.js"
import { PropostaRouter } from "./routes/proposta.route.js"
import { swaggerSpec } from "./docs/swagger.js"
import swaggerUI from "swagger-ui-express"
import { ApolloServer } from "@apollo/server"
import { resolvers, typeDefs } from "./graphql/index.js"
import { expressMiddleware } from "@as-integrations/express5"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}
))

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))


app.use("/service", ServiceRouter)
app.use("/user", UserRouter)
app.use("/freelancer", FreelancerRouter)
app.use("/orcamento", OrcamentoRouter)
app.use("/prestacao-servico", PrestacaoServicoRouter)
app.use("/proposta", PropostaRouter)


app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

await graphqlServer.start()

app.use("/graphql",
  expressMiddleware(graphqlServer, {
    context: async({ req }) => ({
      token: req.headers.authorization,
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
    }),
  })
)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(8080, () => {
  console.log("Server running on port 8080")
})