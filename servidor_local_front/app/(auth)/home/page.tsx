"use client";
import { PedidoCard } from "@/components/core/pedido-card";
import { getAllPrestacoesServicos } from "@/data/queries/prestacao-servico";
import { parseCookies } from "nookies";

export default function HomePage() {
  const { loading, error, data } = getAllPrestacoesServicos();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user, token } = parseCookies();

  const userData = JSON.parse(user);

  const orcaamentoPayload = {
    id_utilizador: userData.id,
  };

  return (
    <div>
      <h1>Home</h1>
      {data?.map((prestacaoServico) => (
        <PedidoCard
          key={prestacaoServico.id}
          id={prestacaoServico.id}
          title={prestacaoServico.designacao}
          desciption={prestacaoServico.designacao}
          image="/placeholder.jpeg"
          category={prestacaoServico.servico.categoria}
        />
      ))}
    </div>
  );
}
