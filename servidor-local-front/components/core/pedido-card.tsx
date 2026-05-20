import { Wrench } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"

interface CategoriaType {
    id: number;
    nome: string;
    icone: string;
}
interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: CategoriaType
}



export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <CardHeader>
                <div className="relative">
                    <img src={pedidoCardProps.image} alt={pedidoCardProps.title} className="w-full h-48 object-cover rounded-md" />
                    <div className="absolute top-2 left-2 text-white p-2">
                        <img src={pedidoCardProps.category.icone} alt={pedidoCardProps.category.nome} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <h2 className="text-xl font-semibold mt-4">{pedidoCardProps.title}</h2>
                <p className="text-gray-600 mt-2">{pedidoCardProps.description}</p>
            </CardContent>
            <CardFooter>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Ver Detalhes</button>
            </CardFooter>
        </Card>
    )
}