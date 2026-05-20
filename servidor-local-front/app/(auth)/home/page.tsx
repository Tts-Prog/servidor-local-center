import { PedidoCard } from "@/components/core/pedido-card"

export default function Home() {
    return (
        <div>
            <h1>k</h1>
            <PedidoCard
                title="Instalar porta de entrada"
                description="preciso instalar uma porta de entrada em uma casa"
                image="/placeholder.png"
                category={{
                    id: "1",
                    nome: "Construção Civil",
                    icone: "/icone-placeholder.png",
                }}
            />
        </div>
    );
}
