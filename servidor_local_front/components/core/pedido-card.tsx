"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";

interface CategoriaType {
  id: string;
  nome: string;
  icone: string;
}

interface PedidoCardProps {
  id: string;
  title: string;
  desciption: string;
  image: string;
  category: CategoriaType;
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
  return (
    <Card className="h-[400px] w-full">
      <CardHeader>
        <div className="w-full h-[200px] relative">
          <Image
            src={pedidoCardProps.image}
            alt={pedidoCardProps.title}
            fill
            className="object-cover"
          />

          <div className="absolute top-1/2 left-1/2 bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full text-sm">
            <Image
              src={pedidoCardProps.category.icone}
              alt={pedidoCardProps.category.nome}
              width={20}
              height={20}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <h1>{pedidoCardProps.title}</h1>
          <p>{pedidoCardProps.desciption}</p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div>
            <span>Average Price:</span>
            <span>$100</span>
          </div>

          <Link href={`/pedido/${pedidoCardProps.id}`} className=" ">
            Explore
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
