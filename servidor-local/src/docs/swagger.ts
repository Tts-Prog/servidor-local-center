import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API Servidor Local",
<<<<<<< HEAD
            description: "Plataforma de Gestao de Prestadores e Servico",
            version: '1.0.0'
=======
            description: "Plataforma de Gestao de Prestadores e Servicos",
            version: "1.0.0",
>>>>>>> dev
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'dev'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
<<<<<<< HEAD
                    bearerFormat: "JWT"
=======
                    bearerFormat: "JWT",
>>>>>>> dev
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
<<<<<<< HEAD
        
=======
>>>>>>> dev
    },
    apis: [
        path.join(process.cwd(), "./src/docs/schemas/*.yaml"),
        path.join(process.cwd(), "./src/docs/paths/*.yaml"),
<<<<<<< HEAD
        
    ]
}
=======
    ]
};
>>>>>>> dev

export const swaggerSpec = swaggerJsdoc(options);
