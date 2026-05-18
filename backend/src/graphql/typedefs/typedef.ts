
import { gql } from "graphql-tag";

export const typeDefs = gql`
    enum Role {
        ADMIN,
        CLIENTE,
        PRESTADOR,
        EMPRESA
    }

    enum EstadoProposta {
        PENDENTE,
        ACEITE,
        CANCELADO
    }

    enum EstadoPrestacaoServico {
        PENDENTE,
        EM_PROGRESSO,
        FINALIZADO,
        CANCELADO
    }

    enum TipoPrestador {
        PARTICULAR,
        EMPRESA
    }

    type Utilizador {
        id: ID!,
        nome: String!,
        numero_identificacao: String!,
        data_nascimento: String!,
        email: String!,
        telefone: String!,
        pais: String!,
        localidade: String,
        password: String,
        role: Role,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type Servico {
        id: ID!,
        nome: String!,
        descricao: String,
        categoria: Categoria,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type Prestador {
        id: ID!,
        nif: String!,
        profissao: String,
        taxa_urgencia: String,
        minimo_desconto: String,
        percentagem_desconto: String,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type Orcamento {
        id : ID!,
        total: Float,
        id_utilizadores: Utilizador,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type Proposta {
        id: ID!,
        id_prestacao_servico: PrestacaoServico,
        preco_hora: Float!,
        horas_estimadas: Int!,
        estado: EstadoProposta,
        id_prestador: Prestador,
        owner: String,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type PrestacaoServico {
        id: ID!,
        designacao: String,
        subtotal: Float,
        horas_estimadas: Int!,
        id_prestador: Prestador,
        id_servico: Servico,
        preco_hora: Float!, 
        estado: EstadoPrestacaoServico,
        id_orcamento: Orcamento,
        id_utilizador: Utilizador,
        id_empresa: Empresa,
        tipo_prestador: TipoPrestador,
        urgente: Boolean,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
    }

    type Categoria {
        id: ID!,
        designacao: String,
        icone: String,
        owner: String,
        createdAt: String,
        updatedAt: String
    }

    type Empresa {
        id: ID!,
        designacao: String,
        descricao: String,
        nif: String!,
        icone: String,
        id_utilizador: Utilizador,
        localizacao: String,
        owner: String,
        enabled: Boolean,
        createdAt: String,
        updatedAt: String
}


`