import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            Criar Serviço
          </Button>

          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}
