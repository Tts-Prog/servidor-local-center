import Image from "next/image"
import { Card, CardContent, CardHeader } from "../ui/card"

interface CategoriaType{
    id:         string,
    nome:       string,
    icone:      string
};

interface PedidoCardProps{
    title:          string,
    description:    string,
    image:          string,
    category:       CategoriaType
};

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return(
        <Card className="rounded-[2rem] overflow-hidden border-none shadow-sm bg-white p-4">
            <CardHeader className="p-0 relative">
                <div className="relative rounded-[1.5rem] w-full h-48 overflow-hidden bg-blue-50">
                    <Image className="w-full h-full object-cover opacity-90"
                    src={pedidoCardProps.image} alt={pedidoCardProps.title} fill/>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-full shadow-md text-blue-500">
                            <span className="text-xl">{pedidoCardProps.category.icone}</span>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-6 px-2">
                <div className="flex flex-col gap-1">
                    <h3 ></h3>

                </div>
            </CardContent>

        </Card>
    )
}