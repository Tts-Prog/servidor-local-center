import { typeDefs } from "./typedefs/typedefs.js";
import { categoriaResolver } from "./revolvers/categoria.revolver.js"; 
import { empresaResolver } from "./revolvers/empresa.revolver.js"; 
import { orcamentoResolver } from "./revolvers/orcamento.resolver.js"; 
import { prestacaoServicoResolver } from "./revolvers/prestacao-servico.resolver.js";
import { prestadorResolver } from "./revolvers/prestador.revolver.js";
import { propostaResolver } from "./revolvers/proposta.revolver.js";
import { serviceResolver } from "./revolvers/servico.revolver.js"; 
import { userResolver } from "./revolvers/user.model.js";

export const resolvers = {
    Query: {
        ...userResolver.Query,
        ...serviceResolver.Query,
        ...propostaResolver.Query,
        ...prestadorResolver.Query,
        ...prestacaoServicoResolver.Query,
        ...orcamentoResolver.Query,
        ...empresaResolver.Query,
        ...categoriaResolver.Query,
    },

    Mutation: {
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