import Image from "next/image"
import { Card, CardContent, CardHeader } from "../ui/card"


interface CategoriaType {
    id: string
    name: string
    icone: string
}

interface PedidoCardProps {
    title: string
    description: string
    image: string
    category: CategoriaType
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card className="w-full h-[400px]">
            <CardHeader>
                <div className="w-full h-[200px] relative">
                    <Image
                        src={pedidoCardProps.image}
                        alt={pedidoCardProps.title}
                        fill 
                        className="object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 bg-secondary/80 text-secondary p-2">
                        <Image
                            src={pedidoCardProps.category.icone}
                            alt={pedidoCardProps.category.name}
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center justify-between">
                    <div>
                        <span>Average Price:</span>
                        <span>$100</span>
                    </div>
                    <Image
                        src="/icons/arrow-right.svg"
                        alt="Explore"
                        width={20}
                        height={20}
                    />
                </div>
            </CardContent>
        </Card>
    )
}