import { catalogoServicos } from "./servico.js"
import { type PedidoServicoType, type PrestadorType, type ServicoType } from "./utils/types.js"
import { Prestador, } from "./prestador.js";

const taxaUrgencia: number = 0.3
const minimoParaDesconto: number = 100
const percentagemDesconto: number = 0.1

const servicosSelecionados: ServicoType[] = []
const prestadorDeServico: PrestadorType[] = []
const PrestadoresSelecionados: PrestadorType[] = []

// funcao para selecionar servicos e horasEstimadas
export function selecionarServicos(nome: string) {
    for (let i = 0; i < catalogoServicos.length; i++) {
        if (catalogoServicos[i]?.nome === nome) {
            servicosSelecionados.push(catalogoServicos[i]!)
            return true
        }
    }
    return false
}

// funcao para criar prestadores de servico
export function criarPrestadorDeServico(novoPestador: PrestadorType) {
    // verificacao: verifica se o prestador ja esta no array
    prestadorDeServico.map((prestadorExistente: PrestadorType) => {
        if (prestadorExistente.nome === novoPestador.nome) {
            return {
                starus: false,
                message: "Ja existe um prestador de servico esse nome",
                data: null
            }
        }
    })

    // se o prestador nao existir, adicionamos um novo prestador
    prestadorDeServico.push(novoPestador)
    return {
        status: true,
        message: "Prestador de servico adicionado",
        data: novoPestador
    }
}

// listar os prestadores
export function listarPrestadores() {
    return {
        status: true,
        message: "Lista de prestadores obtida com sucesso",
        data: prestadorDeServico  
    }
}

// obter um prestador pelo nome
export function obterPrestador(nome: string): PrestadorType | null {

    for (let i = 0; i < prestadorDeServico.length; i++) {
        if (prestadorDeServico[i]?.nome === nome) {
            return prestadorDeServico[i]!
        }
    }

    return null
}



// funcao para editar prestador de servico
export function editarPrestadorDeServico(nomeDoPrestador: string, novoDadosDoPrestador: PrestadorType) {
    // encontrar o prestador de servico e editar na minha lista
    //ciclo que percore a lista e verificar o nome do prestador de servico
    prestadorDeServico.map((prestadorExistente: PrestadorType) => {
        if (prestadorExistente.nome === nomeDoPrestador) {
            prestadorExistente.nome = novoDadosDoPrestador.nome
            prestadorExistente.precoHora = novoDadosDoPrestador.precoHora
            prestadorExistente.profissao = novoDadosDoPrestador.profissao
            prestadorExistente.minimoParaDesconto = novoDadosDoPrestador.minimoParaDesconto
            prestadorExistente.percentagemDesconto = novoDadosDoPrestador.percentagemDesconto
            prestadorExistente.taxaUrgencia = novoDadosDoPrestador.taxaUrgencia
            return {
                status: true,
                message: "Prestador de servico editado com sucesso",
                data: prestadorExistente
            }
        }  else {
            
        }
    })
    // se nao existir nemhum prestador com o nome recebido, retorna uma mensagem de erro
    return {
        status: true,
        message: "Não existe nenhum prestador de servico com esse nome",
        data: null
    }
}

// funcao para apagar um prestador de servico
export function apagarNomeDoPrestador(nomeDoPrestador: string){
    //ciclo para percorrer a lista de prestadores
    for (let i = 0; i < prestadorDeServico.length; i++) {
        //Ir verificar o nome do prestador for igual ao nome recebido
        if (prestadorDeServico[i]?.nome === nomeDoPrestador) {
            //se encontrar remover o prestador
            const prestadorRemovido = prestadorDeServico.splice(i, 1)
            // OU prestadorDeServico.filter{(prestadorExistente: PrestadorType) => 
            //     prestadorExistente.nome !== nomeDoPrestador}
        }
        //retomar uma mensagem de sucesso
        return {
                status: true,
                message: "Prestador de servico editado com sucesso",
                data: null
            }
    }
    //se nao existir prestador nenhum com o nome recebido
    
}
    








// funcao para calcular o orcamento
export function calcularOrcamento(pedido: PedidoServicoType) {
    let totalBruto: number = 0
    let totalFinal: number = 0

    servicosSelecionados.map((servico: ServicoType) => {
        let totalDoServico: number = servico.precoHora * pedido.horasEstimadas
        totalBruto = totalBruto + totalDoServico
    })

    totalFinal = totalBruto

    if (pedido.urgente) {
        totalFinal = totalBruto + (totalBruto * taxaUrgencia)
    }

    if (totalBruto >= minimoParaDesconto) {
        totalFinal = totalFinal - (totalBruto * percentagemDesconto)
    }

    return totalFinal

    // () => {} --- arrow function
    // function () {} --- function normal

    /* 
    
    urgente: true
    taxaUrgencia: 0.3
    totalBruto: 100
    totalTaxa: 100 * 0.3 = 30
    totalFinal: 100 + 30 = 130

    totalBruto: 100
    totalbruto apos urgencia: 150
    minimo descnto: 100
    percentagem: 10%
    desconto sobre total final: 150 * 0.1 = 15
    desconto sobre total bruto: 100 * 0.1 = 10

    */
}
