<<<<<<< HEAD:servidor-local/src/orcamento.ts
import db from "./lib/db.js"
import { catalogoDeServicos } from "./servico.js"
import { type PedidoServicoType, type PrestadorType, type ServicoType, type ResponseType } from "./utils/types.js"
=======
<<<<<<< HEAD
>>>>>>> 85edafc958c02735ca774ea5fdb1e18871f1010b:_trash/orcamento.ts

import { catalogoServicos } from "./servico.js";
import { type pedidoServicoType, type PrestadorType, type ServicoType } from "./utils/types.js";

const taxaUrgencia: number = 1.3;
const minimoDesconto: number = 100;
const porcentagemDesconto: number = 0.1;

const servicosSelecionados: ServicoType[] = [];
const prestadorDeServico: PrestadorType[] = [];
const prestadoresSelecionados: PrestadorType[] = [];

// funcao para selecionar servico e horaEstimada
export function selecionarServico(nomeServico: string) {
    for (let i = 0; i < catalogoServicos.length; i++) {
        if (catalogoServicos[i]?.nome === nomeServico) {
            servicosSelecionados.push(catalogoServicos[i]!);
            return true
<<<<<<< HEAD:servidor-local/src/orcamento.ts
        }
    }
    return false
}

// funcao para criar prestadores de servico
export  async function criarPrestadoresDeServico(novoPrestador: PrestadorType) {
    try{
        const[rows] = await db.execute(
            `INSERT INTO tabela_prestadores
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [novoPrestador.id, novoPrestador.nif,novoPrestador.profissao,
                novoPrestador.taxa_urgencia,novoPrestador.minimo_desconto,
                novoPrestador.percentagem_desconto,novoPrestador.enabled, new Date,new Date
            ]
        )
        console.log({rows});
        return rows
    }catch(error){
        console.log(error);
=======
=======
import db from "./lib/db.js";
import { catalogoServico } from "./servico.js";
import type { pedidoServico, prestadorType, Servicotype } from "./util/types.js";

const pedido: pedidoServico = {
    cliente: "djoca",
    descricao: "Serviço de limpeza",
    horasEstimadas: 5,
    urgente: true,
};

// função para adicionar servico e HorasEstimadas
export function SelecionarServicos(nome: string) {
    for (let i = 0; i < catalogoServico.length; i++) {
        if (catalogoServico[i]?.nome === nome) {
            servicoSelecionados.push(catalogoServico[i]!);
            return true;
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        }
        return true;
    }
}

<<<<<<< HEAD



// funcao para selecionar prestador de servico pelo nome
export function selecionarPrestador(nomePrestador: string) {

    // verificar se o prestador existe
    for (let i = 0; i < prestadorDeServico.length; i++) {
        if (prestadorDeServico[i]?.nome === nomePrestador) {

            // se existir, adicionar na lista de selecionados
            prestadoresSelecionados.push(prestadorDeServico[i]!);

            return {
                status: true,
                message: "Prestador selecionado com sucesso!",
                data: prestadorDeServico[i]
            };
        }
    }

    // se nao existir
    return {
        status: false,
        message: "Prestador não encontrado!",
        data: null
    };
}


//funcao para criar prestador de serviço
export function criarPrestadorDeServico(novoPrestador: PrestadorType) {
    //verificar se o prestador ja esta no array
    prestadorDeServico.map((prestadoeExistente: PrestadorType) => {
        if (prestadoeExistente.nome === novoPrestador.nome) {
            // se o prestador ja existe, retorna uma mensagem de erro
            return { status: false, message: " Já existe um Prestador com esse nome!", data: null }
        }
    })

    // se o prestador nao existir, adicionamos o novo prestador
    prestadorDeServico.push(novoPrestador);
    return { status: true, message: "Prestador de servico adicionado com sucesso!", data: novoPrestador }
}


//funcao para editar um prestador de serviço
export function editarPrestadorDeServico(nomePrestador: string, novoDadosDoPrestador: PrestadorType) {
    //encontrar o prestador de servico  a editar na minha lista
    //ciclo que percorre  a lista e verifica o nome do prestador de serviço
    prestadorDeServico.map((prestadorExistente: PrestadorType) => {
        if (prestadorExistente.nome === nomePrestador) {
            prestadorExistente.nome = novoDadosDoPrestador.nome;
            prestadorExistente.precoHora = novoDadosDoPrestador.precoHora;
            prestadorExistente.profissao = novoDadosDoPrestador.profissao;
            prestadorExistente.minimoParaDesconto = novoDadosDoPrestador.minimoParaDesconto;
            prestadorExistente.percentagemDesconto = novoDadosDoPrestador.percentagemDesconto;
            prestadorExistente.taxaUrgencia = novoDadosDoPrestador.taxaUrgencia;

            return { status: true, message: "Prestador de serviço editado com sucesso!", data: prestadorExistente }
        }
    })
    // se nao nao existir nenhum prestador com o nome recebido , retorna uma mensagem de erro
    return { status: false, message: "Prestador de serviço não encontrado!", data: null }
}


/*
 //prestadorDeServico.replace()

//funcao para apagar um prestador de serviço
export function apagarPrestadorDeServico(nomePrestador: string) {
   //encontrar o prestador de serviço a apagar na minha lista

   //ciclo para percorrer a lista de prestadores de serviço e mostrar os seus dados
    for (let i = 0; i < prestadorDeServico.length; i++) {

//if para verificar se onome do prestador for igual ao nome recebido, 
        if (prestadorDeServico[i]?.nome === nomePrestador) {

 //se encontrado, remover o prestador
            prestadorDeServico.splice(i, 1);

//retornar mensagem de sucesso
            return {
                status: true,
                message: "Prestador removido com sucesso!",
                data: null
            };
        }
    }

 //se nao existir nenhum prestador com o nome recebido, retorna mensagem de erro
    return {
        status: false,
        message: "Prestador não encontrado!",
        data: null
    };
}

  */

export function listarPrestadoresDeServico() {
    return prestadorDeServico;
}

//funcao para obter um prestador de serviço pelo nome
export function apagarPrestadorDeServico(nomePrestador: string) {


    /*
    for (let i = 0; i < prestadorDeServico.length; i++) {

        if (prestadorDeServico[i]?.nome === nomePrestador) {

            return {
                status: true,
                message: "Prestador encontrado!",
                data: prestadorDeServico[i]
            };
        }
    }

    return {
        status: false,
        message: "Prestador não encontrado!",
        data: null
    };
}

*/

    // validacao do nome do prestador
    if (nomePrestador === "") {
        // se o prestador ja existe, retorna uma mensagem de erro
        return {
            status: false,
            message: " Nome do prestadoe é obrigatorio",
            data: null
        }
    }

    const prestadorExiste = prestadorDeServico.some((prestadorExistente: PrestadorType) => prestadorExistente.nome === nomePrestador);
    if (!prestadorExiste) {
        return {
            status: false,
            message: "Nao existe nenhum prestador de servico com esse nome",
            data: null
        }
    }


    prestadorDeServico.filter((prestadorExistente: PrestadorType) => prestadorExistente.nome !== nomePrestador)


    return {
        status: true,
        message: "Prestador removido com sucesso!",
        data: prestadorDeServico
=======
const taxaUrgencia: number = 0.3;
const minimodesconto: number = 100;
const percentagemDeDesconto: number = 0.1;

const servicoSelecionados: Servicotype[] = [];
const prestadoresDeServicos: prestadorType[] = []
const prestadoresDeSelecionados: prestadorType[] = []



// função para processar o pedido
export function processarPedido(pedido: pedidoServico, precoHora: number): number {
    let total: number;
    if (pedido.urgente) {
        total = pedido.horasEstimadas * precoHora;
        total = total + total * taxaUrgencia;
    } else {
        total = pedido.horasEstimadas * precoHora;
    }
    return total;
}

// funcao para criar prestador de servicos
export function criarPrestadorDeServicos(novoPrestador: prestadorType) {
    //verificar se o prestador ja esta no array
    prestadoresDeServicos.map((prestadorExistente: prestadorType) => {
        if (prestadorExistente.nome === novoPrestador.nome) {
            // se o prestador ja existir , retorna uma mensagem de erro
            return {
                status: false,
                message: "ja existe um prestador de servico com este nome",
                data: null
            }
        }
    })

    // se o prestador nao existir, adiciona o prestador ao array
    prestadoresDeServicos.push(novoPrestador)
    return {
        status: true,
        message: "prestador adicionado com sucesso",
        data: novoPrestador
    }
}

// funcao para editar prestador de serviço
export function editarPrestadorDeServico(nomeDoPrestador: string, novoDadosDoPrestador: prestadorType) {
    // encontrar o prestador de servico e editar na minha lista 
    // ciclo que percorre a lista e verifica o nome do prestador de servico

    prestadoresDeServicos.map((prestadorExistente: prestadorType) => {
        if (prestadorExistente.nome === nomeDoPrestador) {
            prestadorExistente.nome = novoDadosDoPrestador.nome
            prestadorExistente.precoHora = novoDadosDoPrestador.precoHora
            prestadorExistente.profissao = novoDadosDoPrestador.profissao
            prestadorExistente.minimoParaDesconto = novoDadosDoPrestador.minimoParaDesconto
            prestadorExistente.percentagemDesconto = novoDadosDoPrestador.percentagemDesconto
            prestadorExistente.taxaUrgencia = novoDadosDoPrestador.taxaUrgencia

            return {
                status: true,
                message: "prestador de servico editado com sucesso",
                data: prestadorExistente
            }
        }
    })


    // se nao existir nenhum prestador como nome recebido, retorna retorna uma mensagem de erro
    return {
        status: false,
        message: "nao existe nenhum prestador de servico com este nome",
        data: null
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
    }
}


<<<<<<< HEAD

//funcao para calculara o orcamento
export function calcularOrcamento(pedido: pedidoServicoType) {
    let totalBruto: number = 0;
    let totalFinal: number = 0;

    servicosSelecionados.map((servico: ServicoType) => {
        let totalDoServico = servico.precoHora * pedido.horasEstimadas;
=======
// apagar prestador de servico
export function apagarPrestadorDeServico(nomePrestador: string) {
    const novoArrayPrestadorDeServico: prestadorType[] = []
    // ciclo que precore a lista de prestadores
    for (let i = 0; i < prestadoresDeServicos.length; i++) {
        //if para verificar se o mome do prestador for igual ao nome  recebido 
        if (nomePrestador === prestadoresDeServicos[i]?.nome) {
            // se encontrarem remover o prestador 
            novoArrayPrestadorDeServico.push(prestadoresDeServicos[i]!)
            // retornar mensagem de sucesso
            return {
                status: true,
                mensagem: "prestador apagado com sucesso",
                data: novoArrayPrestadorDeServico
            }
            // se nao encontrar retornar mensagem de erro
        } else {
            return {
                status: false,
                mensagem: "Prestador nao encontrado",
                data: null
            }
        }
    }
}

// funcao para obter um prestador de servico pelo nome
export function obterPrestadorDeServico(nomePrestador: string) {
    for (let i = 0; i < prestadoresDeServicos.length; i++) {
        if (prestadoresDeServicos[i]?.nome === nomePrestador) {
            return prestadoresDeServicos[i]!
        }
    }
    return null
}


// funcao para selecionar prestador de servico
export function selecionarPrestadorDeServico(nomeDoprestador: string) {
    // ciclo for que percore o array prestadoresDeServico
    for (let i = 0; i < prestadoresDeServicos.length; i++) {
        // if que verifica o item [i] do array e igual ao nome recebido
        if (prestadoresDeServicos[i]?.nome === nomeDoprestador) {
            // se for igual, adiciona o item [i] ao array prestadoresSelecionados.push
            prestadoresDeSelecionados.push(prestadoresDeServicos[i]!)
            // retorna verdadeiro
            return true
        }
        // senao retorna falso
        return false
    }
}

// funcao para atualizar orcamento
export async function updateOrcamento(id: string, updatedOrcamento: prestadorType) {
    try {
        const query = "UPDATE tabela_orcamentos SET cliente=?, servico=?, horas_estimadas=?, urgente=?, preco_hora=?, taxa_urgencia=?, minimo_desconto=?, percentagem_desconto=?, total=?, created_at=?, update_at=? WHERE id=?"
        const values = [
            updatedOrcamento.nome,
            updatedOrcamento.profissao,
            updatedOrcamento.precoHora,
            updatedOrcamento.taxaUrgencia,
            updatedOrcamento.minimoParaDesconto,
            updatedOrcamento.percentagemDesconto,
            new Date(),
            id
        ]
        const [rows] = await db.execute(query, values)
        return rows
    } catch (error) {
        console.log({ "error": error })
>>>>>>> 85edafc958c02735ca774ea5fdb1e18871f1010b:_trash/orcamento.ts
        return null
    }
}

<<<<<<< HEAD:servidor-local/src/orcamento.ts
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
}


//funcao para selecionar prestador pelo nome
export function selecionarPrestador(nome: string) {
    let prestadorExiste = false
    for (let i = 0; i < prestadoresDeServico.length; i++) {
        if (prestadoresDeServico[i]?.nome === nome) {
            prestadoresSelecionados.push(prestadoresDeServico[i]!)
            prestadorExiste = true
            break
        }
    }

    if (prestadorExiste) {
        return "O prestador foi selecionado"
    } else {
        return "o prestador não existe"
    }
}

//funcao para editar prestador de servico
export function editarPrestadorDeServico(nomePrestador: string, novosDadosPrestador: PrestadorType): ResponseType {

    const prestadorExistente = prestadoresDeServico.find(
        (prestador: PrestadorType) => prestador.nome === nomePrestador
    );

    if (!prestadorExistente) {
        return {
            status: false,
            message: `Prestador com nome ${nomePrestador} não existe`,
            data: null
        };
    }

    prestadorExistente.nome = novosDadosPrestador.nome;
    prestadorExistente.precoHora = novosDadosPrestador.precoHora;
    prestadorExistente.profissao = novosDadosPrestador.profissao;
    prestadorExistente.minimoParaDesconto = novosDadosPrestador.minimoParaDesconto;
    prestadorExistente.percentagemDesconto = novosDadosPrestador.percentagemDesconto;
    prestadorExistente.taxaUrgencia = novosDadosPrestador.taxaUrgencia;

    return {
        status: true,
        message: "Prestador de serviço editado com sucesso",
        data: prestadorExistente
    };
}

//funcao para apagar um prestador de servico
export function apagarPrestador(nomePrestador: string): ResponseType {

    let newArray: PrestadorType[] = []
    let prestadorExiste = false
    let prestador: PrestadorType | null = null

    if (nomePrestador === "") {
        return {
            status: false,
            message: `Nome não pode ser vazio`,
            data: null
        }
    }

    for (let i = 0; i < prestadoresDeServico.length; i++) {
        if (prestadoresDeServico[i]?.nome !== nomePrestador) {
            newArray.push(prestadoresDeServico[i]!)
        } else {
            prestadorExiste = true
            prestador = prestadoresDeServico[i]!
        }
    }

    // prestadoresDeServico = prestadoresDeServico.filter(
    //     (prestadorExistente: PrestadorType) => {
    //         return prestadorExistente.nome !== nomePrestador
    //     })

    if (prestadorExiste) {
        prestadoresDeServico = newArray

        return {
            status: true,
            message: "prestador de servico apagado com sucesso",
            data: prestador
        }
    }

    return {
        status: false,
        message: `Prestador com nome ${nomePrestador}  não existe`,
        data: null
    }

}
=======

// calcular o orçamento
export function calcularOrcamento(pedido: pedidoServico) {
    let totalBruto: number = 0;
    let totalFinal: number = 0;

    servicoSelecionados.map((servico: Servicotype) => {
        let totalDoServico: number = servico.precoHora * pedido.horasEstimadas;
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
        totalBruto = totalBruto + totalDoServico;
    })

    totalFinal = totalBruto;

    if (pedido.urgente) {
<<<<<<< HEAD
        totalFinal = totalBruto + (totalBruto * taxaUrgencia);
    }

    if (totalBruto >= minimoDesconto) {
        totalFinal = totalFinal - (totalBruto * porcentagemDesconto);
    }

    return totalFinal;
    // () => {} --- arrow function
    // funtio () {} --- function normal




    /*
    urgrente: true
    totalBruto = 100
    taxaUrgencia = 1.3
    totalTaxa: 100 * .3 = 30
    totalFinal = 100 + 30 = 130
 
    totalBruto = 100
  totalbruto apos desconto = 100
  minimoDesconto = 100
  percentagem = 10%
  desconto sobre total final: 150 * 0.1 = 15
  desconto sobre total bruto: 100 * 0.1 = 10
 
 
    */
}


=======
        totalFinal = totalBruto + (totalBruto * 0.3)
    }
    if (totalBruto >= minimodesconto) {
        totalFinal = totalFinal - (totalFinal * percentagemDeDesconto);
    }
    return totalFinal;


    /*
    uegente:;true
    taxa de urgencia: 0.3
    totabroto: 100
    totaltaxa:100*0.3=30
    totalfinal: 100+30=130  
    totalbroto: 100
    total broto apos urgencia: 150
    minimo desconto: 100
    percentual desconto: 0.1
    desconto sobre taxa final: 150*0.1=15
    desconto sobre taxa broto: 100*0.1=10
    
    */
}
>>>>>>> 6882c7ff9db5db1972ef090b735c7803d73f7f73
>>>>>>> 85edafc958c02735ca774ea5fdb1e18871f1010b:_trash/orcamento.ts
