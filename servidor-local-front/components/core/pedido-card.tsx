
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";


interface categoriaType {
    id: number;
    name: string;
    icone: string;

}
interface PedidoCardProps {
    title: string,
    description: string,
    image: string,
    category: categoriaType,
}

// PedidoCard.tsx
export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        // rounded-[2.5rem] para dar aquele efeito super arredondado da foto
        <Card className="rounded-[2rem] overflow-hidden border-none shadow-sm bg-white p-4">
            <CardHeader className="p-0 relative">
                {/* Container da imagem com rounded interno */}
                <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden bg-blue-50">
                    <img 
                        className="w-full h-full object-cover opacity-90" 
                        src={pedidoCardProps.image} 
                        alt={pedidoCardProps.title} 
                    />
                    {/* Badge do Ícone Centralizado (conforme a imagem) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-full shadow-md text-blue-500">
                           <span className="text-xl">{pedidoCardProps.category.icone}</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            
            <CardContent className="pt-6 px-2">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-800">{pedidoCardProps.title}</h3>
                    <p className="text-black text-sm leading-snug line-clamp-2">
                        {pedidoCardProps.description}
                    </p>
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between px-2 pb-2">
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Starting at</p>
                    <p className="text-2xl font-black text-slate-800">$89.00</p>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl px-4 py-2 font-bold h-auto">
                    Browse Providers
                </Button>
            </CardFooter>
        </Card>
    );
}