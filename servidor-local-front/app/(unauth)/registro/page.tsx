import { LeftSection } from "@/components/registro/left-section";
import { RightSection } from "@/components/registro/right-section";

export default function LoginPage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">
            <LeftSection></LeftSection>
            
            <RightSection/>
        </div>
    );
}