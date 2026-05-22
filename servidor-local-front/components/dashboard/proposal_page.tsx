"use client"

import { Proposal_Board } from "./proposal2";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

export default function ProposalPage() {
    interface PropostaRequest{
        id: string | "",
        owner: string | "",
        estados: string | "",
        id_prestacao_servico:{
            id_servicos:{
                nome: string | "",
                categoria:{
                    id: string | ""
                    icone: string | ""
                }
            }
        } 
    }



    const dataQuery = gql`
        query GetAllProposta {
            getAllProposta {
                id
                owner
                estados
                id_prestacao_servico{
                    id_servicos{
                        nome
                        categoria{
                            id
                            icone
                        }
                    }
                }
            }
        }`


    function getAllProposta(): any {    
        const { data, loading, error } = useQuery<PropostaRequest>(dataQuery);
        return {loading, error, data };
    };



    const { loading, error, data } = getAllProposta();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const propostas = data?.getAllProposta || []; 

    return (

       
    <div>
        {console.log(data)}
      <h1>Home</h1>
      {propostas.map((propostaRequest: PropostaRequest) => (
        <Proposal_Board
        key={propostaRequest.id}
        id={propostaRequest.id}
        estados={propostaRequest.estados}
        owner={propostaRequest.owner}
        id_prestacao_servico={propostaRequest.id_prestacao_servico}
        />
      ))}
    </div>
  );
}