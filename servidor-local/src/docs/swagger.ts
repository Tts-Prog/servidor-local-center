import swaggerJsdoc from "swagger-jsdoc"
import path from "path"
<<<<<<< HEAD


=======
//configuracao do swagger
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
const options: swaggerJsdoc.Options = {
    //informacoes da api
    definition: {
        openapi: `3.0.0`,
        info: {
<<<<<<< HEAD
            title: "API Servidor Local",
            description: " Plataforma de Gestao de Prestadores e Servicos",
            version: " 1.0.0",
=======
            title: "API servidor-local",
            description: "Plataforma de gestao de prestadores e servicos",
            version: "1.0.0",
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        },
        //servidores
        servers: [
            {
<<<<<<< HEAD
                url: `http://localhost:8080`,
                description: `dev`,
=======
                url: "http://localhost:8080",
                description: "dev",
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                }
            }
<<<<<<< HEAD
            },
=======
        },
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        security: [
            {
                bearerAuth: []
            }
        ]

<<<<<<< HEAD
    },

    apis: [
            path.join(process.cwd(), "./src/docs/schemas/*.yaml"),
            path.join(process.cwd(), "./src/docs/paths/*.yaml"),
        ]
}

export const swaggerSpec = swaggerJsdoc(options)



=======

    },
    //rotas 
    apis: [
        path.join(process.cwd(), "./src/docs/schemas/*.yaml"),
        path.join(process.cwd(), "./src/docs/paths/*.yaml")
    ]
}


export const swaggerSpec = swaggerJsdoc(opitions);
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
