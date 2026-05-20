import db from "./lib/db.js"
import type { PrestadorTypeDB, PrestNome, ResponseType } from "./utils/types.js"

export class Prestador {
    nome: string
    precoHora: number
    profissao: string
    minimoParaDesconto: number
    percentagemDesconto: number
    taxaUrgencia: number

    constructor(nomeDoPrestador: string, precoHoraDoPrestador: number, profissaoDoPrestador: string, minimoParaDescontoDoPrestador: number, percentagemDescontoDoPrestador: number, taxaUrgenciaDoPrestador: number) {
        this.nome = nomeDoPrestador
        this.precoHora = precoHoraDoPrestador
        this.profissao = profissaoDoPrestador
        this.minimoParaDesconto = minimoParaDescontoDoPrestador
        this.percentagemDesconto = percentagemDescontoDoPrestador
        this.taxaUrgencia = taxaUrgenciaDoPrestador
    }


    alterarPrecoHora(novoPrecoHora: number) {
        this.precoHora = novoPrecoHora
    }


    alterarNome(novoNome: string) {
        this.nome = novoNome
    }

}


const prestador1 = new Prestador(
    "Inacio",
    100,
    "Programador",
    1000,
    0.1,
    0.3
)
const prestador2 = new Prestador(
    "Lula",
    100,
    "Mentiroso",
    2000,
    0.1,
    0.2
)

prestador1.alterarPrecoHora(150)
prestador1.alterarNome("Don Inacio")

const nomeDoPrestador: Prestador[] = []




// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados


export async function AddNewPrestador(newPrestador: PrestadorTypeDB) {
    console.log({newPrestador})

    try {
        const query = ''
    } catch (error) {
        
    }
}
 