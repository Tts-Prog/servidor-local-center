import { LeftSection } from "@/components/registro/left_section";
import { RightSection } from "@/components/registro/right_section";

export default function RegistroPage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">
            <LeftSection/>
            <RightSection/>
        </div>
    
);
}