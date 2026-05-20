import { LeftSection } from "@/components/registro/left-from";
import { RegistroForm } from "@/components/registro/rigth-from";

export default function RegistroPage() {
  return (
    <div className="bg-gray-200 h-screen flex justify-between">
      
      <LeftSection/>
      
      <RegistroForm/>
    </div>
  );
}
