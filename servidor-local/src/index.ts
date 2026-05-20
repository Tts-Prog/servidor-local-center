<<<<<<< HEAD

import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { router as serviceRouter } from "./routes/servico.route.js";
import { router as usersRouter } from "./routes/users.route.js";
import { router as orcamentoRouter } from "./routes/orcamento.route.js";
import { router as propostaRouter } from "./routes/proposta.route.js";
import { router as prestadorRouter } from "./routes/prestador.route.js";
import { router as prestacaoServicoRouter } from "./routes/prestacao-servico.route.js";
import { router as empresaRouter } from "./routes/empresa.route.js";
import { router as categoriaRouter } from "./routes/categoria.route.js";
import { swaggerSpec } from "./docs/swagger.js"
import swaggerUi from "swagger-ui-express"
import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "./graphql/index.js";
=======
import "dotenv/config"
import express from "express";
import { router } from "./routs/servico.routs.js";
import { rOuter } from "./routs/user.routs.js";
import { ruter } from "./routs/prestador.routs.js";
import { ruters } from "./routs/orcamento.routs.js";
import { ruterss } from "./routs/proposta.routs.js";
import { ruterrs } from "./routs/prestacao_servico.routs.js";
import { rota } from "./routs/categoria.routs.js";
import { rotaa } from "./routs/empresa.routs.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./graphql/index.js";
import { typeDefs } from "./graphql/typedefs/typedef.js";
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
import { expressMiddleware } from "@as-integrations/express5";

<<<<<<< HEAD
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type", "authorization"],
}));

app.use(express.json());

app.use("/service", serviceRouter)
app.use("/users", usersRouter)
app.use("/orcamento", orcamentoRouter)
app.use("/proposta", propostaRouter)
app.use("/prestador", prestadorRouter)
app.use("/prestacao-servico", prestacaoServicoRouter)
app.use("/empresa", empresaRouter)
app.use("/categoria", categoriaRouter)
=======
// ***************** express ***************** //
const app = express(); // cria a aplicação
app.use(express.json()); // para interpretar o corpo das requisições como JSON
// liberta o front-end de aceder ao back-end
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

// rota inicial do express
app.get("/", (req, res) => {
    res.send("Hello World!");
});

<<<<<<< HEAD
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
})

await graphqlServer.start();

app.use("/graphql", expressMiddleware(graphqlServer, {
    context: async ({ req }) => ({
        token: req.headers.authorization,
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
    }),
})
)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});
=======
// rotas do express
app.use("/servico", router)
app.use("/user", rOuter)
app.use("/prestador", ruter)
app.use("/orcamento", ruters)
app.use("/proposta", ruterss)
app.use("/prestacao_servico", ruterrs)
app.use("/categoria", rota)
app.use("/empresa", rotaa)

// rota da documentação swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ***************** graphql ***************** //
//cria o servidor graphql
const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
})

//cria a rota graphql
await graphqlServer.start();
app.use("/graphql",
    expressMiddleware(graphqlServer, {
        context: async ({ req }) => ({
            //verificar se o header de autorizacao existe
            token: req.headers.authorization,
            DB_HOST: process.env.DB_HOST,
            DB_USER: process.env.DB_USER,
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_NAME: process.env.DB_NAME,
        }),
    }))

>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73

// inicia o servidor na porta 8080
app.listen(8080, () => {
<<<<<<< HEAD
    console.log("Servidor rodando na porta 8080");
});




/*
import router from "./routes";

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(8080, () => {
  console.log("Servidor rodando...");
});

*/
=======
    console.log("Servidor rodando em http://localhost:8080");
});
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
