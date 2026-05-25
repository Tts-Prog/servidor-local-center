import { typeDefs } from "./typedefs/typedefs.js";
<<<<<<< HEAD
import { categoriaResolver } from "./revolvers/categoria.revolver.js"; 
import { empresaResolver } from "./revolvers/empresa.revolver.js"; 
import { orcamentoResolver } from "./revolvers/orcamento.resolver.js"; 
import { prestacaoServicoResolver } from "./revolvers/prestacao-servico.resolver.js";
import { prestadorResolver } from "./revolvers/prestador.revolver.js";
import { propostaResolver } from "./revolvers/proposta.revolver.js";
import { serviceResolver } from "./revolvers/servico.revolver.js"; 
import { userResolver } from "./revolvers/user.model.js";
=======
import { UsersResolver } from "./resolvers/users.resolver.js";
import { ServicoResolver } from "./resolvers/servico.resolver.js";
import { prestacaoServicoResolver } from "./resolvers/prestacao-servico.resolver.js";
import { PrestadorResolver } from "./resolvers/prestador.resolver.js";
import { OrcamentoResolver } from "./resolvers/orcamento.resolver.js";
import { EmpresaResolver } from "./resolvers/empresa.resolver.js";
import { CategoriaResolver } from "./resolvers/categoria.resolver.js";
import { PropostaResolver } from "./resolvers/proposta.resolver.js";
>>>>>>> dev

// ********** exportar todos os resolvers **********
export const resolvers = {
    Query: {
<<<<<<< HEAD
        ...userResolver.Query,
        ...serviceResolver.Query,
        ...propostaResolver.Query,
        ...prestadorResolver.Query,
        ...prestacaoServicoResolver.Query,
        ...orcamentoResolver.Query,
        ...empresaResolver.Query,
        ...categoriaResolver.Query,
=======
        ...UsersResolver.Query,
        ...ServicoResolver.Query,
        ...PropostaResolver.Query,
        ...PrestadorResolver.Query,
        ...prestacaoServicoResolver.Query,
        ...OrcamentoResolver.Query,
        ...EmpresaResolver.Query,
        ...CategoriaResolver.Query,
>>>>>>> dev
    },
    Mutation: {
<<<<<<< HEAD
        ...userResolver.Mutation,
        ...serviceResolver.Mutation,
        ...propostaResolver.Mutation,
        ...prestadorResolver.Mutation,
        ...prestacaoServicoResolver.Mutation,
        ...orcamentoResolver.Mutation,
        ...empresaResolver.Mutation,
        ...categoriaResolver.Mutation,
    },

    ...userResolver,
    ...serviceResolver,
    ...propostaResolver,
    ...prestadorResolver,
    ...prestacaoServicoResolver,
    ...orcamentoResolver,
    ...empresaResolver,
    ...categoriaResolver,
}


export { typeDefs }
=======
        ...UsersResolver.Mutation,
        ...ServicoResolver.Mutation,
        ...PropostaResolver.Mutation,
        ...PrestadorResolver.Mutation,
        ...prestacaoServicoResolver.Mutation,
        ...OrcamentoResolver.Mutation,
        ...EmpresaResolver.Mutation,
        ...CategoriaResolver.Mutation,
    }
}

export { typeDefs } 
>>>>>>> dev
